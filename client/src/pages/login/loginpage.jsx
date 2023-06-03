import React from "react";

const Loginpage = () => {
  return (
    <div className=" flex justify-center w-full">
      <form className="w-1/3 flex flex-col  h-96 justify-evenly">
        <input
          type="text"
          placeholder="username"
          className="h-12 p-2 border rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="h-12 p-2 border rounded-lg"
        ></input>
        <button className="bg-gray-700 h-12 rounded-lg text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
