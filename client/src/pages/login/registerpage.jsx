import React, { useState } from "react";

const Registerpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registartion successful");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className=" flex justify-center w-full">
      <form
        className="w-1/3 flex flex-col  h-96 justify-evenly"
        onSubmit={register}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Registerpage;
