export default function TrustStrip() {
  return (
    <section className="px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
          Trusted Stack & Execution Environment
        </p>

        {/* MAIN STRIP */}
        <div className="flex flex-wrap gap-3">

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            Arc Testnet
          </span>

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            ERC-8183 Escrow
          </span>

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            Circle SDK
          </span>

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            Next.js
          </span>

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            TypeScript
          </span>

          <span className="px-3 py-1 text-xs rounded-full border border-gray-800 bg-gray-900 text-gray-300">
            EVM Smart Contracts
          </span>

        </div>

        {/* MICRO CONTEXT */}
        <p className="text-xs text-gray-600 mt-4 max-w-2xl">
          Built systems using production Web3 infrastructure — including escrow workflows,
          DeFi dashboards, and stablecoin transaction layers.
        </p>

      </div>

    </section>
  );
}