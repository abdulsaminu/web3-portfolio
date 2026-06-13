import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 Portfolio | On-Chain Proof',
  description: 'DeFi + Smart Contract Developer – real on-chain execution proofs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* floating Hire Me button */}
        <Link href="/contact" className="floating-hire">
          💼 Hire Me
        </Link>
      </body>
    </html>
  );
}