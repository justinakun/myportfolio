import React from "react";
import "./TinyCard.scss";
import MeIcon from "../MeIcon/MeIcon";
import SkillBubble from "../SkillBubble/SkillBubble";

const TinyCard = ({ text, image }) => {
  return (
    <div className="tinycard-container">
      <div className="tinycard-title">
        <h1>SKILLS AND FOUNDATIONS</h1>
        <SkillBubble />
      </div>
    </div>
  );
};

export default TinyCard;
