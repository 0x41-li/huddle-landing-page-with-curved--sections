import React from "react";

// scss
import "../scss/header.scss";

// logo
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <a href="#" aria-label="Go to home page">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="header__btn-wrapper">
        <button className="header__btn">Try It Free</button>
      </div>
    </header>
  );
}
