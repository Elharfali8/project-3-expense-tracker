import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    expenses: [],
    categories: ['Food', 'Transport', 'Shopping', 'Entertainment', 'Bills', 'Other']
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, { payload }) => {
            const { amount, category, description } = payload
            const newExpense = {
                id: uuidv4(),
                amount: Number(amount),
                category,
                description
            }
            
            if (!amount || !category) {
                toast.error('Please fill amount and category fields')
                return
            }

            state.expenses = [...state.expenses, newExpense]
            toast.success('Expense added successfully')
        }
    }
})

export const {addExpense} = expenseSlice.actions

export default expenseSlice.reducer