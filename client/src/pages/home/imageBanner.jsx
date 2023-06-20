import React from "react";

const ImageBanner = () => {
  return (
    <div className="flex justify-center pb-12 pt-12 sm:hidden">
      <div className="grid grid-rows-1 grid-cols-6 gap-5 sm:grid-rows-2 sm:grid-cols-2 sm:gap-1">
        <div className="bg-gray-200 h-40 w-40 sm:h-36 sm:w-36"></div>
        <div className="bg-gray-400 h-40 w-40 sm:h-36 sm:w-36"></div>
        <div className="bg-gray-200 h-40 w-40 sm:h-36 sm:w-36"></div>
        <div className="bg-gray-400 h-40 w-40 sm:h-36 sm:w-36"></div>
        <div className="bg-gray-200 h-40 w-40 sm:h-36 sm:w-36"></div>
        <div className="bg-gray-400 h-40 w-40 sm:h-36 sm:w-36"></div>
      </div>
    </div>
  );
};

export default ImageBanner;
