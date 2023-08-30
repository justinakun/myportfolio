import "./WorkItem.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const WorkItem = ({ number, title, description, skills }) => {
  return (
    <div className="work-item">
      <div className="work-item-number-container">
        <div className="work-item-number">{number}</div>
      </div>
      <div className="work-item-title">{title}</div>
      <div className="work-item-description">{description}</div>
      <div className="work-item-skills">{skills}</div>
      <div className="work-item-more">
        <MdKeyboardArrowRight className="more-icon" />
      </div>
    </div>
  );
};

export default WorkItem;
