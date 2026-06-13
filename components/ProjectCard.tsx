import { useState } from 'react';

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
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card group">
      {image && !imgError && (
        <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition duration-300"
            onError={() => setImgError(true)}
          />
        </div>
      )}
      {imgError && (
        <div className="h-40 w-full mb-4 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
          🖼️ Image unavailable
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>
      {problem && <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Problem:</span> {problem}</p>}
      {solution && <p className="text-sm text-gray-600 mb-3"><span className="font-semibold">Solution:</span> {solution}</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {live && <a href={live} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-black">🌐 Live</a>}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-black hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        )}
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-black">🎥 Demo</a>}
      </div>
    </div>
  );
}