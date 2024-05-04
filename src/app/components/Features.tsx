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
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h3 className="text-blue-500 text-left text-5xl">Best Product <br></br> For Your Digital Game</h3>
          <br/>
          <p className="text-xl text-left py-10">Get an Awesome Game Template <br></br> For Your Time</p>
        </div>
        <Image className="hover:cursor-pointer" src="/code.png" width={500} height={500} alt="image" /> 
      </div>
    </div>
  );
};

export { Features, Features2 };