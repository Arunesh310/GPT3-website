import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: `Embrace the Future: Transforming Today's Visions into Tomorrow's Reality"`,
    text: `Dive into the limitless possibilities of artificial intelligence as we bridge the gap between imagination and reality. Our innovative solutions pave the way for a future where your dreams become tangible achievements. The power to transform is in your hands—embrace the future with cutting-edge AI technology.`,
  },
  {
    title: `Seize the Now: Pioneering AI Advancements for a Futuristic Tomorrow`,
    text: `The future is unfolding before your eyes, and you have the chance to shape it today. Join us on the forefront of AI advancements, where breakthrough technologies redefine what's possible. Seize the present moment, be a pioneer, and witness the transformative impact of AI on the trajectory of tomorrow.`,
  },
  {
    title: `Empower Your Tomorrow: Navigating the Future with Cutting-Edge AI Innovations`,
    text: `Chart your course into the future with confidence as we introduce you to the latest in AI innovations. Empower your endeavors with groundbreaking technologies that transcend boundaries. Unleash the potential of tomorrow today, and let AI be your guiding force toward unprecedented achievements.`,
  },
  {
    title: `Unleashing the Future: Harnessing the Power of AI to Shape Your Today and Beyond`,
    text: `Experience the untapped power of artificial intelligence as we unveil a new era of possibilities. From revolutionizing industries to enhancing everyday life, AI is the catalyst for unprecedented growth. Join us in unleashing the future, where the boundless potential of AI shapes not just today but the limitless possibilities of tomorrow.`,
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
