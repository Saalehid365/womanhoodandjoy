import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center h-96 items-center bg-gray-600">
      <div className="flex flex-col justify-evenly items-center h-72">
        <h2 className="text-6xl">Womanhood and Joy</h2>
        <h3 className="w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          adipisci, architecto natus aperiam mollitia quam.
        </h3>
        <button className="uppercase bg-gray-400 p-2 rounded-2xl w-40">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Banner;
