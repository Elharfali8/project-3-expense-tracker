'use client'

import CategoryChart from '@/components/CategoryChart'
import ExpenseSummary from '@/components/ExpenseSummary'
import ExpenseTrendChart from '@/components/ExpenseTrendChart'
import FrequentExpenses from '@/components/FrequentExpenses'
import React from 'react'
import { useSelector } from 'react-redux'

const StatisticsPage = () => {
  const { expenses } = useSelector((store) => store.expense)
  const {wallets} = useSelector((store) => store.wallet)

  const totalBalance = wallets?.reduce((sum, item) => sum + item.balance, 0);
  const totalExpenses = expenses?.reduce((sum, item) => sum + item.amount, 0)
  const balance = totalBalance - totalExpenses

  return (
      <div>
      <ExpenseSummary
        totalBalance={totalBalance}
        totalExpenses={totalExpenses}
        balance={balance}
      />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <CategoryChart />
              <ExpenseTrendChart />
          </div>
          <div className="mt-6">
            <FrequentExpenses />
          </div>
    </div>
  )
}

export default StatisticsPage