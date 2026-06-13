"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="w-full border-b border-gray-900 px-6 py-4">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* BRAND */}
        <Link href="/" className="font-bold text-white">
          Abdul.dev
        </Link>

        {/* NAV */}
        <nav className="flex gap-6 text-sm">

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>

          <Link href="/proof" className={linkClass("/proof")}>
            Proof
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

        </nav>

      </div>

    </header>
  );
}