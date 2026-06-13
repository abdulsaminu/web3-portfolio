import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24 max-w-3xl mx-auto text-center">

        {/* HEADER */}
        <h1 className="text-4xl font-bold">
          Let’s Build Something Real
        </h1>

        <p className="text-gray-400 mt-4 leading-relaxed">
          I work on production Web3 systems — DeFi dashboards, smart contract interfaces,
          and stablecoin infrastructure. Open to freelance, remote roles, and contract work.
        </p>

        {/* CONTACT BLOCK */}
        <div className="mt-12 space-y-4 text-gray-300">

          <p>
            GitHub: https://github.com/abdulsaminu
          </p>

          <p>
            X (Twitter): @abdul_sd01
          </p>

          <p>
            Focus: Arc Testnet • ERC-8183 • Circle SDK • DeFi Engineering
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>

          <a
            href="/projects"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
          >
            View Work
          </a>

        </div>

        {/* MICRO TRUST LINE */}
        <p className="mt-14 text-xs text-gray-600">
          Response time: usually within 24–48 hours
        </p>

      </section>

    </main>
  );
}