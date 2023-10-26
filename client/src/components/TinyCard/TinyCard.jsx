import React from "react";
import "./TinyCard.scss";
import MeIcon from "../MeIcon/MeIcon";

const TinyCard = ({ text, image }) => {
  return (
    <div className="tinycard-container">
      <div className="tinycard-title">
        <h4>ABOUT ME</h4>
        <MeIcon />
      </div>
      <p>
        I embarked on my journey as an aspiring Front-End developer in 2022, and
        it all began with the completion of Harvard's Introduction to Computer
        Science course. This pivotal experience marked my first significant step
        into the world of computing, igniting a deep passion and curiosity
        within me that continues to grow.
      </p>
      <p>
        After completing the course, I was driven to continue my journey toward
        becoming a Front-End developer. I successfully completed a dedicated
        Front-End course, channeling my creativity into various projects. You
        can explore my portfolio and see my work showcased on this website.
      </p>
      <p></p>
    </div>
  );
};

export default TinyCard;
