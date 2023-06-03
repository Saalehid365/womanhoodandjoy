import React from "react";

const Newsletterregister = () => {
  return (
    <div
      className="bg-gray-200 w-10/12 h-60 rounded-2xl  flex justify-center items-center   
  "
    >
      <div className="bg-gray-200 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="w-2/3 text-xs pt-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores
          voluptate distinctio necessitatibus enim provident vel voluptatum?
          Pariatur, veniam ratione?
        </p>
        <div className="flex h-8 mt-4">
          <input
            className="pl-4 w-96 rounded-md"
            placeholder="Enter your email"
          ></input>
          <button className="bg-gray-700 w-32 ml-4 rounded-md text-white text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletterregister;
