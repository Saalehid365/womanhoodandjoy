import React from "react";
import { Link } from "react-router-dom";

import { formatISO9075 } from "date-fns";
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
    <div className="flex flex-col items-start w-2/3 pb-6 border border-b-2 pt-4 bg-gray-200 mb-4">
      <Link to={`/post/${_id}`}>
        <img
          src={"http://localhost:4000/" + cover}
          className="h-96 w-full rounded-xl"
          alt="/"
        ></img>
      </Link>
      <div>
        <FaUser />
        <h2>{author.username}</h2>
      </div>

      <Link
        to={`/post/${_id}`}
        className="w-44 h-12 border flex justify-center items-center border-gray-800 rounded-full"
      >
        <h3>Read more</h3>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default BlogPost;
