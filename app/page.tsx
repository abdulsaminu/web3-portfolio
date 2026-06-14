import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-main min-h-[80vh] flex items-center justify-center fade-up">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          Web3{' '}
          <span className="bg-gradient-to-r from-primary to-lavender bg-clip-text text-transparent">
            Frontend
          </span>{' '}
          Architect
        </h1>
        <p className="text-xl text-gray-600 mt-4 font-medium">
          DeFi • Smart Contracts • On-Chain Proofs
        </p>
        <p className="text-gray-500 mt-2 leading-relaxed">
          I build with receipts. Every line of code is backed by a{' '}
          <span className="text-primary font-medium">real transaction</span> on Arc testnet.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Link href="/proof" className="btn-primary">
            🔍 See On‑Chain Proof
          </Link>
          <Link href="/projects" className="btn-secondary">
            📦 Browse Projects
          </Link>
          <Link href="/contact" className="btn-secondary">
            ✉️ Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}