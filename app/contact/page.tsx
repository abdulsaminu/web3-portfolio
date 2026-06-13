export default function ContactPage() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-12">
      <div className="card max-w-lg w-full fade-up">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">📬 Let's Build</h1>
        <p className="text-gray-500 text-base mb-8">Web3 projects need on‑chain experts. I'm ready.</p>

        <div className="space-y-5">
          {/* Wallet */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Wallet (EVM)</p>
            <p className="font-mono text-sm bg-gray-50 p-3 rounded-lg border border-gray-100 break-all">
              0xFFD3347ca0C3Ba5a104Ed9113C1d7F65d0C85a8A
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
            <p className="text-base font-medium text-gray-800">abdulsaminu@gmail.com</p>
          </div>

          {/* X (Twitter) */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">X (Twitter)</p>
            <p className="text-base font-medium text-gray-800">@abdul_sd01</p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href="https://github.com/abdulsaminu"
              target="_blank"
              className="btn-primary !py-2 !px-5 text-sm"
            >
              🐙 GitHub
            </a>
            <a
              href="https://twitter.com/abdul_sd01"
              target="_blank"
              className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900"
            >
              🐦 X
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahman-saminu-b2948a105/"
              target="_blank"
              className="btn-primary !py-2 !px-5 text-sm bg-gray-800 hover:bg-gray-900"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center border-t border-gray-100 pt-6">
        </p>
      </div>
    </div>
  );
}