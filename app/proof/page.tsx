'use client';
import { useState } from 'react';
import Image from 'next/image';

// Your transaction-backed evidence — replace with real tx links
const proofs = [
  { title: 'ERC-8183 Job Lifecycle', image: '/images/erc8183-job-lifecycle.png', description: 'Escrow system for cross-agent payments on Arc testnet.', txLink: 'https://arc.arkdev.net/tx/', badge: 'Smart Contract', category: 'Contract' },
  { title: 'Archie NFT Mint', image: '/images/archie-nft-mint.png', description: 'NFT deployment with on-chain metadata.', txLink: 'https://arc.arkdev.net/tx/', badge: 'NFT', category: 'NFT' },
  { title: 'ARCH Token Deployment', image: '/images/arch-token-deployment.png', description: 'ERC-20 token with custom minting logic.', txLink: 'https://arc.arkdev.net/tx/', badge: 'Token', category: 'Token' },
  { title: 'SoSo Dashboard Signals', image: '/images/soso-dashboard-signals.png', description: 'Real-time market intelligence dashboard.', txLink: 'https://sosovalue.xyz/', badge: 'Dashboard', category: 'Dashboard' },
  { title: 'Akindo Buildathon Submission', image: '/images/akindo-buildathon-submission.png', description: '🏆 Prize-winning on-chain agent system – earned real rewards.', txLink: 'https://arc.arkdev.net/tx/', badge: '🏆 Winner', category: 'Contract' },
  { title: 'Unified Balance Transfer', image: '/images/unified-balance-transfer.png', description: 'Cross‑protocol balance aggregation.', txLink: 'https://arc.arkdev.net/tx/', badge: 'DeFi', category: 'DeFi' },
];

const categories = ['All', 'Contract', 'NFT', 'Token', 'Dashboard', 'DeFi'];

export default function ProofPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? proofs : proofs.filter(p => p.category === activeTab);

  return (
    <div className="container-main py-6 md:py-10">
      <div className="fade-up mb-8 md:mb-12">
        <h1 className="section-title">🔍 On‑Chain Proof</h1>
        <p className="section-subtitle">Every card = real transaction. No fakes.</p>
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
            <p className="text-gray-600 text-sm leading-relaxed">{proof.description}</p>
            <a href={proof.txLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-primary font-medium hover:text-black text-sm">
              📜 View Transaction →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
        All transactions verifiable on Arc testnet. Questions?{' '}
        <a href="https://twitter.com/abdul_sd01" target="_blank" className="text-primary">@abdul_sd01</a>
      </div>
    </div>
  );
}