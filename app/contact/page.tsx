export default function ContactPage() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-12">
      <div className="card max-w-md w-full fade-up">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">📬 Let's Build</h1>
        <p className="text-gray-400 mb-8">Web3 projects need on‑chain experts. I'm ready.</p>
        
        <div className="space-y-4 text-sm">
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <p className="text-gray-500 text-xs uppercase tracking-wide">Wallet (EVM)</p>
            <p className="font-mono text-sm break-all text-gray-300">0xYourWalletHere... (replace)</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <p className="text-gray-500 text-xs uppercase tracking-wide">Email</p>
            <p className="font-medium">abdulsaminu@gmail.com</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <p className="text-gray-500 text-xs uppercase tracking-wide">X (Twitter)</p>
            <p className="font-medium">@abdul_sd01</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a href="#" target="_blank" className="btn-primary !py-2 !px-5 text-sm">🐙 GitHub</a>
            <a href="https://twitter.com/abdul_sd01" target="_blank" className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900">🐦 X</a>
            <a href="#" target="_blank" className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900">🔗 LinkedIn</a>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-8 text-center">
          Replace wallet, GitHub, LinkedIn with your own.
        </p>
      </div>
    </div>
  );
}