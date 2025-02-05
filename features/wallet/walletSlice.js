import { addWalletToLocalStorage, getWalletFromLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    wallets: getWalletFromLocalStorage() || [],
    transactions: ['deposit', 'withdraw'],
    budget: 0,
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addWallet: (state, { payload }) => {
            const {name, balance} = payload
            const newWallet = {
                id: uuidv4(),
                name,
                balance: Number(balance)
            }
            state.wallets = [...state.wallets, newWallet]
            addWalletToLocalStorage(state.wallets)
            toast.success('Wallet added successfully')
        },
        handleTransaction: (state, { payload }) => {
            const { id, transactionType, amount } = payload
            const selectedWallet = state.wallets.find((item) => item.id === id)

            if (!selectedWallet) {
                toast.error("Wallet not found");
                return;
            }

            if (transactionType === 'deposit') {
                selectedWallet.balance += Number(amount);
            } else {
                if (selectedWallet.balance < Number(amount)) {
                    toast.error("Insufficient balance");
                    return;
                }
                selectedWallet.balance -= Number(amount);
            }
        
            addWalletToLocalStorage(state.wallets);
            toast.success("Transaction successful");
        },
        calcBudgetOverview: (state, { payload }) => {
            const { income, expenses } = payload
            const calc = (Number(expenses) / Number(income)) * 100
            state.budget = calc.toFixed(2)
        }
    }
})

export const {addWallet,handleTransaction, calcBudgetOverview} = walletSlice.actions 

export default walletSlice.reducer