import Loop from "@/components/Loop";
import ProjectsScroller from "@/components/ProjectsScroller";

export default function ExperiencePage() {
  const logos = [
    { src: "https://cdn.simpleicons.org/react/white", alt: "React", href: "https://react.dev/" },
    { src: "https://cdn.simpleicons.org/cplusplus/white", alt: "C++", href: "" },
    { src: "https://cdn.simpleicons.org/docker/white", alt: "Docker", href: "https://www.docker.com/" },
    { src: "https://cdn.simpleicons.org/dotnet/white", alt: ".Net", href: "https://dotnet.microsoft.com/" },
    { src: "https://cdn.simpleicons.org/figma/white", alt: "Figma", href: "https://www.figma.com/" },
    { src: "https://cdn.simpleicons.org/git/white", alt: "Git", href: "https://git-scm.com/" },
    { src: "https://cdn.simpleicons.org/gitea/white", alt: "Gitea", href: "https://gitea.io/en-us/" },
    { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub", href: "https://github.com/" },
    { src: "https://cdn.simpleicons.org/githubcopilot/white", alt: "GitHub Copilot", href: ""},
    { src: "https://cdn.simpleicons.org/html5/white", alt: "HTML", href: "" },
    { src: "https://cdn.simpleicons.org/javascript/white", alt: "JS", href: "" },
    { src: "https://cdn.simpleicons.org/php/white", alt: "PHP", href: "https://www.php.net/" },
    { src: "https://cdn.simpleicons.org/jenkins/white", alt: "Jenkins", href: "https://www.jenkins.io/" },
    { src: "https://cdn.simpleicons.org/ubuntu/white", alt: "Ubuntu", href: "https://ubuntu.com/" },
    { src: "https://cdn.simpleicons.org/unity/white", alt: "Unity", href: "https://unity.com/" },
    { src: "https://cdn.simpleicons.org/blender/white", alt: "Blender", href: "https://www.blender.org/" },
    { src: "https://cdn.simpleicons.org/oculus/white", alt: "Oculus", href: "https://www.oculus.com/" },
    { src: "https://cdn.simpleicons.org/meta/white", alt: "Meta", href: "https://about.facebook.com/meta" }, 
    { src: "https://cdn.simpleicons.org/arduino/white", alt: "Arduino", href: "https://www.arduino.cc/" },
    { src: "https://cdn.simpleicons.org/grafana/white", alt: "Grafana", href: "https://grafana.com/" },
    { src: "https://cdn.simpleicons.org/raspberrypi/white", alt: "Raspberry Pi", href: "https://www.raspberrypi.com/" },
    { src: "https://cdn.simpleicons.org/kubernetes/white", alt: "K8", href: "https://kubernetes.io/" },
    { src: "https://cdn.simpleicons.org/nextdotjs/white", alt: "Next.js", href: "https://nextjs.org/" },
    { src: "https://cdn.simpleicons.org/prisma/white", alt: "Prisma", href: "https://www.prisma.io/" },
    { src: "https://cdn.simpleicons.org/python/white", alt: "Python", href: "https://www.python.org/" },
    { src: "https://cdn.simpleicons.org/sqlite/white", alt: "SQLite", href: "https://sqlite.org/" },
    { src: "https://cdn.simpleicons.org/typescript/white", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
    { src: "https://cdn.simpleicons.org/vercel/white", alt: "Vercel", href: "https://vercel.com/" },
  ];

  const experience = [
    {
      role: "Software Engineer Placement",
      company: "STFC",
      period: "Jul 2023 - Aug 2024",
      bullets: [
        "Built X using Y to support Z workflow.",
        "Improved <thing> by <result> through <approach>.",
        "Worked across <stack/tools> and collaborated via Git & code reviews.",
      ],
      stack: ["Java", "Docker", ".NET", "Mockito"],
      href: "",
    },
    {
      role: "Software Developer Graduate Intern",
      company: "STFC",
      period: "Sep 2025 - Present",
      bullets: [
        "Built X using Y to support Z workflow.",
        "Improved <thing> by <result> through <approach>.",
        "Worked across <stack/tools> and collaborated via Git & code reviews.",
      ],
      stack: ["TypeScript", "Next.js", "Docker"],
      href: "",
    },
    // add more
  ];

  const education = [
    {
      title: "BSc Computer Science",
      org: "Your University",
      period: "2021 - 2025",
      bullets: [
        "Modules: Advanced AI Systems, Robotics, Cybersecurity",
        "Coursework: CNNs, ROS, path planning, backpropagation",
      ],
    },
  ];  

  const techGroups = [
    { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "C#", "C++", "PHP"] },
    { title: "Frameworks", items: ["Next.js", "React", ".NET", "Unity"] },
    { title: "DevOps / Tools", items: ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "Gitea"] },
    { title: "Platforms", items: ["Ubuntu", "Raspberry Pi", "Arduino"] },
    { title: "Design / 3D", items: ["Figma", "Blender"] },
    { title: "Observability", items: ["Grafana"] },
  ];

  const imageLogos = [
      { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
      { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
      { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];

  const projects = [
    {
      title: "Project Tombstone",
      description: "A cliff jumping map to find jumping spots.",
      href: "", // optional
      tags: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "Death-O-Meter",
      description: "Fun website with risk statistics for extreme sports.",
      href: "",
      tags: ["Next.js", "JavaScript"],
    },
    {
      title: "Unity C# Project",
      description: "Interactive 3D/VR work in Unity with C# scripting, tooling, and iteration on gameplay systems.",
      href: "",
      tags: ["Unity", "C#", "3D"],
    },
    // add more
  ];

  
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Experience</h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
          A quick overview of what I've worked on - roles, education, and the tools I use most.
        </p>
      </header>
      
      

      {/* Main content */}
      <div className="space-y-10">

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="space-y-4">
            {education.map((e) => (
              <article
                key={`${e.org}-${e.period}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {e.title} <span className="text-neutral-300">· {e.org}</span>
                    </h3>
                    <p className="text-sm text-neutral-400">{e.period}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-200 list-disc pl-5">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Work</h2>

          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.role} <span className="text-neutral-300">· {item.company}</span>
                    </h3>
                    <p className="text-sm text-neutral-400">{item.period}</p>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-neutral-200 hover:text-white underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : null}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-200 list-disc pl-5">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {item.stack?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <p>
            Refer to my {" "}
            <a href="https://www.linkedin.com/in/dylan-val-b4b491181" className="underline">
              LinkedIn 
            </a>{" "}
            for more information.
          </p>
        </section>


        <div className="p-4 sm:p-6">
          <Loop
            logos={logos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#0b0b0b"
            ariaLabel="Technologies"
          />
        </div>

        <ProjectsScroller projects={projects} />
          
      </div>
    </section>
  );
}