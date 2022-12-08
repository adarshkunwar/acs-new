import React from "react";

const SignIn = props => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="card col-span-2 flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 glassMorph">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
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
      </div>
    </div>
  );
};

export default SignIn;
