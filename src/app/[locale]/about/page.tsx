import { T } from "gt-next";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
          <T>About this demo</T>
        </h2>
        <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
          <T>
            This application demonstrates locale-based URL routing using
            General Translation&apos;s Next.js middleware. Every page lives under a
            dynamic [locale] segment, and translations are bundled locally for
            fast, reliable delivery.
          </T>
        </p>
      </div>

      <div className="space-y-6">
        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Local translations</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              Translation files are generated at build time using the GT CLI
              and committed to the repository. This means no runtime API calls
              and no external dependencies — translations load instantly from
              static JSON files.
            </T>
          </p>
        </section>

        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Multi-page support</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              Navigate between Home, About, and Features to see that each page
              maintains the correct locale prefix. The middleware ensures
              consistent routing across the entire application without any
              per-page configuration.
            </T>
          </p>
        </section>
      </div>
    </main>
  );
}
