import React from "react";

// scss
import "../scss/hero.scss"

// hero image
import heroImage from "../assets/images/screen-mockups.svg";

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
    </section>
  );
}
