import React from "react";

// scss
import "../scss/second-section.scss";

// illustration
import illustration from "../assets/images/illustration-flowing-conversation.svg";

export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="second-section__row">
        <div className="second-section__image">
          <img src={illustration} alt="" className="second-section__img" />
        </div>
        <div className="second-section__text">
          <h2 className="second-section__h2 section__h2">
            Flowing Conversations
          </h2>
          <p className="second-section__para section__para">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
    </section>
  );
}
