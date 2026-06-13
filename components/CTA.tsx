export default function CTA() {
  return (
    <section className="px-6 py-24 border-t border-gray-900 text-center">

      <div className="max-w-3xl mx-auto">

        {/* HEADLINE */}
        <h2 className="text-3xl font-bold">
          Let’s Build Something Production-Ready
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-4">
          I design and ship Web3 systems including DeFi dashboards, smart contract interfaces,
          and stablecoin infrastructure. Focused on execution, not prototypes.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="/proof"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
          >
            On-Chain Proof
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
          >
            Contact Me
          </a>

        </div>

        {/* MICRO TRUST LINE */}
        <p className="mt-12 text-xs text-gray-600">
          Available for freelance • Remote Web3 roles • Contract-based engineering work
        </p>

      </div>

    </section>
  );
}