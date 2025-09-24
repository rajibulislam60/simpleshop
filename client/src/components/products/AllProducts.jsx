import React from "react";
import data from "../data";
import { useNavigate } from "react-router";

const AllProducts = ({ products }) => {
  const navigate = useNavigate();
  const itemsToShow = products.length > 0 ? products : data;

  const handleClicktoId = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {itemsToShow.length > 0 ? (
        itemsToShow.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClicktoId(item.id)}
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
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
};

export default AllProducts;
