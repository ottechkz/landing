# CLAUDE.md — Ottech Landing Site

## Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3
- **Package manager:** npm

## Folder Structure
```
app/          — routes, layouts, pages, metadata
components/   — reusable UI components and section blocks
lib/          — utilities, helpers, constants
public/       — static assets (images, icons, favicon)
```

## Validation Commands (run after every change)
```bash
npm run build      # Next.js production build
npm run lint       # ESLint via next lint
npm run typecheck  # tsc --noEmit
npm test           # only when test files exist
```
All must pass before committing.

## UI Conventions
- **Theme:** Dark (slate-950 background, slate-100 text, cyan-300/400 accents)
- **Approach:** Mobile-first, responsive with `sm:` breakpoints
- **Style:** Fast, clean, minimal, professional
- **Layout:** Max-width 6xl container, consistent px-4/sm:px-6 padding
- **Components:** Rounded-xl cards with `border-white/10 bg-white/5`

## Content Rules
- No fake testimonials or fabricated client logos
- Use neutral placeholders when real content is unavailable
- Core message: "We replace Excel/WhatsApp/manual workflows with simple web systems; AI where it helps."

## Iteration Workflow
1. Plan (5 bullets max)
2. Implement edits
3. Run validation commands
4. Summarize diff
5. Suggest next 2 iterations

See AGENTS.md for additional guidelines.
