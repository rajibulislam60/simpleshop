import React from "react";
import Total from "../Components/Total";
import Container from "./../Components/Container";

const Home = () => {
  return (
    <div className="w-full mx-auto mt-2 bg-white p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Home</h2>
      <div className="py-5">
        <Total />
      </div>
    </div>
  );
};

export default Home;
