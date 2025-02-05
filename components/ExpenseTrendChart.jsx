'use client'
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { format, parse, isValid } from "date-fns";

// Function to process expenses into monthly totals
const processExpensesByMonth = (expenses) => {
  if (!expenses || !Array.isArray(expenses)) return [];

  const monthlyTotals = {};

  expenses.forEach(({ amount, createdAt }) => {
    if (!createdAt || typeof createdAt !== "string" || !amount) return;

    const parsedDate = parse(createdAt, "MMM dd, yyyy", new Date()); // Parse "Feb 05, 2025"

    if (!isValid(parsedDate)) {
      console.warn("Invalid date format:", createdAt);
      return;
    }

    const month = format(parsedDate, "MMM"); // Convert date to "Jan", "Feb", etc.

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }
    monthlyTotals[month] += amount;
  });

  const chartData = Object.keys(monthlyTotals).map((month) => ({
    month,
    expenses: monthlyTotals[month],
  }));
  return chartData;
};

const ExpenseTrendChart = () => {
  const { expenses } = useSelector((store) => store.expense);

  // Process expenses data
  const data = processExpensesByMonth(expenses);

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Monthly Expense Trends</h3>
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No expense data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="expenses" stroke="#FF8042" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ExpenseTrendChart;
