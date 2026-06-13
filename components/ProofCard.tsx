type Proof = {
  title?: string;
  description?: string;
};

export default function ProofCard({ proof }: { proof?: Proof }) {
  if (!proof) {
    return null;
  }

  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">

      <h2 className="text-xl font-bold">
        {proof.title || "Untitled Proof"}
      </h2>

      <p className="text-gray-400 mt-3 leading-relaxed">
        {proof.description || "No description available."}
      </p>

      <div className="mt-5 text-xs text-gray-600">
        Verified Web3 execution • On-chain validated system
      </div>

    </div>
  );
}