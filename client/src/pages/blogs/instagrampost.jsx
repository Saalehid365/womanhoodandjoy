import React from "react";
import { FaEllipsisH, FaInstagram } from "react-icons/fa";

const Instagrampost = () => {
  return (
    <div className="h-96 w-full mt-8">
      <div className="flex flex-col justify-evenly h-full items-center">
        <div className="flex w-32 items-center justify-evenly">
          <FaEllipsisH className="text-gray-300" />
          <h2 className="font-thin text-gray-600">Instagram</h2>
          <FaEllipsisH className="text-gray-300" />
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="grid grid-cols-2 grid-rows-2 gap-2"
        >
          <div className=" bg-seaweed bg-cover h-28 w-28 sm:w-36 sm:h-36"></div>
          <div className=" bg-salt bg-cover h-28 w-28 sm:w-36 sm:h-36"></div>
          <div className=" bg-beach bg-cover h-28 w-28 sm:w-36 sm:h-36"></div>
          <div className=" bg-sun bg-cover h-28 w-28 sm:w-36 sm:h-36"></div>
        </a>
        <FaInstagram className="text-1xl text-gray-500 " />
      </div>
    </div>
  );
};

export default Instagrampost;
