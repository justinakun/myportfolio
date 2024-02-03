import WorkItem from "../../components/WorkItem/WorkItem";
import HtmlIcon from "../../components/HtmlIcon/HtmlIcon";
import CssIcon from "../../components/CssIcon/CssIcon";
import ReactIcon from "../../components/ReactIcon/ReactIcon";
import NodeIcon from "../../components/NodeIcon/NodeIcon";
import ScssIcon from "../../components/ScssIcon/ScssIcon";
import "./Works.scss";
import Mongodb from "../../components/MongodbIcon/Mongodb";

const Works = () => {
  return (
    <div className="works-container">
      <WorkItem
        title="NFT Landing"
        number={1}
        description="A responsive design project completed as part of the learning journey"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Fun w/ Flags"
        number={2}
        description="An engaging project aimed at enhancing knowledge of various flags from across the world"
        skills={[<ReactIcon key="react-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Chat Away"
        number={3}
        description="A full-stack project - a forum, built to showcase the skills and knowledge acquired"
        skills={[
          <ReactIcon key="react-icon" />,
          <NodeIcon key="node-icon" />,
          <Mongodb key="mongodb-icon" />,
          <ScssIcon key="scss-icon" />,
        ]}
      />
      <WorkItem
        title="Portfolio"
        number={4}
        description="A comprehensive portfolio project designed to display my collection of work"
        skills={[<ReactIcon key="react-icon" />, <ScssIcon key="scss-icon" />]}
      />
    </div>
  );
};

export default Works;
