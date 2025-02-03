'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", pv: 2400, uv: 4000 },
  { name: "Page B", pv: 1398, uv: 3000 },
  { name: "Page C", pv: 9800, uv: 2000 },
];

const ExpenseChart = () => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Expense Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
