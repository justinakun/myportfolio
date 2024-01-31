import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Main.scss";
import SkillBubble from "../../components/SkillBubble/SkillBubble";

const Main = () => {
  const slides = [
    {
      year: "2022",
      content:
        "In 2022 I completed Harvard University's introduction to computer science course. I learned how to think algorithmically and solve problems efficiently. Languages included C, Python, SQL, and JavaScript plus CSS and HTML.",
      title: "CS50x",
      backgroundColor: "orange",
    },
    {
      year: "2023",
      content:
        "In 2023 I completed CodeAcademy's 480 hour Front-End course. Learned HTML, CSS, SCSS, JavaScript, Node.Js, databases, and React.Js.",
      title: "CodeAcademy",
      backgroundColor: "yellow",
    },
  ];
  return (
    <div className="main-container">
      <Hero />
      <div className="container-slides">
        <h1 className="container-slides-title">SKILLS AND FOUNDATIONS</h1>
        <div className="bubble-and-slider">
          <div className="skill-bubble-main">
            <SkillBubble />
          </div>
          <div className="image-slider-main">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
