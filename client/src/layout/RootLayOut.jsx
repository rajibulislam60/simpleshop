import React from "react";
import { Outlet } from "react-router";
import Search from "../components/Search";
import Footer from "../components/Footer";

const RootLayOut = () => {
  return (
    <div>
      <Search />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayOut;
