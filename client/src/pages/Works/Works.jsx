import WorkItem from "../../components/WorkItem/WorkItem";
import HtmlIcon from "../../components/HtmlIcon/HtmlIcon";
import CssIcon from "../../components/CssIcon/CssIcon";

import "./Works.scss";

const Works = () => {
  return (
    <div className="works-container">
      <WorkItem
        title="NFTLanding"
        number="01"
        description="A final design project after completing 2 months of learning"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
    </div>
  );
};

export default Works;
