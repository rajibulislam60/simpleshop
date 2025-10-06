import React from "react";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import { NavLink } from "react-router";

const AllProduct = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 120,
      discountPrice: 99,
      quantity: 10,
      image: image1,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 150,
      discountPrice: 120,
      quantity: 8,
      image: image2,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 80,
      discountPrice: 65,
      quantity: 15,
      image: image3,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-md p-5">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        All Products
      </h2>

      {/* Table Header */}
      <div className="border-b border-gray-300 text-lg font-semibold text-gray-700">
        <ul className="grid grid-cols-7 gap-4 py-2 text-center">
          <li>ID</li>
          <li>Image</li>
          <li>Product Name</li>
          <li>Price</li>
          <li>Discount</li>
          <li>Quantity</li>
          <li>Action</li>
        </ul>
      </div>

      {/* Product List */}
      <div>
        {products.map((product) => (
          <ul
            key={product.id}
            className="grid grid-cols-7 gap-4 items-center py-3 text-center border-b border-gray-200 hover:bg-gray-50"
          >
            <li>{product.id}</li>
            <li>
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 object-cover rounded-md mx-auto"
              />
            </li>
            <li>{product.name}</li>
            <li>${product.price}</li>
            <li className="text-green-600">${product.discountPrice}</li>
            <li>{product.quantity}</li>
            <li className="flex justify-center gap-2">
              <NavLink
                to={`/edit/${product.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
              >
                Edit
              </NavLink>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm">
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
