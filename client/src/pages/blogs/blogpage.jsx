import React from "react";
import BlogPost from "../home/blogpost";
import Blogheader from "./blogheader";

const Blogpage = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <Blogheader />
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-2/3 border-r-2">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <div className=" w-72  h-full flex flex-col items-start p-4 ">
          <h2>CATEGORIES</h2>
          <div>
            <p>All posts</p>
            {/* map through tags and render */}
            <p>Health</p>
            <p>Fruits</p>
            <p>Water</p>
            <p>Skin</p>
            <p>Clense</p>
            <p>Gaps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
