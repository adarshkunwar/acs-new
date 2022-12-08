import React from "react";

const NavBar = props => {
  return (
    <div className="absolute w-screen z-50">
      <div className="navbar bg-transparent px-10">
        <div className="flex-1">
          <a
            className={`btn btn-ghost normal-case  ${
              props.activeStatus ? "text-xl" : "text-4xl text-white"
            }`}
          >
            ACS
          </a>
        </div>
        <div className="flex gap-8">
          <div
            className={`flex gap-3 ${props.activeStatus ? "block" : "hidden"}`}
          >
            <div
              onClick={e => {
                e.preventDefault();
                props.setActiveTab("complain");
              }}
              className={`cursor-pointer ${
                props.activeTab === "complain" && "font-bold"
              }`}
            >
              Complain
            </div>
            <div
              onClick={e => {
                e.preventDefault();
                props.setActiveTab("search");
              }}
              className={`cursor-pointer ${
                props.activeTab === "search" && "font-bold"
              }`}
            >
              Search
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
                props.activeStatus ? "block" : "hidden"
              }`}
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={e => {
                    e.preventDefault();
                    props.setActiveStatus(false);
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
