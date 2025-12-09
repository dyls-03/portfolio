// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p>
          The best way to reach me is via email at{" "}
          <a href="mailto:you@example.com" className="underline">
            you@example.com
          </a>
          .
        </p>
        <p>
          You can also find me on{" "}
          <a href="https://github.com/dyls-03" className="underline">
            GitHub
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/dylan-val-b4b491181" className="underline">
            LinkedIn
          </a>
          .
        </p>
      </section>
    );
  }
  