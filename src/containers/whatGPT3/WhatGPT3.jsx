import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Welcome to the future of artificial intelligence with GPT-3! GPT-3, or the Generative Pre-trained Transformer 3, is a cutting-edge language model developed by OpenAI. It stands at the forefront of natural language processing, enabling computers to understand and generate human-like text."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Say hello to your helpful guides!  We're chatbots powered by GPT-3, ready to answer your questions, unlock cool features, and fuel your creativity. What can we do for you today?"
        />
        <Feature
          title="Knowledgebase"
          text="Ask anything, and our AI will weave answers from the fabric of information, crafting solutions beyond wildest dreams.  So, unleash your curiosity, explorer, the only limit is your imagination!"
        />
        <Feature
          title="Education"
          text="Curiosity unleashed! This isn't your average classroom, it's a portal to boundless knowledge.  Ask any question, delve into any subject, and discover connections you never dreamed possible. Unleash your inner explorer, fuel your thirst for knowledge, and rewrite the definition of learning!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
