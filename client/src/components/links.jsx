import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className=" w-2/4 flex justify-center items-center">
      <Link to="/" className="border-l-2 w-32 text-center">
        Home
      </Link>
      <Link to="blogpage" className="border-l-2  w-32">
        Blogs
      </Link>
      <Link className="border-l-2  w-32">Author</Link>
      <Link className="border-l-2  w-32">Shop</Link>
      <Link className="border-l-2 border-r-2 w-32">Contact</Link>
    </div>
  );
};

export default Links;
