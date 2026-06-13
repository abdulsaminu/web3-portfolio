type Project = {
  title: string;
  description: string;
  image?: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  live?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition">

      {/* IMAGE */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-900 flex items-center justify-center text-gray-600 text-sm">
          No Preview Available
        </div>
      )}

      <div className="p-6">

        {/* TITLE */}
        <h2 className="text-xl font-bold">
          {project.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* PROBLEM */}
        {project.problem && (
          <div className="mt-4">
            <p className="text-xs text-gray-500">Problem</p>
            <p className="text-sm text-gray-300">
              {project.problem}
            </p>
          </div>
        )}

        {/* SOLUTION */}
        {project.solution && (
          <div className="mt-3">
            <p className="text-xs text-gray-500">Solution</p>
            <p className="text-sm text-gray-300">
              {project.solution}
            </p>
          </div>
        )}

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 mt-6 text-sm">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Live →
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub →
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Demo →
            </a>
          )}

        </div>

        {/* TRUST MICRO-LINE */}
        <div className="mt-5 text-xs text-gray-600">
          Verified build • Real system implementation • Production-style architecture
        </div>

      </div>
    </div>
  );
}