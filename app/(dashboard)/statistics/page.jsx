import CategoryChart from '@/components/CategoryChart'
import ExpenseSummary from '@/components/ExpenseSummary'
import ExpenseTrendChart from '@/components/ExpenseTrendChart'
import FrequentExpenses from '@/components/FrequentExpenses'
import React from 'react'

const StatisticsPage = () => {
  return (
      <div>
          <ExpenseSummary />
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