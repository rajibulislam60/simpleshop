import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    quantity: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/product/singleproduct/${id}`
        );
        setProduct(res.data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("discount", product.discount);
      formData.append("quantity", product.quantity);

      if (product.image instanceof File) {
        formData.append("image", product.image);
      }

      await axios.put(
        `http://localhost:8000/api/v1/product/updatedproduct/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product Updated Successfully!");
      navigate("/allproduct");
    } catch (error) {
      console.log(error);
      alert("Error updating product");
    }
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24"
        ></textarea>

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          type="number"
          name="discount"
          value={product.discount}
          onChange={handleChange}
          placeholder="Discount Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <input
          type="file"
          name="image"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-all"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
