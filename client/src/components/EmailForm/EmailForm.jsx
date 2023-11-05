import Button from "../../components/Button/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailBird from "../EmailBird/EmailBird";
import "./EmailForm.scss";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [sending, setSending] = useState("false");
  const [sent, setSent] = useState(false);
  const form = useRef();

  const validateName = () => {
    if (/^[A-Za-z]{2,}$/.test(name)) {
      setNameError("");
      return true;
    } else {
      setNameError(
        "** Name must be at least two letters and can only contain letters **"
      );
      return false;
    }
  };

  const validateEmail = () => {
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("** Please enter a valid email address **");
      return false;
    }
  };

  const validateMessage = () => {
    if (message.length >= 20) {
      setMessageError("");
      return true;
    } else {
      setMessageError("** Message must contain at least 20 characters **");
      return false;
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "userName":
        validateName();
        break;
      case "userEmail":
        validateEmail();
        break;
      case "message":
        validateMessage();
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "userName":
        setName(e.target.value);
        if (nameError !== "") {
          validateName();
        }
        break;
      case "userEmail":
        setEmail(e.target.value);
        if (emailError !== "") {
          validateEmail();
        }
        break;
      case "message":
        setMessage(e.target.value);
        if (messageError !== "") {
          validateMessage();
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validateMessage()) {
      setSending(true);

      // Set 'sent' to true after 4 seconds
      setTimeout(() => {
        setSent(true);
        setSending(false); // Set 'sending' to false when 'sent' becomes true
      }, 4000); // 4 seconds

      // Reset 'sent' to false after 9 seconds (4 seconds for 'sent' + 5 seconds for 'sent')
      setTimeout(() => {
        setSent(false);
      }, 9000); // 9 seconds

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
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
            setSent(true);
            setSending(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  // Define a CSS class for inputs with errors
  const inputErrorClass = (error) => (error ? "error-border" : "");

  return (
    <div>
      <div>{sent && <p>email has been sent</p>}</div>
      <form className="contact-form" onSubmit={handleSubmit} ref={form}>
        <h3 className="get-in-touch">DROP ME A MESSAGE</h3>
        <input
          type="text"
          placeholder="Name*"
          name="userName"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputErrorClass(nameError)} // Apply error class
        />
        {nameError !== "" && <span>{nameError}</span>}

        <input
          type="text"
          placeholder="Email*"
          name="userEmail"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputErrorClass(emailError)} // Apply error class
        />
        {emailError !== "" && <span>{emailError}</span>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Message*"
          rows="5"
          name="message"
          value={message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputErrorClass(messageError)} // Apply error class
        />
        {messageError !== "" && <span>{messageError}</span>}
        {sending === "true" ? (
          <EmailBird />
        ) : (
          <Button text="Send" variant="contained" type="submit" />
        )}
      </form>
    </div>
  );
};

export default EmailForm;
