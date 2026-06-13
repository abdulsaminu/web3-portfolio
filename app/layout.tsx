'use client';

import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <body className={jakarta.className}>
        <header className="dashboard-header">
          <div className="header-container">
            {/* Home area — distinct from tabs */}
            <div className="logo-area">
              <Link href="/" className="logo-link">
                abdul<span>.saminu</span>
              </Link>
            </div>

            {/* Three main tabs — large, clickable, at least 50% width */}
            <div className="nav-tabs">
              <Link
                href="/proof"
                className={`dash-tab ${isActive('/proof') ? 'active' : ''}`}
              >
                🔍 Proof
              </Link>
              <Link
                href="/projects"
                className={`dash-tab ${isActive('/projects') ? 'active' : ''}`}
              >
                📦 Projects
              </Link>
              <Link
                href="/contact"
                className={`dash-tab ${isActive('/contact') ? 'active' : ''}`}
              >
                ✉️ Contact
              </Link>
            </div>
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