import React, { useEffect, useState } from "react";
import Total from "../Components/Total";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Home = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/order/chart", {
        withCredentials: true,
      });
      setChartData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto mx-auto mt-2 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Home</h2>

      <div className="py-5">
        <Total />
      </div>

      <div className="mt-10 bg-gray-900 text-white p-6 rounded-md shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Daily Selling Chart
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend />

            <Line
              type="monotone"
              dataKey="sell"
              stroke="#facc15"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Sell"
            />

            <Line
              type="monotone"
              dataKey="cancel"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Cancel"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
