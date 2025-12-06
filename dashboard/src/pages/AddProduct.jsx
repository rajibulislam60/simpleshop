import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    quantity: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("discount", formData.discount);
    data.append("quantity", formData.quantity);
    data.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/addproduct",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✔ Product Added:", response.data);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Product Adding Failed");
    }
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-5 text-center text-gray-700">
        Add Product
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none"
        ></textarea>

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          name="discount"
          type="number"
          placeholder="Discount (%)"
          value={formData.discount}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
