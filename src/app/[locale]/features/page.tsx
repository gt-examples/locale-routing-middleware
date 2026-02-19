import { T } from "gt-next";

export default function Features() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
          <T>Key features</T>
        </h2>
        <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
          <T>
            The locale routing middleware provides several capabilities out of
            the box, requiring minimal setup from the developer.
          </T>
        </p>
      </div>

      <div className="space-y-6">
        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Automatic language detection</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              The middleware reads the browser&apos;s Accept-Language header and
              matches it against your configured locales. First-time visitors
              are automatically redirected to their preferred language.
            </T>
          </p>
        </section>

        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Cookie persistence</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              Once a visitor selects a language, the choice is saved in a
              cookie. On subsequent visits, the middleware respects this
              preference and routes accordingly.
            </T>
          </p>
        </section>

        <section className="border border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">
            <T>Locale selector integration</T>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T>
              The built-in LocaleSelector component lets users switch languages
              at any time. It updates the URL path and cookie simultaneously,
              providing a seamless experience across all pages.
            </T>
          </p>
        </section>
      </div>
    </main>
  );
}
