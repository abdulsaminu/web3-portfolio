import Image from "next/image";

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-blue-400 font-medium">
          Verified On-Chain Engineering Work
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Arc Testnet Builder
        </h1>

        <h2 className="text-2xl font-semibold mt-3 text-gray-300">
          ERC-8183 Stablecoin Escrow System
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Built a complete milestone-based escrow system using Arc Testnet,
          Circle developer tools, and USDC-powered transactions. This system
          demonstrates real-world payment automation for construction and freelance workflows.
        </p>

      </section>

      {/* ERC-8183 FLOW */}
      <section className="max-w-5xl mx-auto mt-24">

        <h2 className="text-3xl font-bold mb-10">
          ERC-8183 Escrow Lifecycle
        </h2>

        <div className="space-y-4 text-sm">

          {[
            ["Create Job", "0x722dc4c246df94c0c6645f34abd8773e514249c9b7cca72f77d8a8d4f3939e00"],
            ["Set Budget", "0x37ad57af28dcac869bef49e8e083c36078dda8a7d0deae4ee254f66c838186ba"],
            ["Approve USDC", "0x705417db11aaeab3305235c7e81be356d3db994fabda14b5c5a74ec0f300cf60"],
            ["Fund Escrow", "0xfe51b220c4bde1ab677dffc5f85e5b6f20749cdbf768b24c632bbd39230335d7"],
            ["Submit Deliverable", "0x57184b746a9d1948a14aafa4c416afa4ba41ee7195ff0323bbd9113f7533b3c6"],
            ["Complete Job", "0x1e5f2fa1fbf434641bb1c653e8aae733eb53627f68b5bdcf1761085b09219e04"],
          ].map(([step, hash]) => (
            <div
              key={hash}
              className="border border-gray-800 rounded-xl p-4"
            >
              <p className="font-semibold text-white">{step}</p>
              <p className="text-gray-500 break-all mt-1">{hash}</p>
            </div>
          ))}

        </div>

      </section>

      {/* SCREENSHOT GALLERY */}
      <section className="max-w-6xl mx-auto mt-24">

        <h2 className="text-3xl font-bold mb-10 text-center">
          On-Chain Proof Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "soso-dashboard-home.png",
            "soso-dashboard-signals.png",
            "arc-token-deployment.png",
            "archie-nft-mint.png",
            "erc8183-job-lifecycle.png",
            "unified-balance-deposit.png",
            "unified-balance-transfer.png",
          ].map((img) => (
            <div
              key={img}
              className="border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <Image
                src={`/images/${img}`}
                alt={img}
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          ))}

        </div>

      </section>

      {/* VIDEO */}
      <section className="max-w-5xl mx-auto mt-24">

        <h2 className="text-3xl font-bold mb-10">
          Buildathon Demo
        </h2>

        <div className="aspect-video border border-gray-800 rounded-xl overflow-hidden">

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CDMXOL1fM0c"
            title="Buildathon Demo"
            allowFullScreen
          />

        </div>

      </section>

      {/* REAL-WORLD VALUE */}
      <section className="max-w-5xl mx-auto mt-24">

        <h2 className="text-3xl font-bold mb-6">
          Why This Matters
        </h2>

        <div className="space-y-4 text-gray-400 leading-relaxed">

          <p>
            This system demonstrates how stablecoins (USDC) can replace
            traditional milestone payment systems in construction and freelance work.
          </p>

          <p>
            Instead of volatile crypto assets, Arc Testnet uses stable-value
            gas payments, making blockchain systems practical for real business use.
          </p>

          <p>
            The ERC-8183 lifecycle proves end-to-end automation:
            job creation → escrow funding → deliverable submission → payment release.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-24 text-center">

        <h2 className="text-4xl font-bold">
          Let’s Build Together
        </h2>

        <p className="text-gray-400 mt-6">
          Available for freelance and remote Web3 roles:
          DeFi dashboards, smart contract integration, and stablecoin systems.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-white text-black rounded-lg font-medium"
        >
          Hire Me
        </a>

      </section>

    </main>
  );
}