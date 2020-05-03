import React from "react";
import MyInfo from "./MyInfo";
import AboutMe from "./AboutMe";

function Profile() {
  return (
    <main role="main" className="heading_container container">
      <h2>PROFILE</h2>
      <MyInfo />
      <AboutMe />
    </main>
  );
}

export default Profile;
