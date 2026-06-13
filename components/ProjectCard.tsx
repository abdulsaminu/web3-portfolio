interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  live?: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  problem, 
  solution, 
  technologies, 
  live, 
  github, 
  demo 
}: ProjectCardProps) {
  return (
    <div className="card group">
      {image && (
        <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-gray-900 border border-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="object-cover w-full h-full hover:scale-105 transition duration-300" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm mb-3 leading-relaxed">{description}</p>
      {problem && <p className="text-sm text-gray-500 mb-1"><span className="font-semibold text-gray-300">Problem:</span> {problem}</p>}
      {solution && <p className="text-sm text-gray-500 mb-3"><span className="font-semibold text-gray-300">Solution:</span> {solution}</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {live && <a href={live} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:text-white">🌐 Live</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">🐙 GitHub</a>}
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:text-white">🎥 Demo</a>}
      </div>
    </div>
  );
}