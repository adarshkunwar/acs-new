import React from "react";
import map from "../../img/map.png";
const SignUp = props => {
  return (
    <div className="h-screen w-screen flex justify-evenly items-center">
      <div className="absolute">
        <img
          src={map}
          className="w-screen h-screen object-contain opacity-30"
        />
      </div>
      <div>
        <div className="card col-span-2 flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 glassMorph">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">userName</span>
              </label>
              <input
                type="text"
                placeholder="userName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">citizenship number</span>
              </label>
              <input
                type="text"
                placeholder="Citizenship Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Confirm password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={e => {
                  e.preventDefault();
                  props.setActiveStatus("landing");
                }}
              >
                Sign Up
              </button>
            </div>
            <label className="label">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  props.setActiveStatus("landing");
                }}
                className="label-text-alt  text-md link link-hover"
              >
                Already Have an account?
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
