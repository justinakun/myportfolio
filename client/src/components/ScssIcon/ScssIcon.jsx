import { BsFiletypeScss } from "react-icons/bs";
import "./ScssIcon.scss";

const ScssIcon = () => {
  return (
    <div className="scss-icon-container">
      <BsFiletypeScss className="icon" />
      <div>SCSS</div>
    </div>
  );
};

export default ScssIcon;
