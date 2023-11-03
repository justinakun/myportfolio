import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import "./ClipboardText.scss";

const ClipboardText = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard({
    copiedTimeout: 1500, // Set the duration of the "Copied!" message
  });

  const handleCopy = () => {
    clipboard.copy(text);
    setIsCopied(true);

    // Reset the "Copied!" message after a brief delay
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <span onClick={handleCopy} style={{ cursor: "copy" }}>
      {isCopied ? "Copied the email address!" : text}
    </span>
  );
};

export default ClipboardText;
