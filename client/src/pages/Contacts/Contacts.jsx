import EmailForm from "../../components/EmailForm/EmailForm";
import ContactItems from "../../components/ContactItems/ContactItems";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <ContactItems />
      <EmailForm />
    </div>
  );
};

export default Contacts;
