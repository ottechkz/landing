# AGENTS.md

## Project Stack
- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Preferred Folder Structure
Use this baseline structure for app code and assets:
- `app/` — routes, layouts, pages, metadata, and route-level UI
- `components/` — reusable UI components and section blocks
- `lib/` — utilities, helpers, constants, API clients, and shared logic
- `public/` — static assets (images, icons, fonts, downloadable files)

Keep feature-related files grouped when practical, while preserving clear separation between route-level code and reusable building blocks.

## Required Validation After Every Change
After each code/content update, run the following validation commands from the project root:
1. Build check
2. Lint check
3. Type check
4. Test suite (if tests are present)

Expected command set:
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm test` *(only when a test script or test files exist)*

If any command fails, fix the issue before finalizing the iteration.

## UI Style Guidance
Design and implementation should consistently feel:
- Fast
- Clean
- Minimal
- Professional

Apply a **mobile-first** approach by default:
- Start with small-screen spacing/typography first, then scale up for larger breakpoints.
- Maintain clear visual hierarchy with restrained color/weight choices.
- Prefer simple layouts and concise component structures over decorative complexity.

## Content Constraints
- Do **not** include fake testimonials.
- Do **not** include fake client logos or fabricated client claims.
- Use neutral placeholders when real-world proof/content is unavailable.

## Iteration Output Format Expectations
For each implementation iteration, provide:
1. **Summary of changes** (what was added/updated)
2. **Files touched** (concise list)
3. **Validation results** for build, lint, typecheck, and tests (if present)
4. **Known issues / follow-ups** (if any)

Keep iteration notes concise, concrete, and verifiable.
