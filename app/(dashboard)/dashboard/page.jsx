'use client'

import BudgetOverview from '@/components/BudgetOverview'
import ExpenseChart from '@/components/ExpensesChart'
import ExpenseSummary from '@/components/ExpenseSummary'
import LatestExpense from '@/components/LatestExpense'
import React from 'react'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
  const { expenses } = useSelector((store) => store.expense)
  const {wallets} = useSelector((store) => store.wallet)

  const totalBalance = wallets?.reduce((sum, item) => sum + item.balance, 0);
  const totalExpenses = expenses?.reduce((sum, item) => sum + item.amount, 0)
  const balance = totalBalance - totalExpenses


  

  return (
    <div className=''>
      <div className='grid xl:grid-cols-6 gap-4'>
        <div className='xl:col-span-4'>
          <LatestExpense expenses={expenses} />
        </div>
        <div className='xl:col-span-2 grid gap-y-4'>
          <ExpenseSummary
            totalBalance={totalBalance}
            totalExpenses={totalExpenses}
            balance={balance}
          />
          <BudgetOverview
            totalBalance={totalBalance}
            totalExpenses={totalExpenses}
          />
        </div>
      </div>
      <div className='mt-6 lg:mt-8'>
        <ExpenseChart />
      </div>
    </div>
  )
}

export default DashboardPage