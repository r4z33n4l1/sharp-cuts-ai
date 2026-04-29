import { ArrowUpRight } from 'lucide-react'
import type { Agent } from '../content/agents'

export function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.icon
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-char/70 p-6 transition hover:border-brass/40 has-[:focus-visible]:border-brass/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brass"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brass/0 via-brass/0 to-brass/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brass/30 bg-char text-brass">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-brass/60">
          {agent.badge}
        </span>
      </div>

      <h3 className="display mt-6 text-2xl text-bone">{agent.name}</h3>
      <p className="mt-1 text-sm font-medium text-brass">{agent.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-bone/70">
        {agent.description}
      </p>

      <ul className="mt-5 space-y-1.5">
        {agent.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-sm text-bone/75"
          >
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-brass"
            />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between border-t border-line pt-4">
        <span className="text-[0.7rem] uppercase tracking-[0.22em] text-blade">
          Always on
        </span>
        <a
          href="#book"
          className="inline-flex items-center gap-1 text-sm text-brass hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded"
        >
          Try it
          <ArrowUpRight
            className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}
