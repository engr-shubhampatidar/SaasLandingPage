import React from "react";
import "../FreeTrial/FreeTrial.scss";
import Window from "../../Assets/PNG/windows1.png";
import Apple from "../../Assets/PNG/apple2.png";
import Android from "../../Assets/PNG/android1.png";

export const FreeTrial = () => {
  return (
    <div className="container freeTrialContainer">
      <div className="section Content">
        <h2>
          Try Whitepace <br /> today
        </h2>
        <p>
          Get started for free. <br /> Add your whole team as your needs grow.
        </p>
        <button>Try Taskey free</button>
        <p>On a big team? Contact sales</p>
        <div className="LogoList">
          <img src={Apple} alt="Apple" />
          <img src={Window} alt="Window" />
          <img src={Android} alt="Android" />
        </div>
      </div>
    </div>
  );
};
