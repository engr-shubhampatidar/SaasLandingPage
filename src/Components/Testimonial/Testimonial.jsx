import React from "react";
import "../Testimonial/Testimonial.scss";
import DarkQuote from "../../Assets/SVG/DarkQuotes.svg";
import LightQuote from "../../Assets/SVG/LightQuotes.svg";
import Avatar1 from "../../Assets/PNG/Avater1.png";
import Avatar2 from "../../Assets/PNG/Avater2.png";
import Avatar3 from "../../Assets/PNG/Avater3.png";

export const Testimonial = () => {
  return (
    <div className="container testimonialContainer">
      <div className="section">
        <div className="Content">
          <h2>
            What Our Clients <span id="TestimonialUnderline"> Says</span>
          </h2>
        </div>
        <div className="List">
          <div className="TestimonialCard">
            <div className="Content">
              <div className="Highlight">
                <img src={DarkQuote} alt="Dark Quote" />
              </div>
              <p>
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <div className="Bio">
              <div className="Profile">
                <img src={Avatar1} alt="Avatar 1" />
              </div>
              <div className="Info">
                <h4>Oberon Shaw, MCH</h4>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
          <div className="TestimonialCard">
            <div className="Content">
              <div className="Highlight">
                <img src={LightQuote} alt="Light Quote" />
              </div>
              <p>
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <div className="Bio">
              <div className="Profile">
                <img src={Avatar2} alt="Avatar 2" />
              </div>
              <div className="Info">
                <h4>Oberon Shaw, MCH</h4>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
          <div className="TestimonialCard">
            <div className="Content">
              <div className="Highlight">
                <img src={LightQuote} alt="Light Quote" />
              </div>
              <p>
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <div className="Bio">
              <div className="Profile">
                <img src={Avatar3} alt="Avatar 3" />
              </div>
              <div className="Info">
                <h4>Oberon Shaw, MCH</h4>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
