import Link from "next/link";
import logsRaw from "@/data/logs.json";

type LogLevel = "INFO" | "SUCCESS" | "WARN" | "ERROR";

type LogEntry = {
  id: string;
  date: string;
  level: LogLevel;
  title: string;
  shortDescription: string;
  tags?: string[];
};

function levelStyles(level: LogLevel) {
  switch (level) {
    case "SUCCESS":
      return "text-emerald-300 border-emerald-300/30 bg-emerald-300/10";
    case "WARN":
      return "text-amber-300 border-amber-300/30 bg-amber-300/10";
    case "ERROR":
      return "text-red-300 border-red-300/30 bg-red-300/10";
    default:
      return "text-sky-300 border-sky-300/30 bg-sky-300/10";
  }
}

function fmt(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d).replace(",", "");
}

export default function LogsPage() {
  const logs = (logsRaw as LogEntry[])
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Logs</h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
          A life diary, formatted like system output. Newest entries first.
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-xs text-neutral-400 font-mono">~/life/logs</div>
          <div className="w-[52px]" />
        </div>

        <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed">
          {logs.map((entry) => (
            <div key={entry.id} className="py-4 border-b border-white/5 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-neutral-500">[{fmt(entry.date)}]</span>

                  <span
                    className={[
                      "inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-xs",
                      levelStyles(entry.level),
                    ].join(" ")}
                  >
                    {entry.level}
                  </span>

                  <span className="text-neutral-200">
                    <span className="text-neutral-500">event:</span> {entry.title}
                  </span>
                </div>

                <Link
                  href={`/logs/${entry.id}`}
                  className="text-xs text-orange-300 hover:text-orange-200 underline underline-offset-4 w-fit"
                >
                  Expand
                </Link>
              </div>

              <div className="mt-2 text-neutral-300">
                <span className="text-neutral-500">msg:</span> {entry.shortDescription}
              </div>

              {entry.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}