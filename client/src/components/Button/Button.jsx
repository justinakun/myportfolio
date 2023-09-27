import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, variant, onClick }) => {
  const capitalizedText = text.toUpperCase();
  return (
    <button className={`styled-button ${variant}`} onClick={onClick}>
      {capitalizedText}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  onClick: PropTypes.func,
};

export default Button;
