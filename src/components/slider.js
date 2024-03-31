import React, { useState, useEffect } from "react";
const Slider = () => {
  const sliderData = [
    {
      id: 1,
      backgroundImage: `url(/imgs/image-1.jpeg)`,
      h1: "Slide 1",
      content: "Content for Slide 1",
    },
    {
      id: 2,
      backgroundImage: `url(/imgs/image-2.jpeg)`,
      h1: "Slide 2",
      content: "Content for Slide 2",
    },
    {
      id: 3,
      backgroundImage: `url(/imgs/image-3.jpeg)`,
      h1: "Slide 3",
      content: "Content for Slide 3",
    },
    {
      id: 4,
      backgroundImage: `url(/imgs/image-4.jpeg)`,
      h1: "Slide 4",
      content: "Content for Slide 4",
    },
    {
      id: 5,
      backgroundImage: `url(/imgs/image-5.jpg)`,
      h1: "Slide 5",
      content: "Content for Slide 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ backgroundImage: sliderData[currentIndex].backgroundImage }}
      >
        <h1>{sliderData[currentIndex].h1}</h1>
        <p>{sliderData[currentIndex].content}</p>

        <div className="slider-nav">
          <button onClick={goToPrevSlide}>&#10094; Prev</button>
          <button onClick={goToNextSlide}>Next &#10095;</button>
        </div>
      </div>
      <div className="slider-dots">
        {sliderData.map((slide, index) => (
          <span
            key={slide.id}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default Slider;
