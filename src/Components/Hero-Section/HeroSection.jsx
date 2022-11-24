import React from "react";
import "../Hero-Section/HeroSection.scss";
import Illustration from "../../Assets/SVG/Work.svg";

export const HeroSection = () => {
  return (
    <div className="container HeroContainer">
      <div className="section">
        <div className="Content">
          <h2>Get More Done with whitepace</h2>
          <p>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="Illustration">
          <img src={Illustration} alt="hero-illustration" border="0" />
        </div>
      </div>
    </div>
  );
};
