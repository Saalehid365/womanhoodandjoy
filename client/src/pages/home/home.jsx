import React from "react";
import Hero from "./hero";
import Cats from "./cats";
import PostHome from "./postHome";
import ImageBanner from "./imageBanner";

const Home = () => {
  return (
    <div className="border-t-2">
      <Hero />
      <Cats />
      <PostHome />
      <ImageBanner />
    </div>
  );
};

export default Home;
