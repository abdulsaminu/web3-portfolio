import "./globals.css";

export const metadata = {
  title: "Web3 Developer | DeFi & Smart Contract Systems",
  description:
    "Building on-chain applications, DeFi dashboards, and escrow systems with real blockchain execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-950">
          {children}
        </div>
      </body>
    </html>
  );
}