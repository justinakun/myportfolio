import { BiLogoNodejs } from "react-icons/bi";
import "./NodeIcon.scss";

const NodeIcon = () => {
  return (
    <div className="node-icon-container">
      <BiLogoNodejs className="icon" />
      <div>Node.js</div>
    </div>
  );
};

export default NodeIcon;
