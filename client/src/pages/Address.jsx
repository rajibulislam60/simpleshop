import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Container from "../components/Container";

const Address = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, quantity } = state || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  if (!product) {
    return <h2 className="text-center mt-10">No product selected</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop/order", {
      state: { product, quantity, formData },
    });
  };

  return (
    <div>
      <Container>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />

            {/* City Radio */}
            <div>
              <p className="mb-2 font-medium">City:</p>
              {["Dhaka", "Chattogram", "Khulna"].map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="city"
                    value={c}
                    checked={formData.city === c}
                    onChange={handleChange}
                  />
                  {c}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white py-2 rounded"
            >
              Confirm Address
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Address;
