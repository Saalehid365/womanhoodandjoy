import React, { useEffect, useState } from "react";
import BlogPost from "../home/blogpost";
import Abouticon from "../contact/abouticon";
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
    <div className="border-t-2 bg-rose-100">
      <div className="flex flex-col justify-center pt-24 w-full items-start h-full sm:pt-8">
        <div className="flex justify-center w-full pb-12 sm:pb-12 ">
          <h2 className="text-5xl font-display">Blog page</h2>
        </div>
        <div className="flex justify-center w-full sm:flex-col">
          <div className="grid grid-cols-3  w-9/12 sm:grid-cols-1 sm:w-full sm:place-items-center sm:gap-4">
            {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
          </div>
          <div className=" flex flex-col items-start p-4 sm:justify-center sm:w-full">
            <Abouticon />
            <Subscribeicon />
            <Instagrampost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
