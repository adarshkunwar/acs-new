import React, { useState, useEffect } from "react";
import Complain from "./LoggedIn/Complain";
import Search from "./LoggedIn/Search.jsx";
const LoggedIn = (props) => {
  let tab;
  if (props.activeTab === "complain") tab = <Complain />;
  if (props.activeTab === "search") tab = <Search />;

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex-col">
          {/* <div className="flex justify-between space-x-4">
          <div className="bg-yellow-400">Complain</div>
          <div className="bg-yellow-400">Search</div>
        </div> */}
          <div>{tab}</div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
