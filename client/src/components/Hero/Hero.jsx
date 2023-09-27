import "./Hero.scss";

import Beads from "../../components/Beads/Beads";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src="/woman.png" alt="" />
      </div>
      <div className="hero-description">
        <h4 className="hero-description-top">WELCOME TO MY PROFILE!</h4>
        <p className="hero-description-middle">HELLO WORLD</p>
        <div className="hero-beads">
          <Beads />
        </div>
        <div className="hero-description-bottom">
          <div className="hero-bottom">
            I'm an aspiring web developer. See my work or contact me!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
