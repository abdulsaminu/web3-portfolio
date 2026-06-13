import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container-main py-6">
      <div className="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold">📦 Projects</h1>
        <p className="text-gray-400 mt-1 mb-4">Real apps, real code, real impact</p>
      </div>

      <div className="grid-tight">
        {projects.map((project, idx) => (
          <div key={idx} className="fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}