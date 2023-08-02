import Button from "../../components/Button/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.scss";

const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="contact-form" onSubmit={sendEmail} ref={form}>
      <h3 className="get-in-touch">DROP ME A MESSAGE</h3>
      <input type="text" placeholder="Name*" required name="userName" />
      <input type="email" placeholder="Email*" required name="userEmail" />
      <input type="text" placeholder="Subject" name="subject" />
      <textarea placeholder="Message*" required rows="5" name="message" />
      <Button text="Send" variant="contained" type="submit" />
    </form>
  );
};

export default EmailForm;
