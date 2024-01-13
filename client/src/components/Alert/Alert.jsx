import "./Alert.scss";
import { BiSolidHappyAlt } from "react-icons/bi";

const Alert = ({ title, message, variant }) => {
  return (
    <div className={`alert-container ${variant}`}>
      <BiSolidHappyAlt className="alert-icon" />
      <div className="alert-content">
        <div className="alert-title">
          {title}
          {"  "}
          {message}
        </div>
        <div className="alert-message"></div>
      </div>
    </div>
  );
};

export default Alert;
