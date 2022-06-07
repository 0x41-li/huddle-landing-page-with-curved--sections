import React from "react";

// scss
import "../scss/footer.scss";

// top curve
import topCurveMobile from "../assets/images/footer-top-curve-mobile.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer__top-curve">
        <img className="footer__top-curve__img d-m" src={topCurveMobile} alt="" />
      </div>
      <div className="footer__row">
        <div className="footer__newsletter">
          <div className="footer__newsletter__text">
            <h2 className="footer__newsletter__h2">NEWSLETTER</h2>
            <p className="footer__newsletter__para">
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
          </div>
          <form className="footer__newsletter__form">
            <input
              type="email"
              name="email"
              className="footer__newsletter__email-input"
            />
            <button type="button" className="footer__form__btn">Subscribe</button>
          </form>
        </div>
        <div className="footer__info"></div>
      </div>
    </footer>
  );
}
