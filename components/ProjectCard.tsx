interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export default function ProjectCard({ title, description, technologies, links }: ProjectCardProps) {
  return (
    <div className="card group">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        {links.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            🌐 Live
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            🐙 GitHub
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
            🎥 Demo
          </a>
        )}
      </div>
    </div>
  );
}