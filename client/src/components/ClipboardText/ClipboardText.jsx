import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";

const ClipboardText = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard({
    copiedTimeout: 1500, // Set the duration of the "Copied!" message
  });

  const handleCopy = () => {
    clipboard.copy(text);
    setIsCopied(true);

    // Reset the "Copied!" message after a brief delay
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <span onClick={handleCopy} style={{ cursor: "pointer" }}>
      {isCopied ? "Copied!" : text}
    </span>
  );
};

export default ClipboardText;
