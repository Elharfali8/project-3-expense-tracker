'use client'

import { calcBudgetOverview } from "@/features/wallet/walletSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BudgetOverview = ({ totalBalance, totalExpenses, }) => {
  const {budget} = useSelector((store) => store.wallet)
  const dispatch = useDispatch()

  
  useEffect(() => {
        dispatch(calcBudgetOverview({income: totalBalance, expenses: totalExpenses}))
    }, [totalBalance, totalExpenses])

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Budget Overview</h3>
      <p className="text-sm text-gray-500">{budget}% of your budget used</p>
      <div className="w-full bg-gray-200 h-4 rounded-full mt-3">
        <div className="bg-red-500 h-4 rounded-full" style={{ width: `${budget}%` }}></div>
      </div>
    </div>
  );
};

export default BudgetOverview;
