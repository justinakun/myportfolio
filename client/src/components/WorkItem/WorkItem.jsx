import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { unauthenticatedRoutes } from "../../routes/const";
import "./WorkItem.scss";

const WorkItem = ({ number, title, description, skills }) => {
  // Find the corresponding route object based on the number
  const route = unauthenticatedRoutes.find(
    (route) => route.path === `/works/${number}`
  );

  return (
    <div className="work-item">
      <div className="work-item-number-container">
        <div className="work-item-number">0{number}</div>
      </div>
      <div className="work-item-title">{title}</div>
      <div className="work-item-description">{description}</div>
      <div className="work-item-skills">{skills}</div>
      {route && (
        <Link to={route.path}>
          <div className="work-item-more">
            <MdKeyboardArrowRight className="more-icon" />
          </div>
        </Link>
      )}
    </div>
  );
};

WorkItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.node,
};

export default WorkItem;
