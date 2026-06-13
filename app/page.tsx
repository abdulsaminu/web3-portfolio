import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 fade-up">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Web3 Frontend Developer
        </h1>
        <p className="text-xl text-gray-300">
          DeFi • Smart Contracts • On-Chain Proofs
        </p>
        <p className="text-gray-400 max-w-xl mx-auto">
          I don&apos;t just say I build — I show you <span className="text-blue-400">real transaction receipts</span> and <span className="text-emerald-400">Arc testnet flows</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link href="/proof" className="btn-primary">
            🔍 See On-Chain Proof →
          </Link>
          <Link href="/projects" className="px-6 py-3 rounded-full font-semibold border border-blue-500/50 hover:bg-blue-500/10 transition">
            📦 Browse Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-full font-semibold border border-emerald-500/50 hover:bg-emerald-500/10 transition">
            ✉️ Hire Me
          </Link>
        </div>
      </div>
    </main>
  );
}