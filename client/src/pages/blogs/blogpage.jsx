import React, { useEffect, useState } from "react";
import BlogPost from "../home/blogpost";
import Abouticon from "../contact/abouticon";
import Slideshow from "./slideshow";
import Subscribeicon from "./subscribeicon";
import Instagrampost from "./instagrampost";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);
  return (
    <div>
      <div className="bg-gray-500 h-72 flex justify-center items-center text-5xl text-white">
        <h2>Blog Page</h2>
      </div>

      <div className="flex justify-center pt-24 w-full items-start h-full">
        <div className="grid grid-cols-3  w-2/3">
          {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
        </div>
        <div className=" flex flex-col items-start p-4 ">
          <Abouticon />
          <Slideshow />
          <Subscribeicon />
          <Instagrampost />
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
