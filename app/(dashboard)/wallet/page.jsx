'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WalletPage = () => {
  const [wallets, setWallets] = useState([
    { id: 1, name: 'Cash', balance: 500 },
    { id: 2, name: 'Bank Account', balance: 1500 },
  ]);
  const [newWallet, setNewWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]?.id || '');

  const handleAddWallet = () => {
    if (newWallet.trim()) {
      setWallets([...wallets, { id: wallets.length + 1, name: newWallet, balance: 0 }]);
      setNewWallet('');
    }
  };

  const handleTransaction = () => {
    setWallets(
      wallets.map(wallet =>
        wallet.id === selectedWallet
          ? {
              ...wallet,
              balance:
                transactionType === 'deposit'
                  ? wallet.balance + Number(amount)
                  : wallet.balance - Number(amount),
            }
          : wallet
      )
    );
    setAmount('');
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Wallet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wallets.map(wallet => (
          <Card key={wallet.id} className="p-4 shadow-md bg-muted">
            <CardContent>
              <h2 className="text-xl font-semibold">{wallet.name}</h2>
              <p className="text-lg font-bold">${wallet.balance.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <Input
          placeholder="New Wallet Name"
          value={newWallet}
          onChange={e => setNewWallet(e.target.value)}
        />
        <Button onClick={handleAddWallet}>Add Wallet</Button>
      </div>
      <div className="space-y-4">
        <Select onValueChange={setSelectedWallet}>
          <SelectTrigger>
            <SelectValue placeholder="Select Wallet" />
          </SelectTrigger>
          <SelectContent>
            {wallets.map(wallet => (
              <SelectItem key={wallet.id} value={wallet.id.toString()}>
                {wallet.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <Select onValueChange={setTransactionType}>
          <SelectTrigger>
            <SelectValue placeholder="Select Transaction Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deposit">Deposit</SelectItem>
            <SelectItem value="withdraw">Withdraw</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleTransaction}>Submit Transaction</Button>
      </div>
    </div>
  );
};

export default WalletPage;
