'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Rent", value: 700 },
  { name: "Shopping", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CategoryChart = () => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Category Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
