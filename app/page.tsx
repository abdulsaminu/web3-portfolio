import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-main min-h-[80vh] flex items-center fade-up">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Web3 <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Frontend</span> Developer
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          DeFi • Smart Contracts • On-Chain Proofs
        </p>
        <p className="text-gray-400 mt-2">
          I don't just say I build — I show you <span className="text-blue-400">real transaction receipts</span> and <span className="text-emerald-400">Arc testnet flows</span>.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href="/proof" className="btn-primary">🔍 See On‑Chain Proof</Link>
          <Link href="/projects" className="px-6 py-3 rounded-full font-semibold border border-blue-500/50 hover:bg-blue-500/10 transition">
            📦 Browse Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-full font-semibold border border-emerald-500/50 hover:bg-emerald-500/10 transition">
            ✉️ Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}