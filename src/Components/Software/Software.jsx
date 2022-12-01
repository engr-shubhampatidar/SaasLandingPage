import React from "react";
import "../Software/Software.scss";
import Apps from "../../Assets/PNG/Apps.png";

export const Software = () => {
  return (
    <div className="container softwareContainer">
      <div className="section">
        <div className="secondaryImages">
          <img src={Apps} alt="Lock Illustration" />
        </div>
        <div className="Content">
          <h2>
            Work with Your <br /> Favorite Apps Using
            <br />
            whitepace
          </h2>
          <p>
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
