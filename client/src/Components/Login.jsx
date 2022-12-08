import React, { useState } from "react";
import Button from "@mui/material/Button";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";

const Login = () => {
  const [sign, setSign] = useState("signUp");
  let tab;
  if (sign === "signUp") tab = <SignUp />;
  if (sign === "signIn") tab = <SignIn />;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <div className="flex w-full">
          <div
            onClick={() => setSign("signUp")}
            className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
          >
            <Button variant="contained" color="success">
              SignUp
            </Button>
          </div>
          <div className="divider divider-horizontal">|</div>
          <div
            onClick={() => setSign("signIn")}
            className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
          >
            <Button variant="contained" color="success">
              SignIn
            </Button>
          </div>
        </div>
        <div>{tab}</div>
      </div>
    </div>
  );
};

export default Login;
