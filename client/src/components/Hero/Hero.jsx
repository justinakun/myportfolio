import "./Hero.scss";
import Beads from "../../components/Beads/Beads";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src="/womangreen.png" alt="" />
      </div>
      <div className="hero-description">
        <h4 className="hero-description-top">REVOLUTIONIZE YOUR ART</h4>
        <p className="hero-description-middle">ANIMATE</p>
        <div className="hero-beads">
          <Beads />
        </div>
        <div className="hero-description-bottom">
          <div className="hero-bottom">
            Master basic 3D principles and lay the foundation for the future
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
