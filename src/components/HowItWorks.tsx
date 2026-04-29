import { MessageCircle, Scissors, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = {
  n: string
  title: string
  body: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    n: '01',
    title: 'Tell the agent what you want',
    body: 'Text, tap, or talk. The booking bot finds your barber, your time, your style.',
    icon: MessageCircle,
  },
  {
    n: '02',
    title: 'Walk in, sit down',
    body: 'Your chair is ready. Your usual is on file. The hot towel is already steaming.',
    icon: Scissors,
  },
  {
    n: '03',
    title: 'Walk out sharper',
    body: 'Loyalty points land in your wallet. Style tips land in your inbox.',
    icon: Sparkles,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative border-y border-brass-300/10 bg-ink-900/60 py-24 md:py-32"
    >
      <div className="container-x">
        <div className="text-center mb-16">
          <p className="eyebrow">// how it works</p>
          <h2 className="display mt-3 text-4xl md:text-5xl text-brass-50">
            Three steps. <span className="text-brass-300">Zero friction.</span>
          </h2>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden md:block"
          >
            <div className="mx-[12.5%] h-px bg-gradient-to-r from-transparent via-brass-300/40 to-transparent" />
          </div>

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li key={step.n} className="relative">
                <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-6">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brass-300/40 bg-ink-950 text-brass-200">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brass-300 px-1.5 font-mono text-[0.65rem] text-ink-950">
                      {step.n}
                    </span>
                  </span>
                  <div>
                    <h3 className="display text-xl text-brass-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brass-50/70 md:max-w-xs md:mx-auto">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
