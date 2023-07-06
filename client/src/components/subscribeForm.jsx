import React from "react";

const SubscribeForm = () => {
  return (
    <div className="w-full flex justify-center items-center h-96">
      <form className="w-2/3 h-60 bg-blue-100 flex flex-col justify-evenly items-center">
        <h2 className="text-4xl font-display">Subscribe</h2>
        <div className="flex w-3/4 justify-evenly">
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              className="h-10 pl-2 border  border-gray-300"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              className="h-10 pl-2 border  border-gray-300"
            ></input>{" "}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="h-10 pl-2 border  border-gray-300"
            ></input>{" "}
          </div>

          <button
            type="submit"
            className="h-10 w-40 pl-2 border bg-black text-gray-400 border-gray-300 hover:bg-gray-600"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
