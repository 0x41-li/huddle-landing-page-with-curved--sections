import React from "react";

// scss
import "../scss/third-section.scss";

// illustration
import illustration from "../assets/images/illustration-your-users.svg";

// curves
import topCurveMobile from "../assets/images/third-section-top-curve-mobile.png";
import bottomCurveMobile from "../assets/images/third-section-bottom-curve-mobile.png";
import topCurveDesktop from "../assets/images/third-section-top-curve-desktop.png";
import bottomCurveDesktop from "../assets/images/third-section-bottom-curve-desktop.png";

export default function ThirdSection() {
  return (
    <section className="third-section">
      <div className="third-section__top-curve">
        <img className="hide-d" src={topCurveMobile} alt="" />
        <img className="hide-m" src={topCurveDesktop} alt="" />
      </div>

      <div className="third-section__row">
        <div className="third-section__image">
          <img src={illustration} alt="" className="third-section__img" />
        </div>
        <div className="third-section__text">
          <h2 className="third-section__h2 section__h2">Your Users</h2>
          <p className="third-section__para section__para">
          It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
          </p>
        </div>
      </div>

      <div className="third-section__bottom-curve">
        <img className="hide-d" src={bottomCurveMobile} alt="" />
        <img className="hide-m" src={bottomCurveDesktop} alt="" />
      </div>
    </section>
  );
}
