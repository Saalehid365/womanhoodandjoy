import React, { useContext, useEffect } from "react";
import Links from "./links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { UserContext } from "../user";

import {
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <div className="pt-4  px-4">
      <div className="flex justify-between w-full text-1xl items-center">
        <Link className="bg-pink-200 w-32 h-8 flex items-center justify-center rounded-full text-sm">
          Subscribe
        </Link>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-96 flex justify-evenly text-1xl items-center"
        >
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
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
      <div className="h-44 flex flex-col justify-center items-center ">
        <h2 className="text-7xl font-display">Woman hood & Joy</h2>
      </div>
      <div className="flex justify-center h-16 border-t-2 border-gray-100">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
