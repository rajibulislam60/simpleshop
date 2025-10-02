import React from "react";
import Container from "./Container";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gray-200 mb-3">
      <Container>
        <div className="py-2 flex justify-between">
          <ul className="flex gap-3 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Offers
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Shop
            </NavLink>
          </ul>
          <button className="bg-teal-600 hover:bg-teal-900 text-md font-medium text-white px-5 py-2 rounded-full">
            Log in
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
