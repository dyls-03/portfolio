import Loop from "@/components/Loop";

export default function ExperiencePage() {
    const logos = [
        { src: "https://cdn.simpleicons.org/react/white", alt: "React", href: "https://react.dev/" },
        { src: "https://cdn.simpleicons.org/cplusplus/white", alt: "C++", href: "" },
        { src: "https://cdn.simpleicons.org/docker/white", alt: "Docker", href: "https://www.docker.com/" },
        { src: "https://cdn.simpleicons.org/dotnet/white", alt: ".Net", href: "" },
        { src: "https://cdn.simpleicons.org/git/white", alt: "Git", href: "" },
        { src: "https://cdn.simpleicons.org/gitea/white", alt: "Gitea", href: "" },
        { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub", href: "https://github.com/" },
        { src: "https://cdn.simpleicons.org/githubcopilot/white", alt: "GitHub Copilot", href: "" },
        { src: "https://cdn.simpleicons.org/html5/white", alt: "HTML", href: "" },
        { src: "https://cdn.simpleicons.org/javascript/white", alt: "JS", href: "" },
        { src: "https://cdn.simpleicons.org/kubernetes/white", alt: "K8", href: "" },
        { src: "https://cdn.simpleicons.org/nextdotjs/white", alt: "Next.js", href: "https://nextjs.org/" },
        { src: "https://cdn.simpleicons.org/prisma/white", alt: "Prisma", href: "https://www.prisma.io/" },
        { src: "https://cdn.simpleicons.org/python/white", alt: "Python", href: "" },
        { src: "https://cdn.simpleicons.org/sqlite/white", alt: "SQLite", href: "" },
        { src: "https://cdn.simpleicons.org/typescript/white", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
        { src: "https://cdn.simpleicons.org/vercel/white", alt: "Vercel", href: "https://vercel.com/" },



      ];

    const experience = [
      {
        role: "Software Developer Intern",
        company: "Example Co",
        period: "Jun 2024 - Sep 2024",
        description:
          "Worked on X using Y. Built Z that improved something by N%.",
      },
      // add more
    ];

    const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
      ];
  
    return (
        <section className="space-y-10">
        <h1 className="text-3xl font-semibold">Experience</h1>

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
        ariaLabel="Technology partners"
          />
          </section>
      
    );
  }
  