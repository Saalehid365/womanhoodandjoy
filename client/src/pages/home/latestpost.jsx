import React from "react";
import Trendingpost from "./trendingpost";
import Latest from "./latest";

const Latestpost = () => {
  return (
    <div className="flex flex-col items-center pb-60 bg-gray-100 pt-12">
      <div className="pb-24 text-3xl font-sans">Latest post</div>
      <div className="flex w-screen justify-center">
        <Latest />
        <Trendingpost />
      </div>
    </div>
  );
};

export default Latestpost;
