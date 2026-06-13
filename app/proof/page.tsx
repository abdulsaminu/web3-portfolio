import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-gray-900">
        <div className="max-w-3xl text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Web3 Frontend Developer
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            I build DeFi dashboards, escrow systems, and wallet-connected applications.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Link className="bg-white text-black px-6 py-3 rounded-lg" href="/proof">
              View Proof
            </Link>

            <Link className="border border-gray-700 px-6 py-3 rounded-lg" href="/projects">
              Projects
            </Link>
          </div>

        </div>
      </section>

      {/* PROOF TEASER */}
      <section className="py-24 px-6 border-b border-gray-900">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            On-chain execution systems
          </h2>

          <p className="text-gray-500">
            Real smart contracts, escrow flows, token deployments, and DeFi dashboards.
          </p>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-4 text-gray-400">

          <p>✔ ERC-8183 Escrow lifecycle implementation</p>
          <p>✔ SoSoSignal real-time DeFi dashboard</p>
          <p>✔ Arc testnet deployments & transactions</p>

        </div>
      </section>

    </main>
  );
}