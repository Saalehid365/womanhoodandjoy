import React from "react";
import Blogpostlayout from "./blogpostlayout";
import Newsletterregister from "./newsletterregister";

const Newestfrom = () => {
  return (
    <div className="flex flex-col pt-12 items-start px-52  w-full pb-12">
      <h2 className="text-2xl font-bold pb-12 pl-4">
        Newest from Health & Lifestyle
      </h2>
      <div className="flex justify-evenly w-full">
        <Blogpostlayout />
        <Blogpostlayout />
        <Blogpostlayout />
        <Blogpostlayout />
      </div>
      <div className="flex justify-center w-full pt-16">
        <Newsletterregister />
      </div>
    </div>
  );
};

export default Newestfrom;
