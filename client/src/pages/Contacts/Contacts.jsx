import EmailForm from "../../components/EmailForm/EmailForm";
import ContactItems from "../../components/ContactItems/ContactItems";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <EmailForm />
      <ContactItems />
    </div>
  );
};

export default Contacts;
