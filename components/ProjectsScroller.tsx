"use client";

type Project = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export default function ProjectsScroller({ projects }: { projects: Project[] }) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <p className="hidden sm:block text-sm text-neutral-400">Scroll horizontally →</p>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10" />

        <div
          className="
            flex gap-4 overflow-x-auto pb-2
            snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none]
          "
        >
          {/* hide scrollbar (webkit) */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

          <div className="hide-scrollbar flex gap-4">
            {projects.map((p) => (
              <article
                key={p.title}
                className="
                  snap-start
                  min-w-[260px] sm:min-w-[320px] lg:min-w-[360px]
                  rounded-2xl border border-white/10 bg-white/5
                  p-5 sm:p-6
                  hover:bg-white/10 transition
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>

                  {p.href ? (
                    <a
                      href={p.href}
                      className="text-sm text-neutral-200 hover:text-white underline underline-offset-4 shrink-0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : null}
                </div>

                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>

                {p.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
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
        </div>
      </div>
    </section>
  );
}