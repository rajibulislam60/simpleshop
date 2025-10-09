import React from "react";

const OrderTitle = () => {
  return (
    <div className="flex justify-between">
      <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
        <h2>Total Order</h2>
        <h3>1000</h3>
      </div>
      <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
        <h2>Processing</h2>
        <h3>200</h3>
      </div>
      <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
        <h2>Confirm</h2>
        <h3>900</h3>
      </div>
      <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
        <h2>Cencel</h2>
        <h3>100</h3>
      </div>
    </div>
  );
};

export default OrderTitle;
