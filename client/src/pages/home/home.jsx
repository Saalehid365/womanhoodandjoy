import React from "react";
import Hero from "./hero";
import Cats from "./cats";
import PostHome from "./postHome";
import ImageBanner from "./imageBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cats />
      <PostHome />
      <ImageBanner />
    </div>
  );
};

export default Home;
