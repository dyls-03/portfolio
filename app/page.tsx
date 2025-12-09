
export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Hello, I&apos;m Dylan.</h1>
      <p className="text-slate-300">
        I&apos;m a developer who likes building things with TypeScript, React and
        messing around with robots and AI.
      </p>

      <p className="text-slate-400">
        Check out my <a href="/projects" className="underline">projects</a>,{" "}
        <a href="/experience" className="underline">experience</a>, or the{" "}
        <a href="/mountaineering" className="underline">
          mountaineering log
        </a>.
      </p>
    </section>
  );
}
