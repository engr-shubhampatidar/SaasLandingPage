import React from "react";
import "../YourWork/Work.scss";

export const Work = () => {
  return (
    <div className="container workContainer">
      <div className="section Content">
        <h2>
          Your work, everywhere <span id="YouAreUnderline">you are</span>
        </h2>
        <p>
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <button>Try Taskey</button>
      </div>
    </div>
  );
};
