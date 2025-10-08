import React from "react";
import { NavLink } from "react-router-dom";

export  function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex gap-6 justify-center">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive ? "text-yellow-400" : "text-white"
          } hover:text-yellow-300`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive ? "text-yellow-400" : "text-white"
          } hover:text-yellow-300`
        }
      >
        About
      </NavLink>
    </nav>
  );
}
