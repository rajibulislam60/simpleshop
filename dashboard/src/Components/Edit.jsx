import React, { useState } from "react";

const Edit = () => {
  const [product, setProduct] = useState({
    name: "Smart Watch",
    description: "A modern smartwatch with health tracking features.",
    price: 120,
    discountPrice: 99,
    quantity: 10,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    alert("Product updated successfully!");
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-5 text-center text-gray-700">
        Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:ring-teal-400"
        ></textarea>

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="number"
          name="discountPrice"
          value={product.discountPrice}
          onChange={handleChange}
          placeholder="Discount Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <input
          type="file"
          name="image"
          onChange={(e) =>
            setProduct({ ...product, image: e.target.files[0].name })
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-400"
        />

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition-all"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
