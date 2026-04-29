import { useEffect, useState } from 'react'
import { Scissors } from 'lucide-react'

const links = [
  { href: '#agents', label: 'Agents' },
  { href: '#how', label: 'How it works' },
  { href: '#book', label: 'Book' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-ink/80 backdrop-blur border-b border-brass/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-brass/40 text-brass group-hover:border-brass group-hover:text-bone transition">
            <Scissors className="h-4 w-4 -rotate-12" />
          </span>
          <span className="font-display text-xl tracking-[0.18em] text-bone">
            SHARP&nbsp;/&nbsp;CUTS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-bone/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-bone transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brass hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn-primary !py-2 !px-5">
            Book a Cut
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-brass/30 text-brass"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={[
                'block h-px w-5 bg-brass transition',
                open && 'translate-y-[7px] rotate-45',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-5 bg-brass transition',
                open && 'opacity-0',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-5 bg-brass transition',
                open && '-translate-y-[7px] -rotate-45',
              ].join(' ')}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300',
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="container-x pb-6 pt-2 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-bone/90 hover:bg-char"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Book a Cut
          </a>
        </div>
      </div>
    </header>
  )
}
