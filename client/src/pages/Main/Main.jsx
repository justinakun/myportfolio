import Hero from "../../components/Hero/Hero";
import InfoItem from "../../components/InfoItem/InfoItem";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <Hero />
      <InfoItem />
    </div>
  );
};

export default Main;
