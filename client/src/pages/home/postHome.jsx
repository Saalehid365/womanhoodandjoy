import React, { useEffect, useState } from "react";
import BlogPost from "./blogpost";

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
    <div className="flex flex-col items-center justify-center pt-24">
      <div className="w-7/12 grid grid-cols-3 place-items-center pb-12">
        {posts.length > 0 &&
          posts.map((post) => <BlogPost {...post} key={post._id} />)}
      </div>
      <button className="border w-32 rounded-xl uppercase text-xs h-8">
        Load more
      </button>
    </div>
  );
};

export default PostHome;
