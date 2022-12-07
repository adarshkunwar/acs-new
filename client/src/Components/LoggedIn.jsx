import React, { useState, useEffect } from "react";
import Complain from "./LoggedIn/Complain";
import Search from "./LoggedIn/Search.jsx";
const LoggedIn = () => {
  const [activeTab, setActiveTab] = useState("search");
  let tab;
  if (activeTab === "complain") tab = <Complain setActiveTab={setActiveTab} />;
  if (activeTab === "search") tab = <Search setActiveTab={setActiveTab} />;

  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-300 flex justify-between px-32">
        <a className="btn btn-ghost normal-case text-xl">
          Anti Corruption System
        </a>
        <div>
          <a
            className={`btn btn-ghost normal-case text-xl ${
              activeTab === "complain" && "font-bold"
            }`}
            onClick={() => setActiveTab("complain")}
          >
            Complain
          </a>
          <a
            className={`btn btn-ghost normal-case text-xl ${
              activeTab === "search" && "font-bold"
            }`}
            onClick={() => setActiveTab("search")}
          >
            Search
          </a>
        </div>
      </div>
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
