import React from "react";

const BudgetOverview = () => {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Budget Overview</h3>
      <p className="text-sm text-gray-500">75% of your budget used</p>
      <div className="w-full bg-gray-200 h-4 rounded-full mt-3">
        <div className="bg-red-500 h-4 rounded-full" style={{ width: "75%" }}></div>
      </div>
    </div>
  );
};

export default BudgetOverview;
