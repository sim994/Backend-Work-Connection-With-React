import React from "react";
import { useState } from "react";

export function Home() {
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let InputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
      setUser({
        ...user,[name]:value
      })
  };
  let HandleSubmit = (e) => {
    e.preventDefault()

    alert(user.username)
    
  };
  return (
    <div className="p-6 text-center h-full w-full bg-teal-400">
      <form
        action="#"
        method="get"
        className="h-50 w-60 bg-lime-600"
        onSubmit={HandleSubmit}
        >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your name"
          value={user.username}
          onChange={InputChange}
          />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={InputChange}
          />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={InputChange}
          />
        <input type="submit" name="submit" id="submit" />
      </form>
    </div>
  );
}
