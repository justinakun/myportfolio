import PropTypes from "prop-types";
import "./SkillIcon.scss";

const SkillIcon = ({ Icon, text }) => {
  return (
    <div className="skill-icon-container">
      <Icon className="icon" />
      <p>{text}</p>
    </div>
  );
};

SkillIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillIcon;
