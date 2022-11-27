import React from "react";
import Complain from "./LoggedIn/Complain";

const LoggedIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex-col">
        {/* <div className="flex justify-between space-x-4">
          <div className="bg-yellow-400">Complain</div>
          <div className="bg-yellow-400">Search</div>
        </div> */}
        <div>
          <Complain />
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
