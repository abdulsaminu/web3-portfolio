export default function ContactPage() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-8">
      <div className="card max-w-lg w-full fade-up">
        <h1 className="text-3xl font-bold mb-1">📬 Let's Build</h1>
        <p className="text-gray-400 mb-6">Web3 projects need on‑chain experts. I'm ready.</p>
        
        <div className="space-y-3 text-sm">
          <div className="bg-black/40 p-3 rounded-xl">
            <p className="text-gray-400 text-xs">Wallet (EVM)</p>
            <p className="font-mono text-sm break-all">0xYourWalletHere... (replace)</p>
          </div>
          <div className="bg-black/40 p-3 rounded-xl">
            <p className="text-gray-400 text-xs">Email</p>
            <p className="font-mono">abdulsaminu@gmail.com</p>
          </div>
          <div className="bg-black/40 p-3 rounded-xl">
            <p className="text-gray-400 text-xs">X (Twitter)</p>
            <p className="font-mono">@abdul_sd01</p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <a href="https://github.com/yourusername" target="_blank" className="btn-primary !py-2 !px-4 text-sm">🐙 GitHub</a>
            <a href="https://twitter.com/abdul_sd01" target="_blank" className="btn-primary !py-2 !px-4 text-sm bg-sky-600 hover:bg-sky-700">🐦 X</a>
            <a href="#" target="_blank" className="btn-primary !py-2 !px-4 text-sm bg-blue-700 hover:bg-blue-800">🔗 LinkedIn</a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Replace wallet, GitHub, LinkedIn with your own.
        </p>
      </div>
    </div>
  );
}