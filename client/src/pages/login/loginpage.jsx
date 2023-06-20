import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../user";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("https://womanhood.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className=" flex justify-center w-full">
      <form
        className="w-1/3 flex flex-col  h-96 justify-evenly"
        onSubmit={login}
      >
        <input
          type="text"
          placeholder="username"
          className="h-12 p-2 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          className="h-12 p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="bg-gray-700 h-12 rounded-lg text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
