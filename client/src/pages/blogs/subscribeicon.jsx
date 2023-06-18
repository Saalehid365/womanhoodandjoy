import React from "react";
import { Link } from "react-router-dom";

const Subscribeicon = () => {
  return (
    <div className="h-60 w-full mt-8 bg-gray-100 flex flex-col justify-center">
      <div className="w-full flex flex-col justify-evenly h-full items-center">
        <h2 className="font-display text-3xl w-48">Woman hood and joy</h2>
        <h3 className="w-44 text-sm text-gray-500">
          Get updates about my life in your inbox
        </h3>
        <Link className="w-36 h-8 bg-gray-300 rounded-3xl text-gray-100 flex items-center justify-center border border-blue-400">
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default Subscribeicon;
