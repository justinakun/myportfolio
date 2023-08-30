import { GoLocation, GoMail } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import ClipboardText from "../ClipboardText/ClipboardText";
import "./ContactItems.scss";
import { Link } from "react-router-dom";

const ContactItems = () => {
  return (
    <div className="contacts-items">
      <div className="contact-item">
        <GoLocation className="icon" />
        Vilnius, Lithuania
      </div>
      <div className="contact-item">
        <GoMail className="icon" />
        <ClipboardText text="justina.kunigonyte@gmail.com" />
      </div>
      <div className="contact-item">
        <FiGithub className="icon" />
        <Link to="https://github.com/justinakun">github.com/justinakun</Link>
      </div>
    </div>
  );
};

export default ContactItems;
