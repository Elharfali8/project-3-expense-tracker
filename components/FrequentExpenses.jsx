'use client'

import { useSelector } from "react-redux";

const FrequentExpenses = () => {
  const { expenses } = useSelector((store) => store.expense)
 

  const categoryData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find(item => item.name === expense.category);
    if (existingCategory) {
      existingCategory.value += Number(expense.amount); 
    } else {
      acc.push({ name: expense.category, value: Number(expense.amount) });
    }
    return acc;
  }, []);


  const newArr = categoryData?.sort((a, b) => b.value - a.value)
  


  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Most Frequent Expenses</h3>
      <ul className="mt-4 space-y-2">
        {newArr.map((item, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700">{item.name}</span>
            <span className="text-red-500 font-semibold">${item.value?.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrequentExpenses;
