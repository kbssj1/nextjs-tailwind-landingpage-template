'use client';

import React, { useState, useEffect, PropsWithChildren } from 'react'

type props = {
  autoSlide: boolean,
  autoSlideInterval: number,
  children: React.ReactElement[]
}

const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 } : props) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  const click = (i:number) => {setCurr(i)};

  useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
  }, [])

  return (
    <div className='w-full'>
      <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
          {children}
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {children.map((s, i) => (
              <div key={i} onClick={()=>click(i)} className={`transition-all w-3 h-3 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel