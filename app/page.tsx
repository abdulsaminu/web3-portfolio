import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <div className="max-w-4xl">

          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Web3 Developer • DeFi Systems Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            I build{" "}
            <span className="text-white/80">
              on-chain financial systems
            </span>{" "}
            that actually execute value.
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            DeFi dashboards, ERC-8183 escrow systems, wallet integrations,
            and real-time blockchain applications built with production-grade architecture.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Link
              href="/proof"
              className="px-6 py-3 bg-white text-black rounded-xl hover:opacity-90 transition"
            >
              View Execution Proof
            </Link>

            <Link
              href="/projects"
              className="px-6 py-3 border border-white/15 rounded-xl hover:border-white/30 transition"
            >
              Explore Projects
            </Link>
          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-white/10 max-w-5xl mx-auto" />

      {/* VALUE SECTION */}
      <section className="py-28 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          What I specialize in
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-400">

          <div className="border border-white/10 p-6 rounded-xl">
            DeFi dashboards with live market intelligence
          </div>

          <div className="border border-white/10 p-6 rounded-xl">
            Smart contract UI + wallet-connected systems
          </div>

          <div className="border border-white/10 p-6 rounded-xl">
            Stablecoin + escrow execution flows (ERC-8183)
          </div>

        </div>
      </section>

      {/* PROOF TEASER */}
      <section className="py-28 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          Real on-chain execution
        </h2>

        <p className="text-gray-400">
          Every system is backed by deployed contracts, transactions, and live
          blockchain activity — not mock projects.
        </p>
      </section>

    </main>
  );
}