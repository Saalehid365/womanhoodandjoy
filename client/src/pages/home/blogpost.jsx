import React from "react";
import { Link } from "react-router-dom";

import Socials from "./socials";
import { FaMinus, FaSpinner } from "react-icons/fa";

const BlogPost = ({
  _id,
  title,
  summary,
  cover,
  content,
  catergory,
  createdAt,

  author,
}) => {
  return (
    <div className=" w-72 flex flex-col items-center pb-6  pt-4  mb-4">
      <Link to={`/post/${_id}`} className="bg-gray-200 w-full">
        <img
          src={"http://localhost:4000/" + cover}
          className="h-60 w-full rounded-xl"
          alt="/"
        ></img>
      </Link>
      <div className="flex h-6 pt-4 items-center w-32 justify-evenly">
        <FaSpinner className="text-xs text-gray-300" />
        <h4 className=" text-gray-300">{catergory}</h4>
        <FaSpinner className="text-xs text-gray-300" />
      </div>
      <h3 className="pt-4 font-bold text-sm pb-6 text-gray-700">{title}</h3>
      <div className="text-sm text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non saepe
        aspernatur iste tenetur itaque est explicabo eveniet magni dolorem? Non
      </div>
      <div className="flex justify-center w-full pt-4 text-gray-400">
        <Socials />
      </div>
    </div>
  );
};

export default BlogPost;
