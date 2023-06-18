import React, { useState } from "react";
import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Links = () => {
  const [showblogs, setShowblogs] = useState(false);

  const showblogsFunction = () => {
    setShowblogs(true);
  };
  const closeBlog = () => {
    setShowblogs(false);
  };

  return (
    <div className=" w-full flex justify-center items-center text-gray-500 font-thin">
      <Link to="/" className=" w-36 text-center">
        Home
      </Link>
      <div className="w-36 justify-center items-center flex flex-col relative">
        <Link
          to="blogpage"
          onMouseOver={showblogsFunction}
          className="flex justify-between items-center h-full"
        >
          Blogs
          <FaAngleDown className="text-gray-300 pl-2" />
        </Link>
        {showblogs && (
          <div
            className="w-44 flex flex-col absolute top-9 bg-white h-40 justify-between items-start text-gray-400 px-4 text-sm"
            onMouseLeave={closeBlog}
          >
            <Link
              to="/filteredbeautypage"
              className=" w-full hover:text-black hover:font-normal h-8 flex text-start border-dotted border-b-2"
            >
              Beauty
            </Link>
            <Link
              to="/filteredfoodpage"
              className=" w-full  hover:text-black hover:font-normal h-8 flex text-start border-dotted border-b-2"
            >
              Food
            </Link>
            <Link
              to="/filteredlifestylepage"
              className=" w-full  hover:text-black hover:font-normal h-8 flex text-start border-dotted border-b-2"
            >
              Lifestyle
            </Link>
            <Link
              to="/filteredtravelpage"
              className=" w-full  hover:text-black hover:font-normal h-8 flex text-start "
            >
              Travel
            </Link>
          </div>
        )}
      </div>
      <Link className="w-36">Author</Link>
      <Link className="w-36">Shop</Link>
      <Link to="contactpage" className="  w-36">
        Contact
      </Link>
    </div>
  );
};

export default Links;
