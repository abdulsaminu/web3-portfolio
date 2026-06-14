export default function ContactPage() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-12">
      <div className="card max-w-lg w-full fade-up bg-white border border-gray-200 bg-opacity-10 backdrop-blur-sm">
        <h1 className="text-[10px] font-bold mb-4 tracking-tight text-white">📬 Let's Build</h1>

        <div className="space-y-5">
          <div>
            <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">Wallet (EVM)</p>
            <p className="font-mono text-sm text-gray-200 bg-black/30 p-3 rounded-lg border border-gray-700 break-all">
              0xFFD3347ca0C3Ba5a104Ed9113C1d7F65d0C85a8A
            </p>
          </div>
          <div>
            <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">Email</p>
            <p className="text-base font-medium text-white">abdulsaminu@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <a href="https://github.com/abdulsaminu" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 hover:text-white transition text-sm font-medium border border-gray-600 hover:border-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
            <a href="https://twitter.com/abdul_sd01" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 hover:text-white transition text-sm font-medium border border-gray-600 hover:border-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              X
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-saminu-b2948a105/" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#0A66C2] hover:text-[#6B9FFF] transition text-sm font-medium border border-gray-600 hover:border-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8 text-center border-t border-gray-800 pt-6">All links are real – let’s connect.</p>
      </div>
    </div>
  );
}