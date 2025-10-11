import React from "react";
import data from "../data";
import { useNavigate } from "react-router";

const AllProducts = ({ products }) => {
  const navigate = useNavigate();
  const itemsToShow = products && products.length > 0 ? products : data;

  const handleClicktoId = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-gray-50 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8">
        {itemsToShow.length > 0 ? (
          itemsToShow.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="flex flex-row md:flex-col flex-1">
                <div
                  onClick={() => handleClicktoId(item.id)}
                  className="w-1/2 md:w-full"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 md:h-64 object-cover rounded-tl-xl md:rounded-t-xl md:rounded-bl-none"
                  />
                </div>
                <div className="flex flex-col justify-between w-1/2 md:w-full px-4 py-3 text-left md:text-center">
                  <div
                    onClick={() => handleClicktoId(item.id)}
                    className="flex-1"
                  >
                    <h4 className="text-lg md:text-xl font-semibold capitalize text-gray-800 hover:text-teal-600 transition">
                      {item.name}
                    </h4>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                      Tk {item.price}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleClicktoId(item.id)}
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold rounded-b-xl transition"
              >
                Order Now
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
