import React from "react";

// scss
import "../scss/first-section.scss";

// images
import illustration from "../assets/images/illustration-grow-together.svg";

// curves
import topCurveMobile from "../assets/images/first-section-top-curve-mobile.png";
import bottomCurveMobile from "../assets/images/first-section-bottom-curve-mobile.png";
import topCurveDesktop from "../assets/images/first-section-top-curve-desktop.png";
import bottomCurveDesktop from "../assets/images/first-section-bottom-curve-desktop.png";

export default function FirstSection() {
  return (
    <section className="first-section section-flex">
      <div className="first-section__top-curve">
        <img className="hide-d" src={topCurveMobile} alt="" />
        <img className="hide-m" src={topCurveDesktop} alt="" />
      </div>
      <div className="first-section__image">
        <img src={illustration} alt="" className="first-section__img" />
      </div>
      <div className="first-section__text">
        <h2 className="first-section__h2 section__h2">Grow Together</h2>
        <p className="first-section__para section__para">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div className="first-section__bottom-curve">
        <img className="hide-d" src={bottomCurveMobile} alt="" />
        <img className="hide-m" src={bottomCurveDesktop} alt="" />
      </div>
    </section>
  );
}
