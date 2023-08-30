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
      <WorkItem
        title="Fun w/ Flags"
        number="02"
        description="A simple project to learn flags from all over the world"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Chat Away"
        number="03"
        description="A final full-stack project after completing 7 months of learning"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
      <WorkItem
        title="Portfolio"
        number="04"
        description="A portfolio project to keep all of my works"
        skills={[<HtmlIcon key="html-icon" />, <CssIcon key="css-icon" />]}
      />
    </div>
  );
};

export default Works;
