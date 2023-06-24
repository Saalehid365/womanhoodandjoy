import React, { useEffect, useState } from "react";
import BlogPost from "../home/blogpost";
import Abouticon from "../contact/abouticon";
import Slideshow from "./slideshow";
import Subscribeicon from "./subscribeicon";
import Instagrampost from "./instagrampost";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://womanhood.onrender.com/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);
  return (
    <div className="border-t-2">
      <div className="flex justify-center pt-24 w-full items-start h-full sm:flex-col sm:pt-8">
        <div className="flex justify-center w-full sm:pb-12">
          <h2 className="text-3xl">Blog page</h2>
        </div>
        <div className="grid grid-cols-3  w-2/3 sm:grid-cols-1 sm:w-full sm:place-items-center sm:gap-4">
          {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
        </div>
        <div className=" flex flex-col items-start p-4 sm:justify-center sm:w-full">
          <Abouticon />
          <Subscribeicon />
          <Instagrampost />
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
