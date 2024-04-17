'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="hidden sm:block py-4">
        <div className="flex flex-wrap justify-center items-center">

          <div className="basis-1/4">
            <Image src="/lablogo.png" width={50} height={50} alt="logo" /> 
          </div>

          <nav>
            <ul className="navbar flex flex-nowrap items-center gap-4 text-xl font-medium text-gray-800">
              <li>
                <Link href="/page1"> page1 </Link>
              </li>
              <li>
                <Link href="/page2"> page2 </Link>
              </li>
              <li>
                <Link href="https://github.com/kbssj1/nextjs-tailwind-landingpage-template.git"> GitHub </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>

    <div className="hidden max-sm:block">
      <Button onClick={() => {setMobileMenuOpen(!isMobileMenuOpen);}} title="메뉴" />
      {
        isMobileMenuOpen && 
        <div
          className={
            " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isMobileMenuOpen
              ? " transition-opacity opacity-100 duration-500 translate-x-0  "
              : " transition-all delay-500 opacity-0 translate-x-full  ")
          }
        >
          <div
            className={
              " w-8/12 max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
              (isMobileMenuOpen ? " translate-x-0 " : " translate-x-full ")
            }
          >
            <nav>
              <ul className="navbar flex flex-nowrap flex-col gap-4 text-xl font-medium text-gray-800">
                <li>
                  <Link href="/page1"> page1 </Link>
                </li>
                <li>
                  <Link href="/page2"> page2 </Link>
                </li>
              </ul>
            </nav>

          </div>
          <div
            className="w-screen h-full cursor-pointer"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
          </div>
        </div>
      }
    </div>

    </div>
  );
};

export { Navbar };