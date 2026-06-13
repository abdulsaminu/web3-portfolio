import Image from 'next/image';

const proofs = [
  {
    title: 'ERC-8183 Job Lifecycle',
    image: '/images/erc8183-job-lifecycle.png',
    description: 'Escrow system for cross-agent payments on Arc testnet.',
    txLink: 'https://arc.arkdev.net/tx/0x123...', // 🔁 REPLACE WITH REAL TX
    badge: 'Smart Contract',
  },
  {
    title: 'Archie NFT Mint',
    image: '/images/archie-nft-mint.png',
    description: 'NFT deployment with on-chain metadata.',
    txLink: 'https://arc.arkdev.net/tx/0x456...',
    badge: 'NFT',
  },
  {
    title: 'ARCH Token Deployment',
    image: '/images/arch-token-deployment.png',
    description: 'ERC-20 token with custom minting logic.',
    txLink: 'https://arc.arkdev.net/tx/0x789...',
    badge: 'Token',
  },
  {
    title: 'SoSo Dashboard Signals',
    image: '/images/soso-dashboard-signals.png',
    description: 'Real-time market intelligence dashboard.',
    txLink: 'https://sosovalue.xyz/...',
    badge: 'Dashboard',
  },
  {
    title: 'Akindo Buildathon Submission',
    image: '/images/akindo-buildathon-submission.png',
    description: '🏆 Prize-winning on-chain agent system – earned real rewards.',
    txLink: 'https://arc.arkdev.net/tx/0xabc...',
    badge: '🏆 Winner',
  },
  {
    title: 'Unified Balance Transfer',
    image: '/images/unified-balance-transfer.png',
    description: 'Cross‑protocol balance aggregation.',
    txLink: 'https://arc.arkdev.net/tx/0xdef...',
    badge: 'DeFi',
  },
];

export default function ProofPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <div className="fade-up text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">🔍 On‑Chain Proof</h1>
        <p className="text-gray-400 mt-2">
          Every card = real transaction. No fakes. No stock photos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {proofs.map((proof, idx) => (
          <div key={idx} className="card fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            {/* badge ribbon (small top-right) */}
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                {proof.badge}
              </span>
            </div>
            <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden border border-gray-700">
              <Image
                src={proof.image}
                alt={proof.title}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-xl font-bold">{proof.title}</h2>
            <p className="text-gray-300 text-sm mt-1">{proof.description}</p>
            <a
              href={proof.txLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-400 text-sm hover:underline"
            >
              📜 View Transaction →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-8">
        🧾 All transactions are verifiable on Arc testnet or respective explorers.<br />
        Questions? Reach me on <a href="https://twitter.com/abdul_sd01" target="_blank" className="text-blue-400">X @abdul_sd01</a> or email <span className="font-mono">abdulsaminu@gmail.com</span>.
      </div>
    </main>
  );
}