import React from "react";
import Banner from "./banner";
import Hero from "./hero";
import Latestpost from "./latestpost";
import Newestfrom from "./newestfrom";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Latestpost />
      <Newestfrom />
    </div>
  );
};

export default Home;
