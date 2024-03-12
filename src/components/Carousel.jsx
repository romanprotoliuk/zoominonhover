import React, { useRef } from "react";

const Carousel = ({ images, descriptions }) => {
  const scrollRef = useRef();

  const nextSlide = () => {
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
  };

  const prevSlide = () => {
    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide}>Prev</button>
      <div className="carousel-images" ref={scrollRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <div className="carousel-image-wrapper">
              <img className="carousel-image" src={image} alt="" />
            </div>
            <div className="carousel-description">{descriptions[index]}</div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
