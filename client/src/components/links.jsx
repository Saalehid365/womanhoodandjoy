import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className=" w-full flex justify-center items-center text-gray-500 font-mono">
      <Link to="/" className=" w-36 text-center">
        Home
      </Link>
      <Link to="blogpage" className="  w-32">
        Blogs
      </Link>
      <Link className="  w-36">Author</Link>
      <Link className="  w-36">Shop</Link>
      <Link to="contactpage" className="  w-36">
        Contact
      </Link>
    </div>
  );
};

export default Links;
