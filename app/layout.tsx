import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdul Saminu | Web3 Architect',
  description: 'DeFi + Smart Contract Developer – on-chain proofs, real transaction receipts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="container-main flex justify-between items-center py-3">
            <Link href="/" className="text-xl font-bold font-serif tracking-tight">
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