import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import OrderTitle from "../Components/OrderTitle";
import axios from "axios";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/order/allorder",
        { withCredentials: true }
      );
      console.log(response.data.data);
      setOrders(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-w-full mx-auto mt-2 bg-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">All Orders</h2>
        <div className="py-5">
          <OrderTitle />
        </div>

        <div className="border-b border-gray-300 text-lg font-semibold text-gray-700">
          <ul className="grid grid-cols-7 gap-4 py-2 text-center">
            <li>ID</li>
            <li>Customer Details</li>
            <li className="col-span-3">Products</li>
            <li>Total Amount</li>
            <li>Action</li>
          </ul>
        </div>

        <div>
          {orders.map((order) => {
            const totalAmount = order.products.reduce(
              (sum, p) => sum + p.price,
              0
            );

            return (
              <div
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50 py-4"
              >
                <ul className="grid grid-cols-7 gap-4 items-center text-center">
                  <li>{order.id}</li>

                  <li>
                    <div className="text-left">
                      <h3 className="font-semibold">{order.customer.c_name}</h3>
                      <p className="text-sm text-gray-600">
                        {order.customer.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.customer.address}
                      </p>
                    </div>
                  </li>

                  <li className="col-span-3">
                    <div className="flex flex-col gap-3">
                      {order.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-center gap-3"
                        >
                          {/* <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          /> */}
                          <span className="font-medium">{product.name}</span>
                        </div>
                      ))}
                    </div>
                  </li>

                  <li className="font-semibold">${totalAmount}</li>
                  <li className="flex justify-center gap-2">
                    <NavLink
                      to={`/editorder/${order.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </NavLink>
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
