import React, { useState } from "react";

// scss
import "../scss/footer.scss";

// logo
import { ReactComponent as Logo } from "../assets/images/logo.svg";

// icons
import { ReactComponent as PhoneIcon } from "../assets/images/icon-phone.svg";
import { ReactComponent as EmailIcon } from "../assets/images/icon-email.svg";

import { ReactComponent as FacebookIcon } from "../assets/images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter-icon.svg";

// top curve
import topCurveMobile from "../assets/images/footer-top-curve-mobile.png";
import topCurveDesktop from "../assets/images/footer-top-curve-desktop.png";

export default function Footer() {
  const [emailInfo, setEmailInfo] = useState({
    value: "",
    valid: true,
  });

  function changeEmailHandler(e) {
    const target = e.target;
    setEmailInfo({
      value: target.value,
      valid: validateEmail(target.value) ? true : true,
    });
  }

  function newsletterFormSubmitHandler(e) {
    e.preventDefault();
    if (!validateEmail(emailInfo.value)) {
      setEmailInfo((prevEmailInfo) => {
        return { ...prevEmailInfo, valid: false };
      });
    }
  }

  return (
    <footer>
      <div className="footer__top-curve">
        <img
          className="footer__top-curve__img hide-d"
          src={topCurveMobile}
          alt=""
        />
        <img
          className="footer__top-curve__img hide-m"
          src={topCurveDesktop}
          alt=""
        />
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
          <form
            className="footer__newsletter__form"
            onSubmit={newsletterFormSubmitHandler}
            noValidate
          >
            <div className="footer__input-box">
              <input
                type="email"
                name="email"
                className={
                  "footer__newsletter__email-input " +
                  (!emailInfo.valid ? "error" : "")
                }
                placeholder="Email address"
                value={emailInfo.value}
                onChange={changeEmailHandler}
              />
              {!emailInfo.valid && (
                <p className="footer__input-error">Check your email please</p>
              )}
            </div>
            <button className="footer__form__btn">Subscribe</button>
          </form>
        </div>
        <div className="footer__info">
          <div className="footer__logo">
            <a href="#">
              <Logo className="footer__logo__svg" viewBox="0 0 240 39" />
            </a>
          </div>
          <p className="footer__info__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="footer__contact">
            <div className="footer__contact__option">
              <PhoneIcon viewBox="0 0 18 18" />
              <p className="footer__contact__para">Phone: +1-543-123-4567</p>
            </div>
            <div className="footer__contact__option">
              <EmailIcon viewBox="0 0 20 16" />
              <p className="footer__contact__para">example@company.com</p>
            </div>
          </div>
          <div className="footer__social-media">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
