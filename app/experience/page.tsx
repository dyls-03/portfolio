// src/app/experience/page.tsx
export default function ExperiencePage() {
    const experience = [
      {
        role: "Software Developer Intern",
        company: "Example Co",
        period: "Jun 2024 – Sep 2024",
        description:
          "Worked on X using Y. Built Z that improved something by N%.",
      },
      // add more
    ];
  
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">Experience</h1>
        <div className="space-y-4">
          {experience.map((item) => (
            <article key={item.role} className="rounded-xl border border-slate-800 p-4">
              <h2 className="text-xl font-medium">
                {item.role} · <span className="text-slate-300">{item.company}</span>
              </h2>
              <p className="text-sm text-slate-400">{item.period}</p>
              <p className="mt-2 text-sm text-slate-200">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
  