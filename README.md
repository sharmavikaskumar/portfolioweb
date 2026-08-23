# Vikas — Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/layout.tsx` — fonts (Space Grotesk + Inter) and page metadata
- `app/page.tsx` — ties the tabs (About me / Resume / Work) together
- `components/Hero.tsx` — top hero block with the stacked "FULL STACK DEV" signature
- `components/TabNav.tsx` — sticky tab navigation
- `components/AboutSection.tsx`, `ResumeSection.tsx`, `WorkSection.tsx` — the three tabs

## Before you deploy — placeholders to fill in

- [ ] `components/AboutSection.tsx` — real email, LinkedIn, GitHub links
- [ ] `components/ResumeSection.tsx` — real education entry (year, degree, institution)
- [ ] `components/TabNav.tsx` — real GitHub link, and add an actual `vikas-resume.pdf` to `public/`
- [ ] `app/layout.tsx` — swap the metadata description if you want
- [ ] Add a real photo to `components/AboutSection.tsx` if you'd like a portrait instead of the solid dark card
- [ ] Double check `WorkSection.tsx` — add live links to LeadCRM / ResumeTeX once deployed, or swap in other projects

## Deploy

Easiest path is [Vercel](https://vercel.com) — push this to a GitHub repo and import it, zero config needed.
