import React from "react";
import Blogpostlayout from "./blogpostlayout";

const Hero = () => {
  return (
    <div className="flex justify-evenly px-16 py-24">
      <Blogpostlayout />
      <Blogpostlayout />
      <Blogpostlayout />
    </div>
  );
};

export default Hero;
