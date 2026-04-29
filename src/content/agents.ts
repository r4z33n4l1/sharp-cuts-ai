import {
  CalendarClock,
  Wand2,
  BadgeCheck,
  MessageSquareText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Agent = {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  badge: string
  bullets: string[]
}

export const agents: Agent[] = [
  {
    id: 'booking',
    name: 'Booking Bot',
    tagline: 'Your chair, in 30 seconds.',
    description:
      'Texts you back instantly, finds the next slot with your favorite barber, and remembers your usual.',
    icon: CalendarClock,
    badge: 'SMS · Web',
    bullets: ['Real-time availability', 'Auto-rebook on cancel', 'SMS reminders'],
  },
  {
    id: 'style',
    name: 'Style Recommender',
    tagline: 'See it before the snip.',
    description:
      'Upload a selfie, get on-device suggestions tailored to face shape, hair texture, and lifestyle.',
    icon: Wand2,
    badge: 'Vision · On-device',
    bullets: ['Face & hair analysis', 'Try-on previews', 'Save looks'],
  },
  {
    id: 'loyalty',
    name: 'Loyalty Agent',
    tagline: 'Every fade earns.',
    description:
      'Tracks visits, surfaces perks, and pings you when a free hot-towel shave is on the table.',
    icon: BadgeCheck,
    badge: 'Rewards',
    bullets: ['Tiered perks', 'Referral tracking', 'Birthday surprises'],
  },
  {
    id: 'concierge',
    name: 'Concierge',
    tagline: '24/7, always on script.',
    description:
      'Answers product questions, handles after-care advice, and routes anything tricky to a real human barber.',
    icon: MessageSquareText,
    badge: 'Chat · Voice',
    bullets: ['Product Q&A', 'After-care guidance', 'Human handoff'],
  },
]
