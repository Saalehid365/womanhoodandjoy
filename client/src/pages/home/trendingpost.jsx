import React from "react";
import Featuredpost from "./featuredpost";

const Trendingpost = () => {
  return (
    <div className="h-full w-96 bg-white rounded-md items-start flex flex-col p-4">
      <h2 className="text-2xl font-bold">Trending Post</h2>
      <div className="pt-12">
        <Featuredpost />
        <Featuredpost />
        <Featuredpost />
        <Featuredpost />
      </div>
    </div>
  );
};

export default Trendingpost;
