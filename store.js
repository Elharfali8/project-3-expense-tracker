import { configureStore } from "@reduxjs/toolkit";
import walletSlice from '@/features/wallet/walletSlice'

export const store = configureStore({
    reducer: {
        wallet: walletSlice
    }
})