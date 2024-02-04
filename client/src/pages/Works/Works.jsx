import WorkItem from "../../components/WorkItem/WorkItem";
import { BiLogoReact } from "react-icons/bi"; //react
import { BiLogoCss3 } from "react-icons/bi"; //css
import { AiOutlineHtml5 } from "react-icons/ai"; //HTML
import { BiLogoNodejs } from "react-icons/bi"; //node
import { BiLogoMongodb } from "react-icons/bi"; //mongo
import { BsFiletypeScss } from "react-icons/bs"; //scss
import SkillIcon from "../../components/SkillIcon/SkillIcon";
import "./Works.scss";

const Works = () => {
  return (
    <div className="works-container">
      <WorkItem
        title="NFT Landing"
        number={1}
        description="A responsive design project completed as part of the learning journey"
        skills={[
          <SkillIcon key="html-icon" Icon={AiOutlineHtml5} text="HTML" />,
          <SkillIcon key="css-icon" Icon={BiLogoCss3} text="CSS" />,
        ]}
      />
      <WorkItem
        title="Fun w/ Flags"
        number={2}
        description="An engaging project aimed at enhancing knowledge of various flags from across the world"
        skills={[
          <SkillIcon key="react-icon" Icon={BiLogoReact} text="React" />,
          <SkillIcon key="css-icon" Icon={BiLogoCss3} text="CSS" />,
        ]}
      />
      <WorkItem
        title="Chat Away"
        number={3}
        description="A full-stack project - a forum, built to showcase the skills and knowledge acquired"
        skills={[
          <SkillIcon key="react-icon" Icon={BiLogoReact} text="React" />,
          <SkillIcon key="node-icon" Icon={BiLogoNodejs} text="Node.js" />,
          <SkillIcon key="mongodb-icon" Icon={BiLogoMongodb} text="MongoDB" />,
          <SkillIcon key="scss-icon" Icon={BsFiletypeScss} text="SCSS" />,
        ]}
      />
      <WorkItem
        title="Portfolio"
        number={4}
        description="A comprehensive portfolio project designed to display my collection of work"
        skills={[
          <SkillIcon key="react-icon" Icon={BiLogoReact} text="React" />,
          <SkillIcon key="scss-icon" Icon={BsFiletypeScss} text="SCSS" />,
        ]}
      />
    </div>
  );
};

export default Works;
