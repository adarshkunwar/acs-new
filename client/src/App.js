import React, { useState } from "react";
import "./App.css";
import LoggedIn from "./Components/LoggedIn";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Search from "./Components/LoggedIn/Search";
import NavBar from "./Components/NavBar";
function App() {
  const [activeStatus, setActiveStatus] = useState(false);
  let main;
  if (activeStatus === false)
    main = <Landing setActiveStatus={setActiveStatus} />;
  if (activeStatus === true)
    main = <LoggedIn setActiveStatus={setActiveStatus} />;
  return (
    <div>
      {/* <Landing /> */}
      {/* <LoggedIn />
      {/*   <Search/> */}
      <NavBar />
      {main}
    </div>
  );
}

export default App;
