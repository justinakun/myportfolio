import "./WorksTwo.scss";
import { Link } from "react-router-dom";
const WorksTwo = () => {
  return (
    <div className="works-two-container">
      <h1 className="works-two-title">Fun w/ Flags</h1>
      <div className="works-two-description">
        This React app is a simple game, allowing the user to guess countries
        based on the flags. I was inspired by the "Fun with Flags" on the Big
        Bang Theory. I used React.Js and CSS to create this app. The following
        image is an example of what a user can see when they open the app:
      </div>
      <div className="works-two-image">
        <img src="/flag1.png" alt="flag1" />
      </div>
      <div className="works-two-description">
        If the user knows the flag and submits the country's name correctly,
        they are notified about a correct answer:
      </div>
      <div className="works-two-image">
        <img src="/flag4.png" alt="flag4" />
        <img src="/flag5.png" alt="flag5" />
      </div>
      <div className="works-two-description">
        In case the user clicks on 'submit' button without actually typing
        anything in, the following message pops up:
      </div>
      <div className="works-two-image">
        <img src="/flag3.png" alt="flag3" />
      </div>
      <div className="works-two-description">
        In the scenario where the user doesn't know the right answer, they are
        given a possibility to learn. By clicking the 'oops' button, correct
        answer is revealed:
      </div>
      <div className="works-two-image">
        <img src="/flag6.png" alt="" />
      </div>
      <div className="works-two-description">
        Finally, the user can click on "Gimme next one" button to skip the flag:
      </div>
      <div className="works-two-image">
        <img src="/flag7.png" alt="flag7" />
      </div>
      <div className="works-two-description">
        You can check out the code{" "}
        <Link to="https://github.com/justinakun/react/tree/main/component_task">
          here.
        </Link>
      </div>
    </div>
  );
};

export default WorksTwo;
