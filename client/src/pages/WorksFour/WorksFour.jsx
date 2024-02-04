import { Link } from "react-router-dom";
import "./WorksFour.scss";

const WorksFour = () => {
  return (
    <div className="works-four-container">
      <h1 className="works-four-title">Portfolio</h1>
      <div className="works-four-description">
        This portfolio website, which you are currently exploring, was developed
        using React, Vite, and SCSS. It showcases my expertise in front-end
        development, ensuring optimal viewing across all devices with its fully
        responsive design. You can also check out the code{" "}
        <Link
          className="github-link"
          to="https://github.com/justinakun/myportfolio"
          title="Go to GitHub"
        >
          here
        </Link>
        .
      </div>
      <div className="works-four-comment">
        Prominent elements:
        <ul>
          <li>
            Leaflet Integration: An interactive map marking my locale,
            showcasing my ability to weave external APIs into a cohesive
            experience.
          </li>
          <li>
            Direct Messaging: An integrated contact form for seamless
            communication, ensuring your inquiries and collaborations are just a
            click away.
          </li>
          <li>
            Interactive Slider: This feature enables dynamic navigation through
            content slides, adding an engaging touch to the site's design.
          </li>
          <li>
            Material UI: Integrated Material-UI for creating user-friendly
            alerts.
          </li>
        </ul>
      </div>
      <div className="works-four-comment short-comment">
        Feel free to navigate this website and explore its features and content.
      </div>
    </div>
  );
};

export default WorksFour;
