'use client';
import { useState } from 'react';
import Image from 'next/image';

const proofs = [
  {
    title: 'ERC-8183 Job Lifecycle',
    image: '/images/erc8183-job-lifecycle.png',
    description: 'Complete construction milestone escrow flow – client funds, contractor submits, evaluator releases payment.',
    badge: 'Smart Contract',
    category: 'Contract',
    txLink: 'https://testnet.arcscan.app/tx/0x722dc4c246df94c0c6645f34abd8773e514249c9b7cca72f77d8a8d4f3939e00'
  },
  {
    title: 'Archie NFT Mint',
    image: '/images/archie-nft-mint.png',
    description: 'First NFT badge (Token #0) minted to my wallet – proof of building on Arc in May 2026.',
    badge: 'NFT',
    category: 'NFT',
    txLink: 'https://testnet.arcscan.app/address/0x6004b26ea22ecd72cc4bddf0328289b9360d80de'
  },
  {
    title: 'ARCH Token Deployment',
    image: '/images/arch-token-deployment.png',
    description: 'ERC-20 token with 1,000,000 supply deployed via OpenZeppelin.',
    badge: 'Token',
    category: 'Token',
    txLink: 'https://testnet.arcscan.app/address/0x828d7AA5b2A82d130B02E073D88856cAB3Ef6287'
  },
  {
    title: 'SoSo Dashboard Signals',
    image: '/images/soso-dashboard-signals.png',
    description: 'Real-time market intelligence dashboard (off-chain analytics application).',
    badge: 'Dashboard',
    category: 'Dashboard',
    txLink: 'https://soso-dashboard-exc3.vercel.app/'
  },
  {
    title: 'Unified Balance Transfer',
    image: '/images/unified-balance-transfer.png',
    description: 'Cross-chain spend: delegate deposited 2 USDC on Base Sepolia, then spent 0.50 USDC on Arc.',
    badge: 'DeFi',
    category: 'DeFi',
    txLink: 'https://testnet.arcscan.app/tx/0x304e08be04e29460a34eec92d040c413486ec62238b28f2dd88a5e58445b77a8'
  },
];

const categories = ['All', 'Contract', 'NFT', 'Token', 'Dashboard', 'DeFi'];

export default function ProofPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? proofs : proofs.filter(p => p.category === activeTab);

  return (
    <div className="container-main py-6 md:py-10">
      <div className="fade-up text-center mb-8 md:mb-12">
        <h1 className="text-[10px] font-bold tracking-tight">🔍 On‑Chain Proof</h1>
        <p className="section-subtitle">Every card represents a real on-chain interaction, verifiable on the Arc Testnet Explorer.</p>
      </div>

      <div className="tab-bar justify-center">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveTab(cat)} className={`tab-button ${activeTab === cat ? 'active' : ''}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid-tight">
        {filtered.map((proof, idx) => (
          <div key={idx} className="card fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="flex justify-between items-start mb-3">
              <span className="tech-badge">{proof.badge}</span>
            </div>
            <div className="relative h-44 w-full mb-4 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image src={proof.image} alt={proof.title} fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <h3 className="text-[10px] font-bold tracking-tight mb-1 uppercase">{proof.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{proof.description}</p>
            <a
              href={proof.txLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-primary font-medium hover:text-black text-sm"
            >
              📜 {proof.title === 'SoSo Dashboard Signals' ? 'View Dashboard →' : 'View Transaction →'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}