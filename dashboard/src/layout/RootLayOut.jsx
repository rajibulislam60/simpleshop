import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";

const RootLayOut = () => {
  return (
    <div className="flex gap-5 w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
