import React from "react";
import CallToAction from "./CallToAction";
import RightSideContent from "./RightSideContent";
import "./CombinedCTA.css";

const CombinedCTA = () => {
  return (
    <div className="combined-cta-section">
      <div className="cta-container">
        {/* LEFT SIDE */}
        <div className="cta-left">
          <CallToAction />
        </div>

        {/* RIGHT SIDE */}
        <div className="cta-right">
          <RightSideContent />
        </div>
      </div>
    </div>
  );
};

export default CombinedCTA;
