export default function Services() {
  return (
    <section className="px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold">
          What I Build
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Focused engineering domains where I design and ship production-grade Web3 systems.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* CARD 1 */}
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              DeFi Systems
            </h3>
            <p className="text-gray-400 mt-3 text-sm">
              Real-time dashboards, trading signals, and on-chain analytics systems.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Example: SoSoSignal
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Smart Contract Interfaces
            </h3>
            <p className="text-gray-400 mt-3 text-sm">
              Wallet-connected dApps and frontend layers for EVM-based contracts.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Example: Arc Testnet ERC-8183 Escrow
            </p>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Stablecoin Infrastructure
            </h3>
            <p className="text-gray-400 mt-3 text-sm">
              USDC-based payment flows, escrow logic, and programmable settlement systems.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Example: Circle SDK integrations
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}