
const Features = () => {

  return (
    <div className="py-10 bg-slate-50">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-blue-500 text-6xl">Product Features</h3>
        <br/>
        <p className="text-xl py-10">Product Features</p>
        <div className="aspect-video">
          <iframe
            className="w-[600px] h-[300px]"
            src="https://www.youtube.com/embed/9bGwq0IBGT4?si=N3ZImZdvLCYEstEw"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export { Features };