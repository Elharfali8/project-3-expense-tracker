import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    wallets: [
        { id: 1, name: 'Cash', balance: 500 },
        { id: 2, name: 'Bank Account', balance: 1500 },
    ],
    transactions: ['deposit', 'withdraw']
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
                balance: 0
            }
            state.wallets = [...state.wallets, newWallet]
        },
        handleTransaction: (state, { payload }) => {
            const { id, transactionType, amount } = payload
            const selectedWallet = state.wallets.find((item) => item.id === Number(id))
            if (transactionType === 'deposit') {
                selectedWallet.balance += Number(amount)
            } else {
                selectedWallet.balance -= Number(amount)
            }
            return
        }
    }
})

export const {addWallet,handleTransaction} = walletSlice.actions 

export default walletSlice.reducer