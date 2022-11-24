import React from "react";
import "../WorkManagement/WorkManagement.scss";
import Illustration from "../../Assets/SVG/Informed.svg";
import WorkIllustration from "../../Assets/PNG/WorkTogether.png";

export const WorkManagement = () => {
  return (
    <div className="container workManagementContainer">
      <div className="section">
        <div className="subSection Project">
          <div className="Content">
            <h2>
              Project <br />{" "}
              <span id="ProjectManagementUnderline">Management</span>
            </h2>
            <p>
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button>Get Started</button>
          </div>
          <div className="Illustration">
            <img src={Illustration} alt="hero-illustration" border="0" />
          </div>
        </div>
        <div className="subSection Work">
          <div className="Illustration">
            <img src={WorkIllustration} alt="work-illustration" border="0" />
          </div>
          <div className="Content">
            <h2>
              Work <span id="WorkTogetherUnderline">together</span>
            </h2>
            <p>
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button>Try it now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
