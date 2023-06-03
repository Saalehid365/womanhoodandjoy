import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-60 flex justify-between">
      <Link to="loginpage>">Login</Link>
      <Link to="registerpage">Register</Link>
    </div>
  );
};

export default Login;
