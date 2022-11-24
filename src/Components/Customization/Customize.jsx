import React from "react";
import "../Customization/Customize.scss";
import Illustration from "../../Assets/SVG/Customize.svg";

export const Customize = () => {
  return (
    <div className="container customizationContainer">
      <div className="section">
        <div className="Illustration">
          <img src={Illustration} alt="Extension" />
        </div>
        <div className="Content">
          <h2>
            Customise it to <br />{" "}
            <span id="CustomizeUnderLine">your needs</span>
          </h2>
          <p>
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button>Let's Go</button>
        </div>
      </div>
    </div>
  );
};
