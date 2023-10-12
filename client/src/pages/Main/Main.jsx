import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Main.scss";
import CVModal from "../../components/CVModal/CVModal";

const Main = () => {
  const slides = [
    {
      year: "2022",
      content:
        "Completed Harvard University's introduction to computer science course. I learned how to think algorithmically and solve problems efficiently. Languages included C, Python, SQL, and JavaScript plus CSS and HTML.",
      title: "CS50x",
      backgroundColor: "orange",
    },
    {
      year: "2023",
      content:
        "Completed CodeAcademy's 480 hour Front-End course. Learned HTML, CSS, SCSS, JavaScript, Node.Js, databases, and React.Js.",
      title: "CodeAcademy",
      backgroundColor: "yellow",
    },
    {
      year: "2023",
      content: "To learn more about me check out my resume!",
      cvmodal: true,
      title: "Curriculum Vitae",
      backgroundColor: "green",
    },
  ];
  return (
    <div className="main-container">
      <Hero />
      <div className="container-slides">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Main;
