import React, { useContext, useEffect, useState } from "react";
import Socialmedia from "./socialmedia";
import Links from "./links";
import Login from "./login";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { UserContext } from "../user";

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
    <div className="flex justify-between h-24">
      <Logo />
      <Links />
      <div className=" flex items-center justify-evenly px-4">
        <Socialmedia />
        {username && (
          <div className=" w-72 flex justify-between">
            <Link to="/createnew">Create new post</Link>
            <Link to="registerpage">Register</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </div>
        )}
        {!username && <Login />}
      </div>
    </div>
  );
};

export default Navbar;
