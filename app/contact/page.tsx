export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="card max-w-lg w-full text-center fade-up">
        <h1 className="text-3xl font-bold mb-2">📬 Let&apos;s Build</h1>
        <p className="text-gray-400 mb-6">Web3 projects need on‑chain experts. I&apos;m ready.</p>
        
        <div className="space-y-4 text-left">
          <div className="bg-black/30 p-3 rounded-xl">
            <p className="text-sm text-gray-400">Wallet (EVM)</p>
            <p className="font-mono text-sm break-all">0xYourWalletHere... (replace with real address)</p>
          </div>
          <div className="bg-black/30 p-3 rounded-xl">
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-mono">abdulsaminu@gmail.com</p>
          </div>
          <div className="bg-black/30 p-3 rounded-xl">
            <p className="text-sm text-gray-400">X (Twitter)</p>
            <p className="font-mono">@abdul_sd01</p>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://github.com/yourusername" target="_blank" className="btn-primary !px-4">🐙 GitHub</a>
            <a href="https://twitter.com/abdul_sd01" target="_blank" className="btn-primary !px-4 bg-sky-600 hover:bg-sky-700">🐦 X</a>
            <a href="https://linkedin.com/in/yourname" target="_blank" className="btn-primary !px-4 bg-blue-700 hover:bg-blue-800">🔗 LinkedIn</a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          📍 Replace wallet address, GitHub, and LinkedIn links with your own.
        </p>
      </div>
    </main>
  );
}