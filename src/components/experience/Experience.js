import React from "react";
import Work from "./Work";
import Education from "./Education";

function Experience() {
  return (
    <article className="heading_container" id="experience">
      <div className="container exp_container">
        <h2>EXPERIENCE</h2>
        <Education />
        <Work />
      </div>
    </article>
  );
}

export default Experience;
