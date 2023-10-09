import { useState } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: `${slides[currentIndex].backgroundColor}`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#d10c0c",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#dd0a0a",
    zIndex: 1,
    cursor: "pointer",
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ←
      </div>
      <div style={slideStyles} className="slide-container">
        <div className="slide-heading">
          <h1 className="slide-year">{slides[currentIndex].year}</h1>
          <h1 className="slide-title">{slides[currentIndex].title}</h1>
        </div>

        <div className="slide-content">{slides[currentIndex].content}</div>
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        →
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ￮
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
