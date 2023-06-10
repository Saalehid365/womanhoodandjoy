import React, { useEffect, useState } from "react";
import BlogPost from "../home/blogpost";

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
    <div>
      <div className="bg-gray-700 h-60 flex justify-center items-center text-5xl text-white">
        <h2>Blog Page</h2>
      </div>

      <div className="flex justify-center pt-24">
        <div className="flex flex-col items-center w-2/3 border-r-2">
          {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
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
