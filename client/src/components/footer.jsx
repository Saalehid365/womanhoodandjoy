import React from "react";
import {
  FaFacebook,
  FaGripLinesVertical,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-evenly items-center w-full px-61 bg-gray-100 h-60 pt-6 text-gray-400 sm:flex-col sm:pb-4 sm:h-full border border-t-2 border-gray-300">
      <div className="sm:hidden">
        <h2 className="sm:text-2xl">Woman hood & Joy</h2>
      </div>
      <div className="flex flex-col justify-evenly items-center h-full py-2 ">
        <FaGripLinesVertical className="sm:hidden" />
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center border h-16 w-16 rounded-full hover:border-gray-600">
            <FaInstagramSquare />
          </div>
          <h2 className="w-24 text-sm pt-4 sm:w-40">Follow us on instagram</h2>
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
