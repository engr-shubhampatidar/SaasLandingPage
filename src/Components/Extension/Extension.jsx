import "../Extension/Extension.scss";
import Illustration from "../../Assets/SVG/Extension.svg";

export const Extension = () => {
  return (
    <div className="container extensionContainer">
      <div className="section">
        <div className="Content">
          <h2>
            Use as <span id="ExtensionUnderLine">Extension</span>
          </h2>
          <p>
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button>Let's Go</button>
        </div>
        <div className="primaryImages">
          <img src={Illustration} alt="Extension" />
        </div>
      </div>
    </div>
  );
};
