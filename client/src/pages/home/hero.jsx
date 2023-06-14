import React, { useEffect, useState } from "react";
import FeaturedPost from "./featuredpost";

const Hero = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/featured").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);

  return (
    <div className="flex justify-center pb-12">
      <div className="grid grid-cols-3 grid-rows-1 col-span-3 place-items-center w-4/5 ">
        {posts.length > 0 &&
          posts.map((post) => <FeaturedPost {...post} key={post._id} />)}
      </div>
    </div>
  );
};

export default Hero;
