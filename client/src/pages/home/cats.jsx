import React from "react";
import { Link } from "react-router-dom";

const Cats = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly w-7/12">
        <div className="bg-seaweed bg-cover w-52 h-52 p-4">
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <Link className="bg-white w-28 text-xs p-1 rounded-sm">Health</Link>
          </div>
        </div>
        <div className="bg-salt bg-cover w-52 h-52 p-4">
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <Link className="bg-white w-28 text-xs p-1 rounded-sm">Beauty</Link>
          </div>
        </div>
        <div className="bg-beach bg-cover w-52 h-52 p-4">
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <Link className="bg-white w-28 text-xs p-1 rounded-sm">
              Lifestyle
            </Link>
          </div>
        </div>
        <div className="bg-sun bg-cover w-52 h-52 p-4">
          <div className="border h-full border-white flex flex-col items-center justify-end pb-6">
            <Link className="bg-white w-28 text-xs p-1 rounded-sm">Sun</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;
