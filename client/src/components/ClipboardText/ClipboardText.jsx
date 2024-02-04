import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import PropTypes from "prop-types";
import "./ClipboardText.scss";

const ClipboardText = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard({
    copiedTimeout: 1500,
  });

  const handleCopy = () => {
    clipboard.copy(text);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <span
      onClick={handleCopy}
      style={{ cursor: "copy" }}
      title="Click to copy the email address"
    >
      {isCopied ? "Copied the email address!" : text}
    </span>
  );
};

ClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClipboardText;
