import React from "react";
import GlobalTitle from "./GlobalTitle";

const LatestExpenses = ({expenses}) => {

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
          <GlobalTitle title='Latest Expenses' subTitle='Recent transactions' />

      <div className="mt-4 space-y-3">
        {expenses?.slice(-3).map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-medium text-gray-300">{item.category}</p>
              <p className="text-sm text-gray-500">{item.createdAt}</p>
            </div>
            <p className="text-red-500 font-semibold">-${item.amount}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-500 hover:underline">View More</button>
    </div>
  );
};

export default LatestExpenses;
