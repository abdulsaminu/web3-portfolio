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
            {/* Home button */}
            <div className="logo-area">
              <Link href="/" className="logo-link">
                🏠 Home
              </Link>
            </div>

            {/* Three main tabs — new order: Projects (left), Proof (middle), Contact (right) */}
            <div className="nav-tabs">
              <Link
                href="/projects"
                className={`dash-tab ${isActive('/projects') ? 'active' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Projects
              </Link>
              <Link
                href="/proof"
                className={`dash-tab ${isActive('/proof') ? 'active' : ''}`}
              >
                🔍 Proof
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