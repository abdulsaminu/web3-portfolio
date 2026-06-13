import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container-main py-6 md:py-10">
      <div className="fade-up text-center mb-8 md:mb-12">
        <h1 className="section-title">📦 Projects</h1>
        <p className="section-subtitle">Built, deployed, shipped.</p>
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