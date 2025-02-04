import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { addDataToLocalStorage, getDataFromLocalStorage } from "@/utils/localStorage";

const initialState = {
    expenses: getDataFromLocalStorage() || [],
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
                createdAt: format(new Date(), 'MMM dd, yyyy'),
                amount: Number(amount),
                category,
                description
            }
            
            if (!amount || !category) {
                toast.error('Please fill amount and category fields')
                return
            }

            state.expenses = [...state.expenses, newExpense]
            addDataToLocalStorage(state.expenses)
            toast.success('Expense added successfully')
        }
    }
})

export const {addExpense} = expenseSlice.actions

export default expenseSlice.reducer