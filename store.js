import { configureStore } from "@reduxjs/toolkit";
import walletSlice from '@/features/wallet/walletSlice'
import expenseSlice from '@/features/expense/expenseSlice'
import userSlice from "@/features/user/userSlice";

export const store = configureStore({
    reducer: {
        wallet: walletSlice,
        expense: expenseSlice,
        user: userSlice
    }
})