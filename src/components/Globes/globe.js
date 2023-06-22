import React, { useState } from "react";
import "./globe.css";

const Globe = () => {
  const [scattered, setScattered] = useState(false);

  const handleHover = () => {
    setScattered(true);
  };

  const handleMouseLeave = () => {
    setScattered(false);
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <span className={`letter ${scattered ? "scattered" : ""}`}>P</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>o</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>r</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>t</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>f</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>o</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>l</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>i</span>
        <span className={`letter ${scattered ? "scattered" : ""}`}>o</span>
      </h1>
    </div>
  );
};

export default Globe;