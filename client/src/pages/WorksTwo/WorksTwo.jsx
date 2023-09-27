import React from "react";
import "./WorksTwo.scss";

const WorksTwo = () => {
  return (
    <div className="works-two-container">
      <h1 className="works-two-title">Fun w/ Flags</h1>
      <div className="works-two-description">
        This React app is a simple game, allowing the user to guess countries
        based on the flags
      </div>
      <div className="works-two-image">
        <img src="/flag1.png" alt="flag1" />
      </div>
      <div>
        If the user knows the flag and submits it correctly, they get the
        following message:
      </div>
      <div className="works-two-image">
        <img src="/flag4.png" alt="flag4" />
        <img src="/flag5.png" alt="flag5" />
      </div>
      <div>
        The user is also given an option to skip by clicking on "Gimme next
        one!", or learn about the flag by clicking: "Oooops, I don't know"
      </div>
    </div>
  );
};

export default WorksTwo;
