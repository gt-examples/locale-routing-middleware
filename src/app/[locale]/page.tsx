import { T } from "gt-next";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
          <T>Automatic locale routing</T>
        </h2>
        <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
          <T>
            This demo shows how createNextMiddleware automatically detects the
            user&apos;s preferred language and routes them to the correct locale
            path. Try switching languages with the selector above, or navigate
            between pages to see locale-prefixed URLs in action.
          </T>
        </p>
      </div>

      <div className="space-y-6">
        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>How it works</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              The middleware intercepts every request and checks the
              Accept-Language header, cookies, and URL path to determine the
              best locale. If no locale segment is present, it redirects to
              the appropriate one — for example, /about becomes /fr/about for
              a French-speaking visitor.
            </T>
          </p>
        </section>

        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Zero configuration</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              A single call to createNextMiddleware() is all you need. It reads
              your supported locales from gt.config.json and handles detection,
              redirects, and cookie persistence automatically.
            </T>
          </p>
        </section>
      </div>
    </main>
  );
}
