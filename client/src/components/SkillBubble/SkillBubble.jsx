import "./SkillBubble.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoReact,
} from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";

const SkillBubble = () => {
  const skillIcons = {
    HTML: AiOutlineHtml5,
    CSS: BiLogoCss3,
    SCSS: BsFiletypeScss,
    JavaScript: IoLogoJavascript,
    Node: BiLogoNodejs,
    MongoDB: BiLogoMongodb,
    React: BiLogoReact,
  };

  // Array of skill names
  const skills = Object.keys(skillIcons);

  return (
    <div className="skill-bubble-container">
      {skills.map((skill) => {
        const IconComponent = skillIcons[skill];
        return (
          <div className="single-bubble-container" key={skill}>
            <h5 className="skill-text">{skill}</h5>
            <div className="bubble-puncture"></div>
            <IconComponent
              className={`bubble-icon bubble-${skill.toLowerCase()}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkillBubble;
