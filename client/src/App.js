import React, { useState } from "react";
import "./App.css";
import LoggedIn from "./Components/LoggedIn";
// import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Search from "./Components/LoggedIn/Search";
import NavBar from "./Components/NavBar";
import Complain from "./Components/LoggedIn/Complain";
import SignIn from "./Components/SignIn/SignIn";
import Login from "./Components/Login";
import SignUp from "./Components/SignIn/SignUp";
function App() {
  const [activeStatus, setActiveStatus] = useState("landing");
  const [activeTab, setActiveTab] = useState("search");
  let main;
  if (activeStatus === "landing")
    main = <Landing setActiveStatus={setActiveStatus} />;
  if (activeStatus === "signUp")
    main = <SignUp setActiveStatus={setActiveStatus} />;
  if (activeStatus === "loggedIn")
    main = (
      <LoggedIn
        setActiveStatus={setActiveStatus}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  return (
    <div>
      {/* <Landing /> */}
      {/* <LoggedIn />

{/*   <Search/> */}
      <NavBar
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {main}
    </div>
  );
}

export default App;
