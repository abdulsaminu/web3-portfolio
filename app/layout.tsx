import "./globals.css";

export const metadata = {
  title: "Web3 Portfolio | DeFi & Smart Contract Developer",
  description:
    "Web3 frontend developer building DeFi dashboards, escrow systems, and on-chain applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}