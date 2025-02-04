export const addDataToLocalStorage = (expenseData) => {
    localStorage.setItem('expenseData', JSON.stringify(expenseData));
  };
  
  export const removeDataFromLocalStorage = () => {
    localStorage.removeItem('expenseData');
  };
  
  export const getDataFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('expenseData');
      const expenseData = result ? JSON.parse(result) : null;
      return expenseData;
    }
    return null; 
  };


// Wallet data
  export const addWalletToLocalStorage = (walletData) => {
    localStorage.setItem('walletData', JSON.stringify(walletData));
  };
  
  export const removeWalletFromLocalStorage = () => {
    localStorage.removeItem('walletData');
  };
  
  export const getWalletFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('walletData');
      const walletData = result ? JSON.parse(result) : null;
      return walletData;
    }
    return null; 
  };