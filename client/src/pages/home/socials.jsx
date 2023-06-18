import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex w-24 justify-evenly text-sm">
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default Socials;
