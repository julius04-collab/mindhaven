# MindHaven — Day 01/30

Landing page concept for an online therapy platform for busy professionals.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · self-hosted Fraunces + Inter · Unsplash imagery

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

1. Push to GitHub: `git remote add origin <repo-url> && git push -u origin main`
2. Import the repo at vercel.com/new — no settings to change.

## Structure

- `src/app/page.tsx` — landing page (12 sections)
- `src/app/find/` — 4-step therapist matching + demo booking flow (`/find?need=burnout`, `/find?therapist=amara` deep links)
- `src/app/login`, `src/app/legal` — demo Log In and Privacy/Terms pages so no link is dead
- `src/components/` — Nav, sections, Therapists (profile modal), Faq (accordion), Footer
- `src/lib/data.ts` — services, sample therapists, FAQs, image URLs

All therapists, testimonials and prices are fictional samples and are labelled as such on the page.
