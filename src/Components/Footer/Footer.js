import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../Assets/PNG/Logo.png";
import Facebook from "../../Assets/PNG/Facebook.png";
import Twitter from "../../Assets/PNG/Twitter.png";
import Linkedin from "../../Assets/PNG/Linkedin.png";

export const Footer = () => {
  return (
    <>
      <div className="container footerContainer">
        <div className="Company">
          <div className="CompanyLogo">
            <img src={Logo} alt="logo" />
            <h3>whitepace</h3>
          </div>
          <p>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div className="Links">
          <h4>Product</h4>
          <p>Overview</p>
          <p>Pricing</p>
          <p>Customer stories</p>
        </div>
        <div className="Links">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Guides & tutorials</p>
          <p>Help center</p>
        </div>
        <div className="Links">
          <h4>Company</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Customer stories</p>
        </div>
        <div className="Company">
          <h3>Try It Today</h3>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <button>Start today</button>
        </div>
      </div>
      <div className="container End">
        <div>
          <p>English</p>
          <p>Terms & privacy</p>
          <p>Security</p>
          <p>Status</p>
          <p>©2021 Whitepace LLC.</p>
        </div>
        <div>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </>
  );
};
