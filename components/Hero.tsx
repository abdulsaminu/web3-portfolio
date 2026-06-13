export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl font-bold tracking-tight">
        Web3 Frontend Engineer
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed">
        I design and build production DeFi interfaces, smart contract systems, and
        stablecoin payment flows using React, TypeScript, and EVM tooling.
      </p>

      <p className="mt-5 text-xs text-gray-600">
        Arc Testnet • ERC-8183 • Circle SDK • Next.js • TypeScript
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a href="/projects" className="px-6 py-3 bg-white text-black rounded-lg font-medium">
          View Projects
        </a>

        <a href="/proof" className="px-6 py-3 border border-gray-700 rounded-lg">
          On-Chain Proof
        </a>

        <a href="/contact" className="px-6 py-3 border border-gray-700 rounded-lg">
          Contact Me
        </a>
      </div>

    </section>
  );
}