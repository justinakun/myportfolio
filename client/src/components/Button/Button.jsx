import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, variant }) => {
  const capitalizedText = text.toUpperCase();
  return (
    <button className={`styled-button ${variant}`}>{capitalizedText}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined"]),
};

export default Button;
