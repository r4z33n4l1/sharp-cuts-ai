import {
  CalendarClock,
  Wand2,
  BadgeCheck,
  MessageSquareText,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Agent = {
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  badge: string
  bullets: string[]
}

const agents: Agent[] = [
  {
    name: 'Booking Bot',
    tagline: 'Your chair, in 30 seconds.',
    description:
      'Texts you back instantly, finds the next slot with your favorite barber, and remembers your usual.',
    icon: CalendarClock,
    badge: 'SMS · Web · Apple Wallet',
    bullets: [
      'Real-time availability',
      'Auto-rebook on cancel',
      'Two-way SMS reminders',
    ],
  },
  {
    name: 'Style Recommender',
    tagline: 'See it before the snip.',
    description:
      'Upload a selfie and get on-device style suggestions tailored to face shape, hair texture, and lifestyle.',
    icon: Wand2,
    badge: 'Vision · On-device',
    bullets: [
      'Face & hair analysis',
      'Try-on previews',
      'Save looks to your profile',
    ],
  },
  {
    name: 'Loyalty Agent',
    tagline: 'Every fade earns.',
    description:
      'Tracks visits, surfaces perks, and pings you when a free hot-towel shave is on the table.',
    icon: BadgeCheck,
    badge: 'Rewards · Referrals',
    bullets: [
      'Tiered perks',
      'Referral tracking',
      'Birthday surprises',
    ],
  },
  {
    name: 'Concierge',
    tagline: '24/7, always on script.',
    description:
      'Answers product questions, handles after-care advice, and routes anything tricky to a real human barber.',
    icon: MessageSquareText,
    badge: 'Chat · Voice',
    bullets: [
      'Product Q&A',
      'After-care guidance',
      'Human handoff in one tap',
    ],
  },
]

export function Agents() {
  return (
    <section id="agents" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">// the roster</p>
            <h2 className="display mt-3 text-4xl md:text-5xl text-brass-50">
              Four agents.
              <br />
              <span className="text-brass-300">One sharper shop.</span>
            </h2>
          </div>
          <p className="text-brass-50/60 max-w-md text-sm md:text-base leading-relaxed">
            Each agent is trained on a decade of barbershop know-how — and
            handed the tools to actually do the job, not just chat about it.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {agents.map((agent) => (
            <li key={agent.name}>
              <AgentCard agent={agent} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.icon
  return (
    <article
      tabIndex={0}
      className="group relative h-full overflow-hidden rounded-2xl border border-brass-300/15 bg-ink-900/70 p-6 sm:p-8 transition focus-within:border-brass-300/50 hover:border-brass-300/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brass-300/0 via-brass-300/0 to-brass-300/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brass-300/30 bg-ink-800 text-brass-200">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brass-200/60">
          {agent.badge}
        </span>
      </div>

      <h3 className="display mt-6 text-2xl text-brass-50">{agent.name}</h3>
      <p className="mt-1 text-brass-300 text-sm font-medium">
        {agent.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brass-50/70">
        {agent.description}
      </p>

      <ul className="mt-5 space-y-1.5">
        {agent.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-sm text-brass-50/75"
          >
            <span className="h-1 w-1 rounded-full bg-brass-300" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between border-t border-brass-300/10 pt-4">
        <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brass-50/50">
          Always on
        </span>
        <a
          href="#book"
          className="inline-flex items-center gap-1 text-sm text-brass-200 hover:text-brass-100"
        >
          Try it
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}
