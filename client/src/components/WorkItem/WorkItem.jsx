import { Link } from "react-router-dom";
import { unauthenticatedRoutes } from "../../routes/const";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import "./WorkItem.scss";

const WorkItem = ({ number, title, description, skills }) => {
  const route = unauthenticatedRoutes.find(
    (route) => route.path === `/works/${number}`
  );

  return (
    <div className="work-item">
      <div className="work-item-first">
        <div className="work-item-number">0{number}</div>
        <div className="work-item-title">{title}</div>
      </div>
      <div className="work-item-second">{description}</div>
      <div className="work-item-third">
        <div className="work-item-skills">{skills}</div>
        <div className="work-item-button">
          <Link to={route.path}>
            <div className="work-item-more" title="See details">
              <MdKeyboardArrowRight className="more-icon" />
            </div>
          </Link>
        </div>
      </div>
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
