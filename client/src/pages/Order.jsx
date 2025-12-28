import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router";
import Container from "../components/Container";
import axios from "axios";

const Order = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, quantity, formData } = state || {};

  const totalPrice = product?.price * quantity;

  useEffect(() => {
    if (product && formData) {
      createOrder();
    }
  }, []);

  const createOrder = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/order/createorder", {
        products: [
          {
            productId: product._id || product.id,
            quantity: quantity,
            image: product.image,
            name: product.name,
            price: product.price,
          },
        ],
        customer: {
          c_name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          totalPrice,
        },
      });

      console.log("Order created successfully!");
    } catch (error) {
      console.log("Order error:", error);
      alert("❌ Order failed! Try again.");
      navigate("/shop");
    }
  };

  if (!product || !formData) {
    return <h2 className="text-center mt-10">No order details found</h2>;
  }

  return (
    <div>
      <Container>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            ✅ Order Confirmed!
          </h2>

          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded"
            />
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p>Price: Tk {product.price}</p>
              <p>Quantity: {quantity}</p>
              <p className="font-semibold">Total: Tk {totalPrice}</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Delivery Details</h3>
            <p>Name: {formData.name}</p>
            <p>Phone: {formData.phone}</p>
            <p>Address: {formData.address}</p>
            <p>City: {formData.city}</p>
          </div>

          <Link
            to="/shop"
            className="block text-center bg-blue-600 hover:bg-blue-800 text-white mt-4 py-2 rounded"
          >
            Back to Shop
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Order;
