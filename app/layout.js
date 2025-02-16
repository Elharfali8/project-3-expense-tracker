import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
const inter = Inter({ subsets: ['latin'], display: 'swap' });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "XpenseHub",
  description: "All your expenses in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        <Providers>
        {children}
        </Providers>
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
