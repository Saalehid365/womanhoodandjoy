import React from "react";
import BlogPost from "./blogpost";

const Latest = () => {
  return (
    <div className="w-2/4 h-full p-4 mx-12">
      <div className="h-72  w-full rounded-md pb-6 bg-gray-400 mb-6 flex justify-center items-center">
        <h3 className="text-5xl text-white">Blog Quote</h3>
      </div>
      <div>
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  );
};

export default Latest;
