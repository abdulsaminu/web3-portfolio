import { projects } from "@/data/projects";

export default function ProjectPreview() {
  return (
    <section className="px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold">
          Selected Case Studies
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl">
          A small set of production-style systems demonstrating DeFi engineering, smart contract integration, and stablecoin workflows.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {projects.slice(0, 2).map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition"
            >

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
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

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* FOOTER SIGNAL */}
              <p className="text-xs text-gray-600 mt-5">
                Built with production-level Web3 architecture patterns
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}