import "./InfoItem.scss";
import CVModal from "../CVModal/CVModal";
const InfoItem = () => {
  return (
    <div className="infoitem-container">
      <div className="info-line"></div>
      <div className="info-descriptions">
        <div className="info-description desc-one">
          <div className="desc-header">
            <h1 className="transparent">2022</h1>
            <h1>CS50x</h1>
          </div>
          Completed Harvard University's introduction to computer science
          course. I learned how to think algorithmically and solve problems
          efficiently. Languages included C, Python, SQL, and JavaScript plus
          CSS and HTML.
        </div>
        <div className="info-description desc-two">
          <div className="desc-header">
            <h1 className="transparent">2023</h1>
            <h1>CodeAcademy</h1>
          </div>
          Completed CodeAcademy's 480 hour Front-End course. Learned HTML, CSS,
          SCSS, JavaScript, Node.Js, databases, and React.Js.
        </div>
        <div className="info-description desc-three">
          <div className="desc-header">
            <h1 className="transparent">2023</h1>
            <h1>Curriculum Vitae</h1>
          </div>
          <CVModal />
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
