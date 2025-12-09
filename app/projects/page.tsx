// src/app/projects/page.tsx
export default function ProjectsPage() {
    const projects = [
      {
        name: "Line-Following Robot",
        tech: ["Python", "ZED Camera", "ROS (if you used it)"],
        description: "Robot that follows a visual line with custom recovery logic.",
        link: "#", // GitHub or demo link
      },
      // more projects
    ];
  
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-800 p-4"
            >
              <h2 className="text-xl font-medium">{project.name}</h2>
              <p className="mt-2 text-sm text-slate-200">{project.description}</p>
              <p className="mt-2 text-xs text-slate-400">
                {project.tech.join(" • ")}
              </p>
              {project.link && (
                <a href={project.link} className="mt-3 inline-block text-sm underline">
                  View project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    );
  }
  