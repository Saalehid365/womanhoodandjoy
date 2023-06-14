import React from "react";
import Socials from "../home/socials";

const Abouticon = () => {
  return (
    <div className=" flex flex-col items-center justify-between h-96 w-60">
      <h2 className="font-bold">About me</h2>
      <div className="h-28 w-28 bg-gray-400 rounded-full"></div>
      <h3 className="w-2/3 text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, quos
        expedita voluptatem
      </h3>
      <Socials />
    </div>
  );
};

export default Abouticon;
