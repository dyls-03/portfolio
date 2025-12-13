import Link from "next/link";
import { notFound } from "next/navigation";
import logsRaw from "@/data/logs.json";

type LogLevel = "INFO" | "SUCCESS" | "WARN" | "ERROR";

type LogEntryFull = {
  id: string;
  date: string;
  level: LogLevel;
  title: string;
  shortDescription: string;
  longDescription?: string;
  highlights?: string[];
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

export function generateStaticParams() {
  const logs = logsRaw as { id: string }[];
  return logs.map((l) => ({ id: l.id }));
}

const normalize = (s: unknown) => String(s ?? "").trim().toLowerCase();

export default async function LogDetailPage({params,}: {params: Promise<{ id: string }>;}) 
{
  const { id } = await params; // ✅ unwrap params
  const requestedId = decodeURIComponent(id);

  const logs = logsRaw as LogEntryFull[];
  const entry = logs.find((l) => l.id === requestedId);

    if (!entry) notFound();

  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/logs"
          className="text-sm text-neutral-300 hover:text-white underline underline-offset-4"
        >
          ← Back to logs
        </Link>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-xs text-neutral-400 font-mono">~/life/logs/{entry.id}</div>
          <div className="w-[52px]" />
        </div>

        <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed">
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

          <div className="mt-3 text-neutral-300">
            <span className="text-neutral-500">msg:</span> {entry.shortDescription}
          </div>

          {entry.highlights?.length ? (
            <div className="mt-5 text-neutral-300">
              <div className="text-neutral-500">highlights:</div>
              <ul className="mt-2 space-y-1">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-neutral-600">-</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {entry.longDescription ? (
            <div className="mt-5 text-neutral-300">
              <div className="text-neutral-500">details:</div>
              <p className="mt-2 whitespace-pre-wrap">{entry.longDescription}</p>
            </div>
          ) : null}

          {entry.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}