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
        <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden bg-gray-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="object-cover w-full h-full hover:scale-105 transition duration-300" />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{description}</p>
      {problem && <p className="text-sm text-orange-300 mb-1"><strong>Problem:</strong> {problem}</p>}
      {solution && <p className="text-sm text-emerald-300 mb-3"><strong>Solution:</strong> {solution}</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            🌐 Live
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            🐙 GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
            🎥 Demo
          </a>
        )}
      </div>
    </div>
  );
}