import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <div className="fade-up text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">📦 Projects</h1>
        <p className="text-gray-400 mt-2">Real apps, real code, real impact</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}