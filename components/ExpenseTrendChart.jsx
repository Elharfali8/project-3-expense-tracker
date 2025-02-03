'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", expenses: 500 },
  { month: "Feb", expenses: 700 },
  { month: "Mar", expenses: 450 },
  { month: "Apr", expenses: 600 },
  { month: "May", expenses: 800 },
];

const ExpenseTrendChart = () => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Monthly Expense Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expenses" stroke="#FF8042" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseTrendChart;
