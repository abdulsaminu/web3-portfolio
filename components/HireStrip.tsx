import Link from "next/link";

export default function HireStrip() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* HEADER */}
      <h2 className="text-3xl font-bold tracking-tight">
        Want Me on Your Team?
      </h2>

      <p className="text-gray-400 mt-3 max-w-2xl">
        I’m available for freelance and remote Web3 roles.
        I build DeFi dashboards, smart contract integrations, and stablecoin systems.
      </p>

      {/* ROLE TAGS */}
      <div className="flex flex-wrap gap-2 mt-6 text-xs">
        {[
          "Web3 Frontend Dev",
          "DeFi Engineer",
          "Smart Contract Integrator",
          "Stablecoin Systems Builder"
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1 border border-gray-800 rounded-full text-gray-400"
          >
            {item}
          </span>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-8 flex-wrap">

        <Link
          href="https://www.upwork.com"
          target="_blank"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          Hire on Upwork
        </Link>

        <Link
          href="https://www.fiverr.com"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          Hire on Fiverr
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          Direct Contact
        </Link>

      </div>

    </section>
  );
}