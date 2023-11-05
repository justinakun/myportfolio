import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import "./ImageSlider.scss";
import CVModal from "../CVModal/CVModal";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [cvClicked, setCvClicked] = useState(false);

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

  const handleCvOn = () => {
    setCvClicked(true);
    stopAutoSlide();
  };

  const handleCvOff = () => {
    setCvClicked(false);
    restartAutoSlide();
  };

  // Function to stop the automatic sliding
  const stopAutoSlide = () => {
    setAutoSlideEnabled(false);
  };

  //Function to re-start the automatic sliding
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
    <div className="slider-container">
      <div className="left-slider-arrow slider-arrow" onClick={goToPrevious}>
        <SlArrowLeft />
      </div>
      <div className="slide-container">
        <div className="slide-heading">
          <h1 className="slide-year">{slides[currentIndex].year}</h1>
          <h1 className="slide-title">{slides[currentIndex].title}</h1>
        </div>
        <div className="slide-content">
          {slides[currentIndex].content}
          {slides[currentIndex].cvmodal && (
            <div onClick={handleCvOn}>
              <CVModal />
            </div>
          )}
        </div>
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

export default ImageSlider;