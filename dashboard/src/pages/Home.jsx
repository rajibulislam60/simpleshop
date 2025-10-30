import React from "react";
import Total from "../Components/Total";
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

const data = [
  { date: "Oct 25", sell: 480, cancel: 50 },
  { date: "Oct 26", sell: 520, cancel: 40 },
  { date: "Oct 27", sell: 610, cancel: 35 },
  { date: "Oct 28", sell: 560, cancel: 60 },
  { date: "Oct 29", sell: 630, cancel: 45 },
  { date: "Oct 30", sell: 690, cancel: 55 },
];

const Home = () => {
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
          <LineChart data={data}>
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
              dot={{ r: 5, fill: "#facc15" }}
              name="Sell"
            />
            <Line
              type="monotone"
              dataKey="cancel"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 5, fill: "#ef4444" }}
              name="Cancel"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
