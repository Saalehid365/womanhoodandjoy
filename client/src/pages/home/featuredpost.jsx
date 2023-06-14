import React from "react";
import { Link } from "react-router-dom";

const FeaturedPost = ({
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
    <div className="bg-gray-300 w-96 h-96 flex flex-col items-center justify-center rounded-md">
      <h3 className="pb-6">{catergory}</h3>
      <h2>{title}</h2>
      <Link className="w-32 bg-gray-400 mt-6 rounded-2xl h-8 flex items-center justify-center text-gray-100">
        Read more
      </Link>
    </div>
  );
};

export default FeaturedPost;
