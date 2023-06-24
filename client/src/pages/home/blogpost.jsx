import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Socials from "./socials";
import { FaSpinner } from "react-icons/fa";

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
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="h-2/3 w-72 flex flex-col items-center pb-6  pt-4  mb-4 sm:h-full sm:mt-6 sm:bg-orange-50 sm:pb-0  "
    >
      <Link to={`/post/${_id}`} className="bg-gray-200 w-full sm:w-11/12">
        <img
          src={"https://womanhood.onrender.com/" + cover}
          className="h-60 w-full sm:w-full "
          alt="/"
        ></img>
      </Link>
      <div className="flex h-6 pt-4 items-center w-32 justify-evenly">
        <FaSpinner className="text-xs text-gray-300" />
        <h4 className=" text-gray-400">{catergory}</h4>
        <FaSpinner className="text-xs text-gray-300" />
      </div>
      <Link to={`/post/${_id}`} className="px-2">
        <h3 className="pt-4 font-bold text-sm pb-6 text-gray-700">{title}</h3>
        <div className="text-sm text-gray-500 line-clamp-3 text-start">
          {summary}
        </div>
      </Link>
      <div className="flex justify-center w-full pt-4 text-gray-400 sm:hidden">
        <Socials />
      </div>
      <div className="hidden sm:inline"></div>
    </motion.div>
  );
};

export default BlogPost;
