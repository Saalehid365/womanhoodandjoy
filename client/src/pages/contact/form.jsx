import React from "react";

const Form = () => {
  return (
    <div className="pt-12 w-full flex flex-col items-start sm:h-full ">
      <div className="flex justify-between w-full sm:flex-col sm:h-40">
        <input
          placeholder="Name"
          className="border w-72 h-10 pl-2 rounded-sm sm:w-full"
        ></input>
        <input
          placeholder="Email"
          className="border w-72 h-10 pl-2 rounded-sm sm:w-full"
        ></input>
        <input
          placeholder="Website"
          className="border w-72 h-10 rounded-sm pl-2 sm:w-full"
        ></input>
      </div>
      <div className="w-full pt-4">
        <textarea
          placeholder="Add your message"
          type="text"
          className="border w-full h-28 p-2 rounded-sm"
        ></textarea>
      </div>
      <div className="pt-4">
        <button className="w-40 bg-black h-10 rounded-3xl text-gray-100 text-sm font-thin">
          send message
        </button>
      </div>
    </div>
  );
};

export default Form;
