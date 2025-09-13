import React from "react";

const Search = () => {
  return (
    <div className="py-3 px-2 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl font-bold">SimpleShop</h1>
        <h4 className="text-md font-normal">Brends</h4>
      </div>
      <input
        type="text"
        placeholder="Search products ....."
        className="w-[450px] px-4 py-2 border border-gray-500 rounded-full"
      />
    </div>
  );
};

export default Search;
