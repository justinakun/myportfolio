import EmailForm from "../../components/EmailForm/EmailForm";
import ContactItems from "../../components/ContactItems/ContactItems";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="email-items-container">
        <EmailForm />
      </div>
      <div className="contact-items-container">
        <img src="/mailbird.png" alt="mail bird" className="mail-bird" />
        <ContactItems />
      </div>
    </div>
  );
};

export default Contacts;
