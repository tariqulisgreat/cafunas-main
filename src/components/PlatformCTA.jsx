import React from "react";
import "./PlatformCTA.css";
import backgroundImg from "../assets/images/platform-bg.jpg"; // replace with your image

const PlatformCTA = () => {
  return (
    <div
      className="platform-cta-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="platform-cta-overlay"></div>
      <div className="platform-cta-content">
        <h2 className="platform-cta-title">
          Accedi alla piattaforma <br />
          Caf Unsic – Qweb Zucchetti
        </h2>
        <button className="platform-cta-btn">
          Accedi al programma
        </button>
      </div>
    </div>
  );
};

export default PlatformCTA;
