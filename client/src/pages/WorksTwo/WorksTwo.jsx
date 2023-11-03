import "./WorksTwo.scss";
import { Link } from "react-router-dom";
const WorksTwo = () => {
  return (
    <div className="works-two-container">
      <h1 className="works-two-title">Fun w/ Flags</h1>
      <div className="works-two-description">
        This React app is a simple game that challenges users to guess countries
        based on their flags. I drew inspiration from 'Fun with Flags' on 'The
        Big Bang Theory.' The app was developed using React.js and styled with
        CSS. All flags are generated using an API and are randomly selected each
        time. You can check out the code{" "}
        <Link
          className="github-link"
          to="https://github.com/justinakun/react/tree/main/component_task"
        >
          here
        </Link>
        .
      </div>
      <div className="works-two-comment">
        The following image provides an example of what users will see when they
        open the app:
      </div>
      <div className="works-two-image">
        <img src="/flagstart.png" alt="flagstart" />
      </div>
      <div className="works-two-comment">
        If the user correctly identifies the flag and submits the country's
        name, they will receive a notification indicating a correct answer.
        Alternatively, if the answer is incorrect, they will also be notified:
      </div>
      <div className="works-two-image">
        <img src="/flagcorrect.png" alt="flagcorrect" />
      </div>
      <div className="works-two-image">
        <img src="/flagwrong.png" alt="flagwrong" />
      </div>
      <div className="works-two-comment">
        In the event that the user doesn't know the correct answer, they are
        provided with an opportunity to learn. By clicking the 'oops' button,
        the correct answer is revealed:
      </div>
      <div className="works-two-image">
        <img src="/flagunsure.png" alt="flagunsure" />
      </div>
      <div className="works-two-comment">
        Finally, if the user attempts to be cheeky by clicking 'submit' without
        entering any text, they will receive this message:
      </div>
      <div className="works-two-image">
        <img src="/flaglazy.png" alt="flaglazy" />
      </div>
    </div>
  );
};

export default WorksTwo;
