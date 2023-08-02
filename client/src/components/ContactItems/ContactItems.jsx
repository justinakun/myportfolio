import { GoLocation, GoMail } from "react-icons/go";
import ClipboardText from "../ClipboardText/ClipboardText";
import "./ContactItems.scss";

const ContactItems = () => {
  return (
    <div className="contacts-items">
      <div className="contact-item">
        <GoLocation className="icon" />
        Vilnius, Lithuania
      </div>
      <div className="contact-item">
        <GoMail className="icon" />
        justina.kunigonyte@gmail.com
      </div>
      <div>
        <p>
          Click on the text to copy to clipboard:{" "}
          <ClipboardText text="Hello, world!" />
        </p>
      </div>
    </div>
  );
};

export default ContactItems;
