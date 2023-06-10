import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Login from "./login";

const Socialmedia = () => {
  return (
    <div className="flex justify-evenly w-44 text-1xl">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
    </div>
  );
};

export default Socialmedia;
