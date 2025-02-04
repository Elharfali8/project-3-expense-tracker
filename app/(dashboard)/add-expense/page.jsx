'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addExpense } from "@/features/expense/expenseSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AddExpensePage = () => {
    const { expenses, categories } = useSelector((store) => store.expense)
    const dispatch = useDispatch()

    const [selectedCategory, setSelectedCategory] = useState('')
    const [amountValue, setAmountValue] = useState('')
    const [description, setDescription] = useState('')

    const handleExpense = () => {
        dispatch(addExpense({
            amount: amountValue,
            category: selectedCategory,
            description
        }))
        setSelectedCategory('')
        setAmountValue('')
        setDescription('')
    }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Add Expense</h1>
      <Card className="p-4 shadow-md bg-muted">
        <CardContent className="space-y-4">
          <Input
            type="number"
            placeholder="Amount"
            value={amountValue}
            onChange={e => setAmountValue(e.target.value)}
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
                  <Button
                      className='dark:text-white'
                      onClick={handleExpense}
                  >
                      Add Expense
                  </Button>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Expenses</h2>
        {expenses.map(expense => (
          <Card key={expense.id} className="p-4 shadow-md bg-muted">
            <CardContent>
              <p className="text-lg font-bold">${expense.amount.toFixed(2)}</p>
              <p className="text-gray-600 dark:text-gray-400">{expense.category}</p>
              {expense.description && <p className="text-gray-500 dark:text-gray-300">{expense.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AddExpensePage