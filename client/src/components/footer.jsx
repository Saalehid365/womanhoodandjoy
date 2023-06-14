import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGripLinesVertical,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-evenly items-center w-full px-61 bg-gray-100 h-60 pt-6 text-gray-400">
      <div>
        <h2 className="">Woman hood & Joy</h2>
      </div>
      <div className="flex flex-col justify-evenly items-center h-full py-2">
        <FaGripLinesVertical />
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center border h-16 w-16 rounded-full hover:border-gray-600">
            <FaInstagramSquare />
          </div>
          <h2 className="w-24 text-sm pt-4">Follow us on instagram</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-44">
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
