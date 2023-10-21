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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id
        unde deserunt deleniti eius? Animi, accusamus non quas aut doloribus
        cumque accusantium eaque ex quae itaque. Fugit possimus asperiores
        officia debitis ullam pariatur aspernatur
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab
        perferendis distinctio nihil perspiciatis ea beatae itaque,
        reprehenderit exercitationem vero a porro? Commodi, esse recusandae?
        <img src="./duck.png" alt="" />
      </p>
    </div>
  );
};

export default TinyCard;
