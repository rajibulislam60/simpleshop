import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import OrderTitle from "../Components/OrderTitle";
import axios from "axios";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [orderStats, setOrderStats] = useState({
    total: 0,
    pending: 0,
    hold: 0,
    confirmed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/order/allorder",
        { withCredentials: true }
      );
      setOrders(response.data.data);
      const ordersData = response.data.data;
      setOrders(ordersData);

      const stats = {
        total: ordersData.length,
        pending: ordersData.filter((o) => o.status === "pending").length,
        hold: ordersData.filter((o) => o.status === "hold").length,
        confirmed: ordersData.filter((o) => o.status === "confirmed").length,
        cancelled: ordersData.filter((o) => o.status === "cancelled").length,
      };

      setOrderStats(stats);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= STATUS CHANGE =================
  const handleStatusChange = async (orderId, status) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/order/status/${orderId}`,
        { status },
        { withCredentials: true }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-w-full mx-auto mt-2 bg-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">All Orders</h2>

        <div className="py-5">
          <OrderTitle
            total={orderStats.total}
            pending={orderStats.pending}
            hold={orderStats.hold}
            confirmed={orderStats.confirmed}
            cancelled={orderStats.cancelled}
          />
        </div>

        <div className="border-b border-gray-300 text-lg font-semibold text-gray-700">
          <ul className="grid grid-cols-8 gap-2 py-2 text-center">
            <li>ID</li>
            <li>Customer Details</li>
            <li className="col-span-3">Products</li>
            <li>Total Amount</li>
            <li>Status</li>
            <li>Edit</li>
          </ul>
        </div>

        <div>
          {orders.map((order) => {
            const totalAmount = order.products.reduce(
              (sum, p) => sum + p.price * p.quantity,
              0
            );

            return (
              <div
                key={order._id}
                className="border-b border-gray-200 hover:bg-gray-50 py-4"
              >
                <ul className="grid grid-cols-8 gap-2 items-center text-center">
                  <li className="text-sm">{order._id}</li>

                  <li>
                    <div className="text-left">
                      <h3 className="font-semibold">
                        {order.customer?.c_name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {order.customer?.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.customer?.address}
                      </p>
                    </div>
                  </li>

                  <li className="col-span-3">
                    <div className="flex flex-col gap-2">
                      {order.products.map((product) => (
                        <div
                          key={product._id}
                          className="flex justify-center gap-2 text-sm"
                        >
                          <span className="font-medium">{product.name}</span>
                          <span className="text-gray-500">
                            x{product.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </li>

                  <li className="font-semibold">${totalAmount}</li>

                  <li>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="hold">Hold</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </li>

                  <li>
                    <NavLink
                      to={`/editorder/${order._id}`}
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
