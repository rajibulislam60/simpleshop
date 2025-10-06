import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-[20%] h-screen p-4">
      <ul className="space-y-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-center px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-teal-600 text-white font-semibold shadow-md"
                  : "bg-white text-gray-700 hover:bg-teal-500 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addproduct"
            className={({ isActive }) =>
              `block text-center px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-teal-600 text-white font-semibold shadow-md"
                  : "bg-white text-gray-700 hover:bg-teal-500 hover:text-white"
              }`
            }
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allproduct"
            className={({ isActive }) =>
              `block text-center px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-teal-600 text-white font-semibold shadow-md"
                  : "bg-white text-gray-700 hover:bg-teal-500 hover:text-white"
              }`
            }
          >
            All Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allorder"
            className={({ isActive }) =>
              `block text-center px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-teal-600 text-white font-semibold shadow-md"
                  : "bg-white text-gray-700 hover:bg-teal-500 hover:text-white"
              }`
            }
          >
            All Order
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
