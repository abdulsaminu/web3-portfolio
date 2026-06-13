import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container-main py-10">
      <div className="fade-up mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">📦 Projects</h1>
        <p className="text-gray-400 text-lg mt-1">Built, deployed, shipped.</p>
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