import "./Hero.scss";

import Beads from "../../components/Beads/Beads";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src="/girlprogramming.png" alt="" className="hero-image" />
      </div>
      <div className="hero-description">
        <h4 className="hero-description-top">WELCOME TO MY PROFILE!</h4>
        <p className="hero-description-middle">HELLO WORLD</p>
        <div className="hero-beads">
          <Beads />
        </div>
        <div className="hero-description-bottom">
          Explore my portfolio, discover my skills, and connect with me!
        </div>
      </div>
    </div>
  );
};

export default Hero;
