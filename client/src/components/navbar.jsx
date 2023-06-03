import React from "react";
import Socialmedia from "./socialmedia";
import Links from "./links";
import Login from "./login";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="flex justify-between h-24">
      <Logo />
      <Links />
      <div className=" w-96 flex items-center justify-evenly px-4">
        <Socialmedia />
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
