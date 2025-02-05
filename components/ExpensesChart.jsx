'use client'
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";



const ExpenseChart = () => {
  const { expenses } = useSelector((store) => store.expense)
  
  const expenseData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find(item => item.category === expense.category);
    if (existingCategory) {
      existingCategory.amount += Number(expense.amount); // Sum expenses per category
    } else {
      acc.push({ category: expense.category, amount: Number(expense.amount) });
    }
    return acc;
  }, []);

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Expense Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expenseData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
