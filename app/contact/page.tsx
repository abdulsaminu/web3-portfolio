export default function ContactPage() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-12">
      <div className="card max-w-md w-full fade-up">
        <h1 className="section-title text-2xl mb-1">📬 Let's Build</h1>
        <p className="text-gray-600 mb-8">Web3 projects need on‑chain experts. I'm ready.</p>

        <div className="space-y-4 text-sm">
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Wallet (EVM)</p>
            <p className="font-mono text-sm break-all">
              0xFFD3347ca0C3Ba5a104Ed9113C1d7F65d0C85a8A
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
            <p className="font-medium">abdulsaminu@gmail.com</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">X (Twitter)</p>
            <p className="font-medium">@abdul_sd01</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a href="https://github.com/abdulsaminu" target="_blank" className="btn-primary !py-2 !px-5 text-sm">
              🐙 GitHub
            </a>
            <a href="https://twitter.com/abdul_sd01" target="_blank" className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900">
              🐦 X
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-saminu-b2948a105/" target="_blank" className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900">
              🔗 LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8 text-center">
        </p>
      </div>
    </div>
  );
}