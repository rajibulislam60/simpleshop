import React from "react";

const AddProduct = () => {
  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-5 text-center text-gray-700">
        Add Product
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:ring-teal-400"
        ></textarea>

        <input
          type="file"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="number"
          placeholder="Discount (%)"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
