import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight, FaUser } from "react-icons/fa";

const BlogPost = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  return (
    <div className="flex items-start w-2/3 pb-6 border border-b-2 pt-4 bg-gray-200 mb-4">
      <Link to={`/post/${_id}`}>
        <img
          src={"https://womanhood.onrender.com/" + cover}
          className="h-60 w-full rounded-xl"
          alt="/"
        ></img>
      </Link>
      <div>
        <div className="flex ">
          <FaUser />
        </div>
        <div>{summary}</div>
        <Link
          to={`/post/${_id}`}
          className="w-44 h-12 border flex justify-center items-center border-gray-800 rounded-full"
        >
          <h3>Read more</h3>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
