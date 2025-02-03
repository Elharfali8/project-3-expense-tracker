import React from "react";
import GlobalTitle from "./GlobalTitle";

const ExpenseSummary = () => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <GlobalTitle title='Expense Summary' />
      <div className="mt-4 space-y-2">
        <p className="text-green-500 font-medium">Income: $5000</p>
        <p className="text-red-500 font-medium">Expenses: $1278.45</p>
        <p className="text-gray-700 font-bold">Balance: $3721.55</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
