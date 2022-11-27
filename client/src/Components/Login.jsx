import React, { useState } from "react";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

const Login = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  let tab;
  if (activeTab === "signIn") tab = <SignIn />;
  if (activeTab === "signUp") tab = <SignUp />;
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[25rem] bg-blue-400">
        {/* buttons here */}
        <div className="button flex justify-around mt-5">
          <button
            onClick={() => setActiveTab("signIn")}
            className="bg-yellow-400 w-[10rem] px-5 py-2 rounded-full"
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signUp")}
            className="bg-yellow-400 w-[10rem] px-5 py-2 rounded-full"
          >
            Sign-up
          </button>
        </div>
        {/* login  page */}
        <div className="mt-10">{tab}</div>
      </div>
    </div>
  );
};

export default Login;
