# CLAUDE.md — Ottech Project Conventions

## Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans + Geist Mono (via next/font)
- **Package manager**: npm

## Folder structure
```
app/              # Next.js App Router pages and layouts
  layout.tsx      # Root layout (fonts, metadata, global styles)
  page.tsx        # Landing page
  globals.css     # Global styles + Tailwind imports
components/       # Reusable UI components
  Header.tsx
  Hero.tsx
  Services.tsx
  HowWeWork.tsx
  Portfolio.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
public/           # Static assets (images, favicon, og-image)
```

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — Typecheck only

## Checks (run after every iteration)
```bash
npm run build && npm run lint && npx tsc --noEmit
```

## UI style
- Clean, minimal, professional
- Light theme (no dark mode in v1)
- Geist Sans for body, Geist Mono for accents
- Primary color: blue-600 (`--color-primary`), neutral grays for text
- Max content width: 1200px (max-w-6xl), centered
- Mobile-first responsive design
- No heavy animation libraries; use Tailwind transitions
- Alternating section backgrounds: white / gray-50

## Content rules
- No fake testimonials or invented client names
- Use placeholder text clearly marked as "[Placeholder]" when needed
- Real copy for core messaging; neutral tone, professional

## Component conventions
- One component per file in `components/`
- Server components by default; add `"use client"` only when needed (state, effects)
- Section components receive no props; data is colocated in the component file
- Each section component includes its own `id` attribute for anchor navigation
