import React from "react";

const OrderTitle = ({ total, pending, hold, confirmed, cancelled }) => {
  return (
    <div className="flex justify-between gap-4">
      <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 text-center">
        <h2>Total Order</h2>
        <h3>{total}</h3>
      </div>

      <div className="border rounded-md shadow-2xl bg-yellow-600 text-white font-semibold px-12 py-6 text-center">
        <h2>Processing</h2>
        <h3>{pending}</h3>
      </div>
      <div className="border rounded-md shadow-2xl bg-yellow-600 text-white font-semibold px-12 py-6 text-center">
        <h2>Hold</h2>
        <h3>{hold}</h3>
      </div>

      <div className="border rounded-md shadow-2xl bg-green-600 text-white font-semibold px-12 py-6 text-center">
        <h2>Confirmed</h2>
        <h3>{confirmed}</h3>
      </div>

      <div className="border rounded-md shadow-2xl bg-red-600 text-white font-semibold px-12 py-6 text-center">
        <h2>Cancelled</h2>
        <h3>{cancelled}</h3>
      </div>
    </div>
  );
};

export default OrderTitle;
