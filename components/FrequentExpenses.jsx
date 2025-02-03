import React from "react";

const FrequentExpenses = () => {
  const categories = [
    { name: "Food", amount: "$400" },
    { name: "Transport", amount: "$300" },
    { name: "Rent", amount: "$700" },
  ];

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Most Frequent Expenses</h3>
      <ul className="mt-4 space-y-2">
        {categories.map((item, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700">{item.name}</span>
            <span className="text-red-500 font-semibold">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrequentExpenses;
