import { MapPin, Phone, Mail, Scissors } from 'lucide-react'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  )
}
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c.5 2.5 2.5 4 5 4" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brass/10 bg-ink">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-brass/40 text-brass">
                <Scissors className="h-4 w-4 -rotate-12" />
              </span>
              <span className="font-display text-xl tracking-[0.18em] text-bone">
                SHARP&nbsp;/&nbsp;CUTS
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-bone/60 leading-relaxed">
              A barbershop for the algorithm age. Old-school chairs, new-school
              agents, hot towels either way.
            </p>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <ul className="mt-4 space-y-2.5 text-sm text-bone/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brass" />
                221B Brick Lane, NYC
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brass" />
                (555) 555-1234
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brass" />
                hello@sharpcuts.ai
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Follow</p>
            <ul className="mt-4 flex gap-3">
              {[
                { Icon: InstagramIcon, label: 'Instagram', href: '#' },
                { Icon: XIcon, label: 'X', href: '#' },
                { Icon: TikTokIcon, label: 'TikTok', href: '#' },
              ].map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-brass/20 text-brass transition hover:border-brass/60 hover:text-bone"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-bone/40 leading-relaxed">
              Mon–Sat 9a–8p
              <br />
              Sun 10a–5p
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-brass/10 pt-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone/40">
            © {year} Sharp/Cuts AI · Trim with us
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-brass/60">
            Built with React · Vite · Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
