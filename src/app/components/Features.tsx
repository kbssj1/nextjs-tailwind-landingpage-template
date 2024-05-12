import { Button } from "./Button";
import Image from 'next/image';

const Features = () => {

  return (
    <div className="py-10 bg-slate-50">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-blue-500 text-center text-6xl">Best Product <br></br> For Your Digital Game</h3>
        <br/>
        <p className="text-xl text-center py-10">Get an Awesome Game Template <br></br> For Your Time</p>
        <div className="hidden sm:block">
          <div className="aspect-video">
            <iframe
              className="w-[600px] h-[300px]"
              src="https://www.youtube.com/embed/9bGwq0IBGT4?si=N3ZImZdvLCYEstEw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </div>
        </div>

        <div className="hidden max-sm:block">
          <Button title="Action" />
        </div>

      </div>
    </div>
  );
};

const Features2 = () => {

  return (
    <div className="py-10 bg-slate-50">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col">
          <h3 className="text-blue-500 text-left text-5xl">Best Product <br></br> For Your Digital Game</h3>
          <br/>
          <p className="text-xl text-left py-10">Get an Awesome Game Template <br></br> For Your Time</p>
        </div>
        <Image unoptimized className="hidden sm:block" src="/code.png" width={500} height={500} alt="image" /> 
      </div>
    </div>
  );

};

const Features3 = () => {

  return (
    <div className="py-20">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col">
          <h3 className="text-4xl text-center">What is This Assset </h3>
          <br/>
          <p className="text-xl py-10 text-center">Get an Awesome Game Template For Your Time <br></br> Create a game with this template and save your time. This template has a lot.</p>
        </div>
      </div>
    </div>
  );

};

const Features4 = () => {

  return (
    <div>
      <Image src="/digital.jpg" unoptimized width={0} height={0} sizes="100vw" style={{ width: '100%', height: '500px' }} alt="image" />
      <div className="absolute bottom-10 py-2 inset-x-0 text-white text-xl text-center">Get an Awesome Game Template For Your Time</div>
    </div>
  );

};

export { Features, Features2, Features3, Features4 };