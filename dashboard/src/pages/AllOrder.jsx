import React from "react";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import { NavLink } from "react-router";
import OrderTitle from "../Components/OrderTitle";

const AllOrder = () => {
  const orders = [
    {
      id: 1,
      customer: {
        name: "John Doe",
        phone: "+8801712345678",
        address: "Bashundhara, Dhaka",
      },
      products: [
        {
          id: 1,
          name: "Smart Watch",
          totalprice: 120,
          image: image1,
        },
        {
          id: 2,
          name: "Wireless Headphones",
          totalprice: 150,
          image: image2,
        },
      ],
    },
    {
      id: 2,
      customer: {
        name: "Jane Smith",
        phone: "+8801987654321",
        address: "Badda, Dhaka",
      },
      products: [
        {
          id: 3,
          name: "Bluetooth Speaker",
          totalprice: 80,
          image: image3,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="max-w-full mx-auto mt-2 bg-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">All Orders</h2>
        <div className="py-5">
          <OrderTitle />
        </div>

        {/* Table Header */}
        <div className="border-b border-gray-300 text-lg font-semibold text-gray-700">
          <ul className="grid grid-cols-7 gap-4 py-2 text-center">
            <li>ID</li>
            <li>Customer Details</li>
            <li className="col-span-3">Products</li>
            <li>Total Amount</li>
            <li>Action</li>
          </ul>
        </div>

        {/* Table Body */}
        <div>
          {orders.map((order) => {
            const totalAmount = order.products.reduce(
              (sum, p) => sum + p.totalprice,
              0
            );

            return (
              <div
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50 py-4"
              >
                <ul className="grid grid-cols-7 gap-4 items-center text-center">
                  {/* Order ID */}
                  <li>{order.id}</li>

                  {/* Customer Info */}
                  <li>
                    <div className="text-left">
                      <h3 className="font-semibold">{order.customer.name}</h3>
                      <p className="text-sm text-gray-600">
                        {order.customer.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.customer.address}
                      </p>
                    </div>
                  </li>

                  {/* Product List */}
                  <li className="col-span-3">
                    <div className="flex flex-col gap-3">
                      {order.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-center gap-3"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <span className="font-medium">
                            {product.name} (${product.totalprice})
                          </span>
                        </div>
                      ))}
                    </div>
                  </li>

                  {/* Total Amount */}
                  <li className="font-semibold">${totalAmount}</li>

                  {/* Actions */}
                  <li className="flex justify-center gap-2">
                    <NavLink
                      to={`/edit/${order.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </NavLink>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm">
                      Cencel
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
