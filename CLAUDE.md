# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build to dist/
npm run lint      # Type-check only (tsc --noEmit) — no eslint configured
npm run preview   # Preview production build
```

No test suite configured.

## Architecture

Single-page React app — the entire application lives in `src/App.tsx`. There is no routing, no backend, and no state management library.

**Data layer**: All brand content is declared as a static `BRAND_DATA: BrandElement[]` array at the top of `App.tsx`. Each entry maps to a full-page section. To add, remove, or update brand content, edit this array — the UI renders it generically.

**Layout pattern**: Fixed header + sticky sidebar (`<aside>`) + scrollable content area (`<div className="flex-1">`). The sidebar nav highlights the active section via `IntersectionObserver` (not scroll position), updating `activeId` state. `scrollToSection()` handles smooth scroll with an 80px header offset.

**Component structure** (all in `App.tsx`):
- `NavItem` — sidebar navigation button, uses `motion` layoutId for the active indicator
- `DetailCard` — polymorphic card that renders one of: color swatch, Google Maps iframe, image, or font preview, based on which fields are present in the item
- `App` — root with scroll progress bar (`useScroll` + `useSpring`), hero, sidebar, content sections, footer, privacy modal, back-to-top button

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — config is handled by the plugin). Custom font classes (`font-display`, `font-heading`, `font-mono`, `font-sans`) map to Anton, Space Grotesk, Roboto Mono, and Inter respectively. Brand colors are used as raw hex values in Tailwind arbitrary classes (e.g. `bg-[#050505]`, `bg-[#E8003D]`).

**Animations**: `motion/react` (not `framer-motion`) — `AnimatePresence` for modal/back-to-top, `whileInView` for section reveals, `useScroll`/`useSpring` for scroll progress bar.

**Assets**: All images served from `public/assets/imgs/` and logos from `public/assets/logos/`. Referenced with root-relative paths (e.g. `/assets/imgs/smash-burger.jpg`). One external image is used for the locations moodboard (`i.imgur.com`).

**Path alias**: `@` resolves to the project root (configured in `vite.config.ts`).

## Environment

Requires `GEMINI_API_KEY` in `.env.local`. The key is injected at build time via `vite.config.ts` `define`. Copy `.env.example` to `.env.local` to get started. `APP_URL` is optional for local dev.
