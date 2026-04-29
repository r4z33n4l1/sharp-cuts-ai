import { AgentCard } from './AgentCard'
import { agents } from '../content/agents'

export function AgentsGrid() {
  return (
    <section
      id="agents"
      aria-labelledby="agents-heading"
      className="relative py-24 md:py-32"
    >
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">// the roster</p>
            <h2
              id="agents-heading"
              className="display mt-3 text-4xl text-bone md:text-5xl"
            >
              Four agents.
              <br />
              <span className="text-brass">One sharper shop.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/60 md:text-base">
            Each agent is trained on a decade of barbershop know-how — and
            handed the tools to actually do the job, not just chat about it.
          </p>
        </div>

        {/* Plan §7: 1-col mobile / 2-col tablet / 4-col desktop */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <li key={agent.id} className="h-full">
              <AgentCard agent={agent} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
