import React from "react";
import "../YourData/YourData.scss";
import LockIllustration from "../../Assets/PNG/Data.png";
import Google from "../../Assets/PNG/Google.png";
import Apple from "../../Assets/PNG/Apple.png";
import Slack from "../../Assets/PNG/Slack.png";
import Microsoft from "../../Assets/PNG/Microsoft.png";

export const YourData = () => {
  return (
    <div className="container yourDataContainer">
      <div className="section FirstPanel">
        <div className="Content">
          <h2>
            100% <span id="DataUnderline">your data</span>
          </h2>
          <p>
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button>Read More</button>
        </div>
        <div className="secondaryImages">
          <img src={LockIllustration} alt="Lock Illustration" />
        </div>
      </div>
      <div className="section SecondPanel">
        <div className="Content">
          <h2>
            Our <span id="SponsorUnderline"> sponsors</span>
          </h2>
          <div className="ImageGrid">
            <img src={Apple} alt="Apple" />
            <img src={Microsoft} alt="Microsoft" />
            <img src={Slack} alt="Slack" />
            <img src={Google} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};
