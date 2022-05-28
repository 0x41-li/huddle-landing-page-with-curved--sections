import React from "react";

// scss
import "../scss/header.scss";

// logo
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__btn-wrapper">
        <button className="header__btn">Try It Free</button>
      </div>
    </header>
  );
}
