import { configureStore } from "@reduxjs/toolkit";
import walletSlice from '@/features/wallet/walletSlice'
import expenseSlice from '@/features/expense/expenseSlice'

export const store = configureStore({
    reducer: {
        wallet: walletSlice,
        expense: expenseSlice
    }
})