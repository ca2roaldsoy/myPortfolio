import React from "react";
import MyInfo from "./MyInfo";
import AboutMe from "./AboutMe";

function Profile() {
  return (
    <div className="container">
      <main role="main" className="heading_container">
        <h2>PROFILE</h2>
        <MyInfo />
        <AboutMe />
      </main>
    </div>
  );
}

export default Profile;
