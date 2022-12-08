import React from "react";

import Button from "@mui/material/Button";
const NavBar = props => {
  return (
    <div className="absolute w-screen z-50">
      <div className="navbar bg-transparent px-10">
        <div className="flex-1">
          <a
            className={`btn btn-ghost normal-case  ${
              props.activeStatus !== "landing"
                ? "text-xl"
                : "text-4xl text-white"
            }`}
          >
            ACS
          </a>
        </div>
        <div className="flex gap-8">
          <div
            className={`flex gap-8 ${
              props.activeStatus === "landing" && "hidden"
            } ${props.activeStatus === "signUp" && "hidden"} `}
          >
            <div
              onClick={e => {
                e.preventDefault();
                props.setActiveTab("complain");
              }}
              className={`cursor-pointer select-none text-xl ${
                props.activeTab === "complain" && "font-bold "
              }`}
            >
              Complain
            </div>
            <div
              onClick={e => {
                e.preventDefault();
                props.setActiveTab("search");
              }}
              className={`cursor-pointer select-none text-xl ${
                props.activeTab === "search" && "font-bold "
              }`}
            >
              Search
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="avatar">
                <div className={`w-10 rounded-full`}>
                  <img
                    src={
                      "https://2.bp.blogspot.com/-_yR2ww54dO8/Xtu-pVi2mYI/AAAAAAAA2DY/CNJen388JGIbwmxbf5r_V2xhDmQ5WAJRQCLcBGAsYHQ/s1600/Flag_of_Nepal.gif"
                    }
                    className={`${
                      props.activeStatus !== "landing" && "hidden"
                    }`}
                  />
                  <img
                    src={
                      "https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?pid=ImgDet&rs=1"
                    }
                    className={`${
                      props.activeStatus !== "loggedIn" && "hidden"
                    }`}
                  />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
                props.activeStatus === "landing" && "hidden"
              }  ${props.activeStatus === "loggedIn" && "block"} 
              }`}
            >
              <li>
                <a className="justify-between select-none">Profile</a>
              </li>
              <li>
                <a className="select-none">Settings</a>
              </li>
              <li>
                <a
                  className="select-none"
                  onClick={e => {
                    e.preventDefault();
                    props.setActiveStatus("landing");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className={`${props.activeStatus !== "landing" && "hidden"}`}>
            <Button
              variant="contained"
              onClick={e => {
                e.preventDefault();
                console.log("signUp");
                props.setActiveStatus("signUp");
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
