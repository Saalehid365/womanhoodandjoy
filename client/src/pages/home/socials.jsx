import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex w-24 justify-evenly text-xs">
      <FaTwitter />
      <FaInstagram />
      <FaFacebook />
    </div>
  );
};

export default Socials;
