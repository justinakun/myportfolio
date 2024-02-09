import "./WorksTwo.scss";

const WorksTwo = () => {
  return (
    <div className="works-two-container">
      <h1 className="works-two-title">Fun w/ Flags</h1>
      <div className="works-two-description">
        This React app is a simple game that challenges users to guess countries
        based on their flags. I drew inspiration from &apos;Fun with Flags&apos;
        on &apos;The Big Bang Theory&apos;. The app was developed using React
        and styled with CSS. All flags are generated using an API and are
        randomly selected each time. You can check out the code{" "}
        <a
          className="github-link"
          href="https://github.com/justinakun/react/tree/main/component_task"
          title="Go to GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
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
        If the user correctly identifies the flag and submits the country&apos;s
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
        In the event that the user doesn&apos;t know the correct answer, they
        are provided with an opportunity to learn. By clicking the
        &apos;oops&apos; button, the correct answer is revealed:
      </div>
      <div className="works-two-image">
        <img src="/flagunsure.png" alt="flagunsure" />
      </div>
      <div className="works-two-comment">
        Finally, if the user attempts to be cheeky by clicking
        &apos;submit&apos; without entering any text, they will receive this
        message:
      </div>
      <div className="works-two-image">
        <img src="/flaglazy.png" alt="flaglazy" />
      </div>
    </div>
  );
};

export default WorksTwo;
