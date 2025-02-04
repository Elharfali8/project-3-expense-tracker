import { addWalletToLocalStorage, getWalletFromLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    wallets: getWalletFromLocalStorage() || [],
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
        }
    }
})

export const {addWallet,handleTransaction} = walletSlice.actions 

export default walletSlice.reducer