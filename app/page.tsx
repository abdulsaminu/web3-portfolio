import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import ProjectPreview from "@/components/ProjectPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />
      <TrustStrip />
      <Services />
      <ProjectPreview />
      <CTA />

    </main>
  );
}