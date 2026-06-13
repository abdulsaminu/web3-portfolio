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
    link: 'https://arc.arkdev.net/tx/0x722dc4c246df94c0c6645f34abd8773e514249c9b7cca72f77d8a8d4f3939e00',
    linkLabel: '📜 View Create Job Tx'
  },
  {
    title: 'Archie NFT Mint',
    image: '/images/archie-nft-mint.png',
    description: 'First NFT badge (Token #0) minted to my wallet – proof of building on Arc.',
    badge: 'NFT',
    category: 'NFT',
    link: 'https://arc.arkdev.net/address/0x6004b26ea22ecd72cc4bddf0328289b9360d80de',
    linkLabel: '🖼️ View NFT Contract'
  },
  {
    title: 'ARCH Token Deployment',
    image: '/images/arch-token-deployment.png',
    description: 'ERC-20 token with 1,000,000 supply deployed via OpenZeppelin.',
    badge: 'Token',
    category: 'Token',
    link: 'https://arc.arkdev.net/address/0x828d7AA5b2A82d130B02E073D88856cAB3Ef6287',
    linkLabel: '💰 View Token Contract'
  },
  {
    title: 'SoSo Dashboard Signals',
    image: '/images/soso-dashboard-signals.png',
    description: 'Real-time market intelligence dashboard – off‑chain analytics tool.',
    badge: 'Dashboard',
    category: 'Dashboard',
    link: 'https://sosovalue.xyz/',
    linkLabel: '📊 Open Dashboard'
  },
  {
    title: 'Unified Balance Transfer',
    image: '/images/unified-balance-transfer.png',
    description: 'Cross‑chain spend: delegate deposited 2 USDC on Base Sepolia, then spent 0.50 USDC on Arc.',
    badge: 'DeFi',
    category: 'DeFi',
    link: 'https://arc.arkdev.net/tx/0x304e08be04e29460a34eec92d040c413486ec62238b28f2dd88a5e58445b77a8',
    linkLabel: '🔁 View Spend Transaction'
  }
];

const categories = ['All', 'Contract', 'NFT', 'Token', 'Dashboard', 'DeFi'];

export default function ProofPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? proofs : proofs.filter(p => p.category === activeTab);

  return (
    <div className="container-main py-6 md:py-10">
      <div className="fade-up mb-8 md:mb-12">
        <h1 className="section-title">🔍 On‑Chain Proof</h1>
        <p className="section-subtitle">Every card leads to a verifiable on‑chain record.</p>
      </div>

      <div className="tab-bar">
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
            <h3 className="text-xl font-bold tracking-tight mb-1">{proof.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">{proof.description}</p>
            <a
              href={proof.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-primary font-medium hover:text-black text-sm"
            >
              {proof.linkLabel} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}