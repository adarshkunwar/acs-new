import React from "react";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      {/* logo */}
      <div className="absolute top-0 left-0 ml-5 mt-3 text-2xl">logo here</div>
      <div className="grid grid-cols-3 gap-10 justify-evenly items-center">
        <div className="col-span-2 text-4xl">
          {/* array of text to circle too */}
          {/* tag line */}
          <div className="3xl">Let's fight corruption</div>
          {/* click here button */}
          <button className="bg-yellow-400 px-5 py-2 rounded-full text-xl">
            Gets fight!!
          </button>
        </div>
        <div className="w-96 h-96 bg-blue-300">Random image array</div>
      </div>
    </div>
  );
};

export default Landing;
