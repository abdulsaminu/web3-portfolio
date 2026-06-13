import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold">
          Engineering Case Studies
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          A full breakdown of Web3 systems I’ve built — including DeFi dashboards,
          smart contract interfaces, and stablecoin infrastructure.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

        </div>

      </section>

    </main>
  );
}