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
        {/* navigation header */}
        <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/10">
          <div className="container-main flex justify-between items-center py-3">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              web3<span className="text-white">.proof</span>
            </Link>
            <nav className="flex gap-1">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/proof" className="nav-link">Proof</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Link href="/contact" className="floating-hire">
          💼 Hire Me
        </Link>
      </body>
    </html>
  );
}