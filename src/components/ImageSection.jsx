import React from "react";
import "./ImageSection.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const images = [
  { src: img1, text: "730" },
  { src: img2, text: "DSU" },
  { src: img3, text: "RED" },
];

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="image-section-container">
        {images.map((item, index) => (
          <div className="image-card" key={index}>
            <img src={item.src} alt={`img-${index}`} />
            <div className="image-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
