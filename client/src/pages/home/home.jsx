import React from "react";
import Hero from "./hero";
import Cats from "./cats";
import PostHome from "./postHome";
import ImageBanner from "./imageBanner";
import SubscribeForm from "../../components/subscribeForm";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center w-full bg-gray-100 ">
      <div className="w-full justify-center items-center px-44">
        <Hero />
      </div>
      <SubscribeForm />
      <Cats />
      <PostHome />
      <ImageBanner />
    </div>
  );
};

export default Home;
