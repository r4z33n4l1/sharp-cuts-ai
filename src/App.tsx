import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Agents } from './components/Agents'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#agents"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:btn-primary focus:!py-2 focus:!px-4"
      >
        Skip to content
      </a>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Agents />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
