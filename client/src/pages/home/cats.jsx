import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cats = () => {
  return (
    <div className="flex justify-center pt-12 ">
      <div className="flex justify-evenly w-9/12 sm:flex-col sm:items-center sm:w-11/12">
        <Link
          to="filteredlifestylepage"
          className="bg-seaweed bg-cover w-52 h-52 p-4 sm:mb-4 sm:w-full"
        >
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <h2 className="bg-white w-28 text-xs p-1 rounded-sm">Lifestyle</h2>
          </div>
        </Link>
        <Link
          to="filteredtravelpage"
          className="bg-salt bg-cover w-52 h-52 p-4 sm:mb-4 sm:w-full"
        >
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <h2 className="bg-white w-28 text-xs p-1 rounded-sm">Travel</h2>
          </div>
        </Link>
        <Link
          to="filteredfoodpage"
          className="bg-beach bg-cover w-52 h-52 p-4 sm:mb-4 sm:w-full"
        >
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <h2 className="bg-white w-28 text-xs p-1 rounded-sm">Food</h2>
          </div>
        </Link>
        <Link
          to="filteredbeautypage"
          className="bg-sun bg-cover w-52 h-52 p-4 sm:mb-4 sm:w-full"
        >
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <h2 className="bg-white w-28 text-xs p-1 rounded-sm">Beauty</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cats;
