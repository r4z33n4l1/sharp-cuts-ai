import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="book" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brass-300/20 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 p-10 sm:p-16 text-center grain">
          <div className="pointer-events-none absolute inset-0 bg-radial-spot" />
          <div className="relative">
            <p className="eyebrow">// book your chair</p>
            <h2 className="display mt-3 text-4xl md:text-6xl text-brass-50">
              Ready for your sharpest cut yet?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-brass-50/70">
              Open chairs in the next hour. Tap below — the booking bot takes
              it from here.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="btn-primary group">
                Get started
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="tel:+15555551234" className="btn-ghost">
                Call (555) 555-1234
              </a>
            </div>

            <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-brass-200/60">
              No app needed · Open 7 days · Walk-ins welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
