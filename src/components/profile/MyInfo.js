import React from "react";

function MyInfo() {
  return (
    <section id="profile">
      <img src="images/myprofile_image.jpg" alt="profile image of me" />
      <div id="profile_info">
        <p>
          <b>Name:</b> Cato Roaldsøy
        </p>
        <p>
          <b>Age:</b> 32 years
        </p>
        <p>
          <b>Adress:</b> P. Krohns Veg 12
        </p>
        <p>
          <b>City:</b> 4352 Kleppe
        </p>
        <a href="https://www.facebook.com/people/Cato-Roalds%C3%B8y/100000434225604">
          Look me up on Facebook
        </a>
      </div>
    </section>
  );
}

export default MyInfo;
