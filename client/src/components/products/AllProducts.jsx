import React from "react";
import data from "../data";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-500 rounded-md shadow-xl flex flex-col"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-t-md"
          />
          <div className="px-3 py-3 flex-1">
            <h4 className="text-md font-medium capitalize">{item.name}</h4>
            <h2 className="text-xl font-semibold">Tk- {item.price}</h2>
          </div>
          <div>
            <button className="w-full py-2 capitalize bg-teal-400 text-xl font-semibold hover:bg-teal-500 transition rounded-b-md">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
