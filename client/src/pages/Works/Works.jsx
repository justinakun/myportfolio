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
        title="NFTLanding"
        number={1}
        description="A final design project after completing 2 months of learning"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Fun w/ Flags"
        number={2}
        description="A simple project to learn flags from all over the world"
        skills={[<ReactIcon key="react-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Chat Away"
        number={3}
        description="A final full-stack project after completing 7 months of learning"
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
        description="A portfolio project to keep all of my works"
        skills={[<ReactIcon key="react-icon" />, <ScssIcon key="scss-icon" />]}
      />
    </div>
  );
};

export default Works;
