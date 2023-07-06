import React from "react";
import Getintouch from "./getintouch";
import Abouticon from "./abouticon";

const Contactpage = () => {
  return (
    <div className="flex justify-center h-full mb-40 pt-24 border-t-2 sm:pt-6 sm:mb-6">
      <div className="w-3/4 sm:w-full">
        <h2 className="text-5xl font-display">Contact Me</h2>
        <div className="h-96 w-full bg-sun bg-center bg-cover bg-no-repeat mt-12"></div>
        <div className="w-full flex justify-between pt-12 sm:flex-col">
          <Getintouch />
          <Abouticon />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
