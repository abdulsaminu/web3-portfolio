export const projects = [
  {
    title: "SoSoSignal — DeFi Intelligence Dashboard",

    description:
      "Real-time DeFi analytics system combining market data, trading signals, and execution insights.",

    image: "/sososignal.png",

    problem:
      "DeFi traders struggle with fragmented data across multiple platforms.",

    solution:
      "Built a unified dashboard aggregating live market data and visualizing actionable trading signals.",

    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "CoinGecko API",
      "Recharts",
      "Vercel",
    ],

    live: "https://soso-dashboard-exc3.vercel.app",
    github: "https://github.com/abdulsaminu/soso-dashboard",
    demo: "https://youtu.be/CDMXOL1fM0c",
  },

  {
    title: "Arc Testnet Escrow System (ERC-8183)",

    description:
      "Milestone-based escrow system enabling structured USDC payments on Arc Testnet.",

    image: "",

    problem:
      "Web3 lacks trustless milestone-based freelance payment systems.",

    solution:
      "Designed ERC-8183 escrow flow with staged funding, approval, and release logic using smart contracts.",

    technologies: [
      "Foundry",
      "TypeScript",
      "Circle SDK",
      "Arc Testnet",
      "ERC-8183",
      "OpenZeppelin",
    ],

    live: "",
    github: "https://github.com/abdulsaminu",
    demo: "",
  },
];