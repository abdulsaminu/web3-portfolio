import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdul Saminu | Web3 Architect',
  description: 'DeFi + Smart Contract Developer – on-chain proofs, real transaction receipts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
          <div className="container-main flex justify-between items-center py-3">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              abdul<span className="text-primary">.saminu</span>
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