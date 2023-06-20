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
      <div className="flex justify-center pt-24 w-full items-start h-full">
        <div className="grid grid-cols-3  w-2/3">
          {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
        </div>
        <div className=" flex flex-col items-start p-4 ">
          <Abouticon />
          <Subscribeicon />
          <Instagrampost />
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
