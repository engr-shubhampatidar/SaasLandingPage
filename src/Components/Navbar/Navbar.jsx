import React from "react";
import Logo from "../../Assets/SVG/Logo.svg";
import ArrowDown from "../../Assets/SVG/Down Arrow.svg";
import "../Navbar/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="container navContainer">
      <div className="section">
        <div className="logo">
          <img src={Logo} alt="whitespace" />
        </div>
        <div className="menu">
          <div className="items">
            <div className="item">
              <p>Products</p>
              <img src={ArrowDown} alt="whitespace" />
            </div>
            <div className="item">
              <p>Solutions</p>
              <img src={ArrowDown} alt="whitespace" />
            </div>
            <div className="item">
              <p>Resources</p>
              <img src={ArrowDown} alt="whitespace" />
            </div>
            <div className="item">
              <p>Pricing</p>
              <img src={ArrowDown} alt="whitespace" />
            </div>
          </div>
          <div className="button-group">
            <button>Login</button>
            <button>Try Whitespace free</button>
          </div>
        </div>
      </div>
    </div>
  );
};
