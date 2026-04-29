import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate overflow-hidden bg-ink-950"
    >
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-50" />
      <div className="absolute inset-0 bg-radial-spot" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass-300/10 blur-3xl" />

      <div className="container-x relative pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brass-300/30 bg-ink-900/60 px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.28em] text-brass-200">
            <Sparkles className="h-3.5 w-3.5" />
            New · AI agents now booking
          </span>

          <h1 className="display mt-7 text-[3.25rem] sm:text-7xl md:text-[6.25rem] text-brass-50">
            The sharpest cuts,
            <br />
            <span className="bg-gradient-to-r from-brass-100 via-brass-300 to-brass-200 bg-clip-text text-transparent">
              powered by AI.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base sm:text-lg text-brass-50/70 leading-relaxed">
            A neighborhood barbershop with a digital edge. Our AI agents handle
            the booking, the styling advice, and the loyalty rewards — so our
            barbers can focus on the only thing that matters: your fade.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a href="#book" className="btn-primary group">
              Book a Cut
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#agents" className="btn-ghost">
              Meet the agents
            </a>
          </div>

          {/* Stats row */}
          <dl className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brass-300/15 bg-brass-300/15 sm:grid-cols-4">
            {[
              { k: '12k+', v: 'Cuts shipped' },
              { k: '4.9★', v: 'Avg. rating' },
              { k: '< 30s', v: 'AI booking' },
              { k: '24/7', v: 'Style advice' },
            ].map((s) => (
              <div
                key={s.v}
                className="bg-ink-900/95 px-4 py-5 text-center"
              >
                <dt className="font-display text-2xl text-brass-100">
                  {s.k}
                </dt>
                <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-brass-50/55">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Barber pole stripe */}
      <div className="barber-rule h-1.5 w-full opacity-80 animate-shimmer bg-[length:200%_100%]" />
    </section>
  )
}
