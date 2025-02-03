import BudgetOverview from '@/components/BudgetOverview'
import ExpenseChart from '@/components/ExpensesChart'
import ExpenseSummary from '@/components/ExpenseSummary'
import GlobalTitle from '@/components/GlobalTitle'
import LatestExpense from '@/components/LatestExpense'
import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className=''>
      <div className='grid xl:grid-cols-6 gap-4'>
        <div className='xl:col-span-4'>
          <LatestExpense />
        </div>
        <div className='xl:col-span-2 grid gap-y-4'>
          <ExpenseSummary />
          <BudgetOverview />
        </div>
      </div>
      <div className='mt-6 lg:mt-8'>
        <ExpenseChart />
      </div>
    </div>
  )
}

export default DashboardPage