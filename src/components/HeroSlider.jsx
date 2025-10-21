import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";

const slides = [
  {
    image: slider1,
    heading: "Benvenuti in Caf Unsic",
    text: "Offriamo formazione professionale di alta qualità.",
  },
  {
    image: slider2,
    heading: "Crescita della tua carriera",
    text: "Scopri i nostri corsi e servizi esclusivi.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="hero-slider">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrow left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </div>
      <div className="arrow right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default HeroSlider;
