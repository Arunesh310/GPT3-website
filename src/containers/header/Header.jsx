import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Buckle up, because we're about to blast off into the cosmos of
          creativity with GPT-3 OpenAI! This isn't your average website - it's a
          playground for words, ideas, and possibilities as endless as the
          imagination itself. ✨ Join me as we explore the power of language,
          craft incredible things, and have a whole lot of fun along the way!
          Let's build something amazing, together!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
