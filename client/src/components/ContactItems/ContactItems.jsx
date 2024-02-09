import { useState } from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import ClipboardText from "../ClipboardText/ClipboardText";
import Map from "../Map/Map";
import "./ContactItems.scss";

const ContactItems = () => {
  const [mapIsHovered, setIsHovered] = useState(false);
  const cityCoords = [54.687157, 25.279652];

  return (
    <div className="contacts-items">
      <div
        className="contact-item location"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="map-container">
          {mapIsHovered && <Map coords={cityCoords} />}
        </div>
        <GoLocation className="icon" />
        <span className="location-text">Vilnius, Lithuania</span>
      </div>
      <div className="contact-item contact-item-email">
        <GoMail className="icon" />
        <ClipboardText text="justina.kunigonyte@gmail.com" className="email" />
      </div>
      <div className="contact-item contact-item-link">
        <FiGithub className="icon" />
        <a
          className="contact-item-link"
          href="https://github.com/justinakun"
          title="Check out all code on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/justinakun
        </a>
      </div>
    </div>
  );
};

export default ContactItems;
