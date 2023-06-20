import React, { useEffect, useState } from "react";
import BlogPost from "./blogpost";
import { Link } from "react-router-dom";

const PostHome = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/posthome").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-24 sm:pb-12">
      <div className="w-7/12 grid grid-cols-3 place-items-center pb-24 sm:grid-cols-1 ">
        {posts.length > 0 &&
          posts.map((post) => <BlogPost {...post} key={post._id} />)}
      </div>
      <Link
        to="blogpage"
        className="flex justify-center items-center border w-32 rounded-xl uppercase text-xs h-8 hover:bg-gray-200 hover:text-white sm:mt-6"
      >
        Load more
      </Link>
    </div>
  );
};

export default PostHome;
