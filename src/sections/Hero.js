import React from "react";

// scss
import "../scss/hero.scss";

// hero image
import heroImage from "../assets/images/screen-mockups.svg";

// icons
import messageIcon from "../assets/images/icon-messages.svg";
import communitiesIcon from "../assets/images/icon-communities.svg";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Build The Community Your Fans Will Love</h1>
      <p className="hero__p">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="hero__btn">Get Started For Free</button>
      <img className="hero__img" src={heroImage} alt="" />
      <div className="hero__numbers">
        <div className="hero__numbers__box">
          <img
            className="hero__numbers-box__icon hero__communities-icon"
            src={communitiesIcon}
            alt=""
          />
          <span className="hero__numbers-box__number">1.4k+</span>
          <p className="hero__numbers-box__para">Communities Formed</p>
        </div>
        <div className="hero__numbers__box">
          <img className="hero__numbers-box__icon hero__message-icon" src={messageIcon} alt="" />
          <span className="hero__numbers-box__number">2.7m+</span>
          <p className="hero__numbers-box__para">Messages Sent</p>
        </div>
      </div>
    </section>
  );
}
