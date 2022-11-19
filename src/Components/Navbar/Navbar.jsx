import React from "react";
import Logo from "../../Assets/Logo.png";
import "../Navbar/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="whitespace" />
      </div>
      <div className="menu">
        <ul className="list">
          <li className="item">Product</li>
          <li className="item">Product</li>
          <li className="item">Product</li>
          <li className="item">Product</li>
        </ul>
      </div>
    </div>
  );
};
