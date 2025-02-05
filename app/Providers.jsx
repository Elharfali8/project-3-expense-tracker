'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { store } from '@/store';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

const Providers = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until the theme is mounted
  }

  return (
    <Provider store={store}>
    <ProtectedRoute >

      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ProtectedRoute>
    </Provider>
  );
};

export default Providers;