import React, { useState } from "react";
import "./App.css";
import LoggedIn from "./Components/LoggedIn";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Search from "./Components/LoggedIn/Search";
import NavBar from "./Components/NavBar";
import Complain from "./Components/LoggedIn/Complain";
function App() {
  const [activeStatus, setActiveStatus] = useState(false);
  const [activeTab, setActiveTab] = useState("search");
  let main;
  if (activeStatus === false)
    main = <Landing setActiveStatus={setActiveStatus} />;
  if (activeStatus === true)
    main = <LoggedIn setActiveStatus={setActiveStatus} activeTab={activeTab} />;
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
