import { Button } from "./Button";

const CallToAction = () => {

  return (
    <div className="flex flex-col items-center bg-slate-50 py-20">
      <p className="text-2xl text-center">Product Features For Call To Action</p>
      <br></br>
      <p className="text-xl text-center">Product Features For Call To Action</p>
      <br></br>
      <div>
        <form className="flex">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" /> 
            <Button title="Action" />
        </form>
      </div>
    </div>
  );
};

export { CallToAction };