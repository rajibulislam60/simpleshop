import React, { useState } from "react";

const Total = () => {
  const [selectedDate, setSelectedDate] = useState("30/10/2025");

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    if (!isNaN(date)) {
      const formattedDate = date.toLocaleDateString("en-GB");
      setSelectedDate(formattedDate);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
          <h2>Total Order</h2>
          <h3>22,000</h3>
        </div>
        <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
          <h2>Total Sell</h2>
          <h3>18,400</h3>
        </div>
        <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
          <h2>Total Selling Amount</h2>
          <h3>10,304,000</h3>
        </div>
        <div className="border rounded-md shadow-2xl bg-gray-900 text-white font-semibold px-12 py-6 items-center text-center">
          <h2>Total Cancel</h2>
          <h3>3,600</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex justify-between items-center my-4">
          <h2 className="font-semibold text-gray-800">Date: {selectedDate}</h2>
          <input
            type="date"
            onChange={handleDateChange}
            className="border px-3 py-1 rounded-md"
          />
        </div>

        <div className="flex justify-around">
          <div className="border rounded-md shadow-2xl bg-gray-700 text-white font-semibold px-12 py-6 items-center text-center">
            <h2>Total Order</h2>
            <h3>750</h3>
          </div>
          <div className="border rounded-md shadow-2xl bg-gray-700 text-white font-semibold px-12 py-6 items-center text-center">
            <h2>Sell</h2>
            <h3>690</h3>
          </div>
          <div className="border rounded-md shadow-2xl bg-gray-700 text-white font-semibold px-12 py-6 items-center text-center">
            <h2>Selling Amount</h2>
            <h3>386,400</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
