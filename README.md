# Sharp/Cuts AI — Landing Page

Marketing site for Sharp/Cuts, a fictional barbershop that sells AI agents
(booking, style recommendations, loyalty, concierge).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v3
- lucide-react (icons)

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## Structure

```
src/
  App.tsx                     # composes the page
  index.css                   # Tailwind layers + custom utilities
  components/
    Nav.tsx                   # sticky nav with mobile sheet
    Hero.tsx                  # hero w/ stats + barber-pole rule
    Agents.tsx                # 4 AI agent cards
    HowItWorks.tsx            # 3-step explainer
    CTA.tsx                   # closing call-to-action
    Footer.tsx                # contact + social placeholders
```

## Deployment

Deployed to Vercel as a static SPA — no env vars required.
