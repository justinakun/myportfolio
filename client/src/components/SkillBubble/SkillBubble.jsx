import "./SkillBubble.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";

const SkillBubble = () => {
  return (
    <div className="skill-bubble-container">
      <div className="single-bubble-container">
        <h5>HTML</h5>
        <div className="bubble-puncture"></div>
        <AiOutlineHtml5 className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>CSS</h5>
        <div className="bubble-puncture"></div>
        <BiLogoCss3 className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>SCSS</h5>
        <div className="bubble-puncture"></div>
        <BsFiletypeScss className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>JavaScript</h5>
        <div className="bubble-puncture"></div>
        <IoLogoJavascript className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>Node.Js</h5>
        <div className="bubble-puncture"></div>
        <BiLogoNodejs className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>Mongo.Db</h5>
        <div className="bubble-puncture"></div>
        <BiLogoMongodb className="bubble-icon" />
      </div>
      <div className="single-bubble-container">
        <h5>React</h5>
        <div className="bubble-puncture"></div>
        <BiLogoReact className="bubble-icon" />
      </div>
    </div>
  );
};

export default SkillBubble;
