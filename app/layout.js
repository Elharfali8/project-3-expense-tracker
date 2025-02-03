import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ['latin'], display: 'swap' });

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
        {children}
      </body>
    </html>
  );
}
