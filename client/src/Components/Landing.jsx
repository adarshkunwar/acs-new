import React from "react";
import Typewriter from "typewriter-effect";
import homeImg from "../img/mount.jpg";
import video from "../img/video.mov";

const Landing = props => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        {/* <video autoPlay loop muted className="opacity-70">
          <source src={video} type="video/mp4" />
        </video> */}
        {/* <div className="w-screen h-screen glass absolute"></div> */}
        <img src={homeImg} alt="" className="w-screen h-screen" />
      </div>
      <div className="hero-content w-full flex-col-reverse lg:grid lg:grid-cols-6">
        <div className="card col-span-2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 glassMorph">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white select-none">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered select-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white select-none">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered select-none"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={e => {
                  e.preventDefault();
                  props.setActiveStatus("loggedIn");
                }}
              >
                Login
              </button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt  text-md link link-hover">
                Create an Account?
              </a>
            </label>
          </div>
        </div>
        <div className="text-center lg:text-left col-span-4">
          <h1 className="text-4xl text-center font-bold block md:hidden">
            Lets fight Corruption
          </h1>
          <h1 className="text-5xl select-none font-bold hidden md:block text-white">
            <Typewriter
              options={{
                strings: [
                  "Corruption is a shame on fame",
                  "Corruption makes our nation dirty and filthy.",
                  "Anti-corruption is the mantra for a developed nation.",
                  "Corruption is a true enemy of development.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
