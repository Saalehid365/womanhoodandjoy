import React, { useContext, useEffect, useState } from "react";
import Links from "./links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { UserContext } from "../user";

import {
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("https://womanhood.onrender.com/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  const logout = () => {
    fetch("https://womanhood.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;
  const [hamburger, setHamburger] = useState(false);
  const toggle = () => {
    setHamburger(!hamburger);
  };
  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);
  };
  console.log(search);

  return (
    <div className="pt-4 px-4 sm:p-0">
      <div className="flex justify-between w-full text-1xl items-center sm:hidden">
        <Link className="bg-pink-200 w-32 h-8 flex items-center justify-center rounded-full ">
          Subscribe
        </Link>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-96 flex justify-evenly text-1xl items-center"
        >
          <a
            rel="noreffer"
            target="_blank"
            href="www.facebook.com/womanhoodandjoy"
            className="hover:text-gray-500"
          >
            <FaFacebook />
          </a>
          <a
            rel="noreffer"
            target="_blank"
            href="www.instagram.com/womanhoodandjoy"
            className="hover:text-gray-500"
          >
            <FaInstagram />
          </a>
          <a
            rel="noreffer"
            target="_blank"
            href="www.twitter.com/womanhoodandjoy"
            className="hover:text-gray-500"
          >
            <FaTwitter />
          </a>
          {!username && (
            <Link to="loginpage">
              <FaUser />
            </Link>
          )}
          {username && (
            <div className="flex justify-between w-40">
              <Link to="/createnew">
                <FaPencilAlt />
              </Link>
              <Link to="registerpage">
                <FaAddressCard />
              </Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex justify-center h-16 border-t-2 border-gray-100 sm:hidden">
        <Links />
      </div>
      <div className="hidden sm:flex navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] shadow bg-base-100 w-72"
            >
              <Link
                to="/"
                className="text-start border-b-2 border-dotted h-8 flex items-center"
              >
                Home
              </Link>
              <Link
                to="blogpage"
                o
                className="text-start border-b-2 border-dotted h-8 flex items-center"
              >
                Blogs
              </Link>
              <Link
                to=""
                className="text-start border-b-2 border-dotted h-8 flex items-center"
              >
                Shop
              </Link>
              <Link className="text-start border-b-2 border-dotted h-8 flex items-center">
                About us
              </Link>
              <Link to="contactpage" className="text-start h-8">
                Contact
              </Link>
              <div className="flex justify-center pb-4">
                <div className="flex  justify-evenly w-52">
                  <FaInstagram />
                  <FaTwitter />
                  <FaFacebook />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar-center flex flex-col">
          <a className="btn btn-ghost normal-case text-xs sm:p-0 font-Indie sm:text-xl">
            Womanhood and joy
          </a>
        </div>
        {!search ? (
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <FaTimes className="ml-12 text-2xl mr-2 " onClick={toggleSearch} />
        )}
      </div>
      {search && (
        <div className="absolute w-screen h-44 bg-green-300">searchbar</div>
      )}
    </div>
  );
};

export default Navbar;
