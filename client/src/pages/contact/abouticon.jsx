import React from "react";
import Socials from "../home/socials";
import { FaEllipsisH } from "react-icons/fa";

const Abouticon = () => {
  return (
    <div className=" flex flex-col items-center justify-between h-96 w-60 sm:hidden">
      <div className="flex w-32 items-center justify-evenly">
        <FaEllipsisH className="text-gray-300" />
        <h2 className="font-thin text-gray-600">About me</h2>
        <FaEllipsisH className="text-gray-300" />
      </div>
      <div className="h-28 w-28 bg-gray-400 rounded-full"></div>
      <h3 className="w-2/3 text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, quos
        expedita voluptatem
      </h3>
      <Socials />
    </div>
  );
};

export default Abouticon;
