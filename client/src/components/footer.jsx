import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-60 bg-gray-100 h-60 pt-12">
      <div className="flex flex-col items-start h-36 justify-between">
        <h2>Womanhood and joy</h2>
        <div className="text-sm flex flex-col w-60 h-24 items-start justify-evenly">
          <h3>© 2019 - 2023 Womanhood and Joy.</h3>
          <h3 className="text-start">All Rights Reserved.</h3>
          <h4 className="font-bold">
            Powered by{" "}
            <Link className="text-blue-300 underline">IDevelop365</Link>
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-start h-36 justify-between">
        <h3 className="font-bold">Tags</h3>
        <div className="grid grid-rows-3 grid-cols-3 w-60 h-24">
          {/* grid map over tabs */}
          <button className="text-xs bg-white rounded-lg h-6 p-1">
            Health
          </button>
          <button>Beauty</button>
          <button>Food</button>
          <button>Travel</button>
          <button>Gaps</button>
          <button>Green</button>
          <button>Water</button>
          <button>Health</button>
          <button>Health</button>
        </div>
      </div>
      <div className="flex flex-col items-start h-36 justify-between">
        <h3 className="font-bold">Social</h3>
        <div className="flex flex-col w-60 h-24 items-start justify-evenly">
          <Link className="flex items-center">
            <FaTwitter className="mr-2" />
            Twitter
          </Link>
          <Link className="flex items-center">
            <FaFacebookSquare className="mr-2" />
            Facebook
          </Link>
          <Link className="flex items-center">
            <FaInstagramSquare className="mr-2" />
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start h-36 justify-between">
        <h3 className="font-bold">About</h3>
        <div className="flex flex-col w-60 h-24 items-start justify-evenly">
          <Link className="flex items-center">Shop</Link>
          <Link className="flex items-center">Authors</Link>
          <Link className="flex items-center">Sitemap</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
