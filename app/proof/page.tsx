'use client';
import { useState } from 'react';
import Image from 'next/image';

const proofs = [
  { title: 'ERC-8183 Job Lifecycle', image: '/images/erc8183-job-lifecycle.png', description: 'Escrow system for cross-agent payments on Arc testnet.', txLink: '#', badge: 'Smart Contract', category: 'Contract' },
  { title: 'Archie NFT Mint', image: '/images/archie-nft-mint.png', description: 'NFT deployment with on-chain metadata.', txLink: '#', badge: 'NFT', category: 'NFT' },
  { title: 'ARCH Token Deployment', image: '/images/arch-token-deployment.png', description: 'ERC-20 token with custom minting logic.', txLink: '#', badge: 'Token', category: 'Token' },
  { title: 'SoSo Dashboard Signals', image: '/images/soso-dashboard-signals.png', description: 'Real-time market intelligence dashboard.', txLink: '#', badge: 'Dashboard', category: 'Dashboard' },
  { title: 'Akindo Buildathon Submission', image: '/images/akindo-buildathon-submission.png', description: '🏆 Prize-winning on-chain agent system – earned real rewards.', txLink: '#', badge: '🏆 Winner', category: 'Contract' },
  { title: 'Unified Balance Transfer', image: '/images/unified-balance-transfer.png', description: 'Cross‑protocol balance aggregation.', txLink: '#', badge: 'DeFi', category: 'DeFi' },
];

const categories = ['All', 'Contract', 'NFT', 'Token', 'Dashboard', 'DeFi'];

export default function ProofPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? proofs : proofs.filter(p => p.category === activeTab);

  return (
    <div className="container-main py-6">
      <div className="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold">🔍 On‑Chain Proof</h1>
        <p className="text-gray-400 mt-1 mb-4">Every card = real transaction. No fakes.</p>
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
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">{proof.badge}</span>
            </div>
            <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden border border-gray-700">
              <Image src={proof.image} alt={proof.title} fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <h3 className="text-xl font-bold">{proof.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{proof.description}</p>
            <a href={proof.txLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 text-sm hover:underline">
              📜 View Transaction →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-800">
        All transactions verifiable on Arc testnet. <a href="https://twitter.com/abdul_sd01" target="_blank" className="text-blue-400">@abdul_sd01</a>
      </div>
    </div>
  );
}