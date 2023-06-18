import React from "react";
import Getintouch from "./getintouch";
import Abouticon from "./abouticon";

const Contactpage = () => {
  return (
    <div className="flex justify-center h-full mb-40 pt-24 border-t-2">
      <div className="w-3/4">
        <h2 className="text-4xl">Contact Me</h2>
        <div className="h-96 w-full bg-sun bg-center bg-cover bg-no-repeat mt-12"></div>
        <div className="w-full flex justify-between pt-12">
          <Getintouch />
          <Abouticon />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
