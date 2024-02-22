import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Feb 1, 2024"
          text="Byte Me: Unraveling the Quirky Wonders of Artificial Intelligence"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Feb 7, 2024"
          text="AI-pocalypse Now: A Funky Dive into the World of Artificial Brilliance"
        />
        <Article
          imgUrl={blog03}
          date="Feb 19, 2024"
          text="Nerding Out with AI: Where Geeks and Gadgets Collide"
        />
        <Article
          imgUrl={blog04}
          date="Feb 11, 2024"
          text="The Bot Bop: Grooving to the Beats of Artificial Intelligence"
        />
        <Article
          imgUrl={blog05}
          date="Feb 22, 2024"
          text="Ctrl+Alt+Delight: Funky Tales from the AI Wonderland"
        />
      </div>
    </div>
  </div>
);

export default Blog;
