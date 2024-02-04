import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import "./Slider.scss";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

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

  const stopAutoSlide = () => {
    setAutoSlideEnabled(false);
  };

  const restartAutoSlide = () => {
    setAutoSlideEnabled(true);
  };

  useEffect(() => {
    let interval;

    if (autoSlideEnabled) {
      interval = setInterval(goToNext, 5000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, autoSlideEnabled]);

  // Add a flag to track if the last slide has been reached
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div
      className="slider-container"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={restartAutoSlide}
    >
      <div className="left-slider-arrow slider-arrow" onClick={goToPrevious}>
        <SlArrowLeft />
      </div>
      <div className="slide-container">
        <div className="slide-heading">
          <h1 className="slide-year">{slides[currentIndex].year}</h1>
          <h1 className="slide-title">{slides[currentIndex].title}</h1>
        </div>
        <div className="slide-content">{slides[currentIndex].content}</div>
        <div className="slides-lines-container">
          {slides.map((slide, slideIndex) => (
            <div
              className={`slides-lines ${
                currentIndex === slideIndex ? "current-line" : ""
              }`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <TfiLayoutLineSolid />
            </div>
          ))}
        </div>
      </div>
      <div className="right-slider-arrow slider-arrow" onClick={goToNext}>
        <SlArrowRight />
      </div>
    </div>
  );
};

export default Slider;
