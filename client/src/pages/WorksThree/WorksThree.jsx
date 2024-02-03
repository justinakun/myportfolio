import { Link } from "react-router-dom";
import "./worksthree.scss";

const WorksThree = () => {
  return (
    <div className="works-three-container">
      <h1 className="works-three-title">Chat Away</h1>
      <div className="works-three-description">
        This is the final project for the Front-End course. It combines both
        Front-End and Back-End development, resulting in a Full-Stack
        application. This project is a forum, you can read about it's main
        features below, and you can check out the code{" "}
        <Link
          className="github-link"
          to="https://github.com/justinakun/final-project"
          title="Go to GitHub"
        >
          here
        </Link>
        .
      </div>
      <div className="works-three-comment short-comment">
        In order to access the forum, a user needs to register and then log in.
      </div>
      <div className="works-three-image">
        <img src="/chatfront.png" alt="chatfront" />
      </div>
      <div className="works-three-comment">
        A new user is required to enter their name, surname, email address, age,
        and password during the registration process. Since all registered email
        addresses are stored in a database, in the event that the email address
        is already registered, the user has the option to either log in using
        that email address or register with a new one. Below is an example of a
        new user in the registration process:
      </div>
      <div className="works-three-image">
        <img src="/chatregister.png" alt="chatregister" />
      </div>
      <div className="works-three-comment">
        Once logged in, the user is directed to the forum's main page where all
        threads are displayed. By default, the newest questions appear at the
        top, while older ones are at the bottom. If the user wishes to view the
        oldest questions first, they can achieve this with a single click on the
        'Oldest' button. Additionally, users can easily filter questions to view
        only answered or unanswered ones by clicking the relevant buttons.
      </div>
      <div className="works-three-image">
        <img src="/chatmain.png" alt="chatmain" />
      </div>
      <div className="works-three-comment">
        To add their own question, the user can simply click on the bright
        yellow button labeled 'Ask a Question,' type in their query, and their
        question will immediately appear at the top of the list, as the newest
        entry.
      </div>
      <div className="works-three-image">
        <img src="/chatnewquestion.png" alt="chatnewquestion" />
      </div>{" "}
      <br />
      <div className="works-three-image">
        <img src="/chatlisasquestionmain.png" alt="chatnewquestion" />
      </div>
      <div className="works-three-comment">
        To access a specific thread, a user needs to click on the question on
        the main page. This action will take the user to the thread, with the
        question displayed at the top, followed by all the answers below. At the
        very bottom, there will be an option for the logged-in user to post
        their own answer. All questions and answers are stored in a database, so
        if you posted a question, you'll see it attributed to "you," while other
        users will see your name. The same applies to answers. Additionally,
        users have the option to edit their own questions and answers. Any edits
        made to questions or answers are visible to everyone.
      </div>
      <div className="works-three-image">
        <img src="/chatlisasanswer.png" alt="chatlisasanswer" />
      </div>
      <div className="works-three-comment">
        All answers can be both liked and disliked. Each answer can receive one
        like or dislike from each user. The total likes and dislikes from
        different users are aggregated. For example, if three users liked a
        post, you would see three likes displayed. Additionally, if you liked or
        disliked a particular answer, it will be indicated below the likes.
      </div>
      <div className="works-three-image">
        <img src="/chatlikes.png" alt="chatlikes" />
      </div>
    </div>
  );
};

export default WorksThree;
