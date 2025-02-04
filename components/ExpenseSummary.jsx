import React from "react";
import GlobalTitle from "./GlobalTitle";

const ExpenseSummary = ({totalBalance, totalExpenses, balance}) => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <GlobalTitle title='Expense Summary' />
      <div className="mt-4 space-y-2">
        <p className="text-green-500 font-medium">Income: ${totalBalance?.toFixed(2)}</p>
        <p className="text-red-500 font-medium">Expenses: ${totalExpenses?.toFixed(2)}</p>
        <p className="text-gray-700 font-bold">Balance: ${balance?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
