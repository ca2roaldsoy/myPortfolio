import React from "react";
import "./style/style.scss";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <Home />
      <Profile />
      <Experience />
    </div>
  );
}

export default App;
