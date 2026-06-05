---
name: Mojo's Fire & Smoke Brand Guidelines
description: A brand document chalked in crimson on charcoal. Non-negotiable, specific, delivered with attitude.
colors:
  pit-black: "#050505"
  card-surface: "#111111"
  smoked-slate: "#1A1A1A"
  iron-grid: "#2E2E2E"
  cold-ash: "#888888"
  live-ember: "#E8003D"
  stage-light: "#FF1F5A"
  smoldering-core: "#C4003A"
  bone-white: "#FFFFFF"
  backstage-cream: "#F0EDE8"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(4rem, 15vw, 14rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(3rem, 8vw, 9rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  sharp: "0px"
  sm: "4px"
  md: "8px"
  xl: "16px"
  full: "9999px"
spacing:
  card: "1.5rem"
  section: "8rem"
  section-lg: "16rem"
  header-height: "80px"
components:
  button-primary:
    backgroundColor: "{colors.live-ember}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sharp}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.bone-white}"
    textColor: "{colors.pit-black}"
    rounded: "{rounded.sharp}"
    padding: "16px 32px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.cold-ash}"
    rounded: "{rounded.sharp}"
    padding: "16px"
  nav-item-active:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sharp}"
    padding: "16px"
  detail-card:
    backgroundColor: "rgba(24,24,27,0.5)"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  detail-card-hover:
    backgroundColor: "rgba(24,24,27,0.5)"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
---

# Design System: Mojo's Fire & Smoke

## 1. Overview

**Creative North Star: "The Smokehouse Blackboard"**

Mojo's brand guidelines are a blackboard chalked in crimson on charcoal. Not a PDF, not a slide deck — a surface where everything is permanent, visible, and non-negotiable. The design system doesn't persuade; it states. The typography is enormous because the brand is enormous. The darkness is total because the brand lives at night, under neon, behind the pass.

This is a brand register surface where the design IS the product. An internal operator consulting it should feel the same brand energy they feel standing inside a Mojo's location. An external supplier should understand immediately that ambiguity is not an option here. The scrolling experience is a walk through the brand, section by section, each one self-contained and authoritative.

What this system explicitly rejects: the friendly brightness of corporate fast food, the beige safety of food delivery app UI, the precious restraint of fine dining, and the hand-lettered earnestness of craft beer branding. This is none of those. It is a rock venue that happens to serve the best burger you've ever eaten.

**Key Characteristics:**
- Total darkness. `#050505` is the floor; everything else is layered above it.
- One voice in crimson. `#E8003D` punctuates, it does not flood.
- Typography at extreme scale. Section headings are architectural elements, not labels.
- Flat depth. No shadows. Tonal layering creates dimension.
- Committed motion. Scroll-driven reveals, not scattered micro-interactions.

## 2. Colors: The Pit Palette

A Drenched foundation of char and soot with a single, precise crimson strike. The background IS the brand; the accent confirms it.

### Primary
- **Live Ember** (`#E8003D` / `oklch(48% 0.265 16)`): The Mojo's crimson. Used for prices, interactive accents, active nav indicators, progress bar, primary CTA background, and on-hover border glow. It is the only warm color in a cold palette. Its rarity makes it land.
- **Stage Light** (`#FF1F5A` / `oklch(60% 0.265 12)`): A brighter, hotter crimson. Hero banner background panels only. Never in UI chrome.
- **Smoldering Core** (`#C4003A` / `oklch(41% 0.24 16)`): The deep, dying ember. Watermark layers, drop shadows, background tint on crimson panels. Never used for text.

### Neutral
- **Pit Black** (`#050505` / `oklch(4% 0.003 330)`): The page background. Absolute. Slightly warm-tinted toward the brand hue.
- **Card Surface** (`#111111` / `oklch(8% 0.003 330)`): Immediate step above Pit Black. Used as card and styled block backgrounds.
- **Smoked Slate** (`#1A1A1A` / `oklch(12% 0.003 330)`): Menu card backgrounds. The middle tonal layer.
- **Iron Grid** (`#2E2E2E` / `oklch(20% 0.003 330)`): Borders and dividers. Structural; never decorative.
- **Cold Ash** (`#888888` / `oklch(58% 0.003 0)`): Sub-category labels, inactive nav text. Minimum permissible lightness for body text (verify ≥4.5:1 against Pit Black).
- **Bone White** (`#FFFFFF` / `oklch(100% 0 0)`): All primary text on dark backgrounds.
- **Backstage Cream** (`#F0EDE8` / `oklch(95% 0.008 80)`): Text on crimson panels only, where pure white creates excessive contrast.

### Named Rules

**The One Ember Rule.** Live Ember appears on ≤15% of any given screen. Its job is to punctuate, not saturate. A page where crimson becomes the background has crossed into Stage Light territory (hero panels only).

**The No-Lightening Rule.** Never introduce a lighter background to "soften" or "air out" a section. The darkness is structural. If a section feels heavy, reduce content density; do not brighten the surface.

## 3. Typography: The Billboard Stack

**Display Font:** Anton (sans-serif, inherently black condensed — weight is not a variable, it is the character)  
**Body Font:** Inter (ui-sans-serif, system-ui, sans-serif)  
**Heading/Label Font:** Space Grotesk (sans-serif) for section metadata  
**Mono Font:** Roboto Mono (monospace) for prices, technical labels, and small-caps metadata

**Character:** Anton is a concert poster at 3 meters. It does not whisper. It announces. The scale ratios are extreme by design: the gap between a section heading and its body text is not a hierarchy — it's a statement of priority. Inter at light weight provides clean legibility as counterbalance. Roboto Mono gives prices and metadata a technical specificity that suits the "fire & smoke" brand positioning.

### Hierarchy
- **Display** (Anton, `clamp(4rem, 15vw, 14rem)`, leading 0.85, tracking -0.02em): Hero title only. One instance per page. Scale is architectural — it reads as an element of the room, not a piece of text.
- **Headline** (Anton, `clamp(3rem, 8vw, 9rem)`, leading 1, tracking -0.01em, `font-black` class for Tailwind force): Section headings. Each section gets one. Renders at 96px minimum on desktop; this is deliberate.
- **Title** (Space Grotesk, 700, `1.125rem`, tracking 0.1em, uppercase): Card headings, nav labels, category identifiers. Always uppercase, always tracked wide. `text-red-500` on dark cards.
- **Body** (Inter, 300, `clamp(1rem, 2vw, 1.25rem)`, leading 1.6): Section descriptions and card body copy. Max line length 65–75ch. Light weight only; medium or bold weight in body copy disrupts the hierarchy.
- **Label** (Roboto Mono, 700, `0.625rem`, tracking 0.2em, uppercase): Prices, section identifiers (`SECTION_*`), metadata, back-to-top text, small-caps callouts. The monospace is not decoration — it signals precision and specification.

### Named Rules

**The Anton-Only Headlines Rule.** No other font family appears at headline scale. Substituting Space Grotesk or Inter at large sizes reads as a design mistake, not a variant. Anton owns everything above 2rem.

**The Counterweight Rule.** Display/Headline weight is locked at the heaviest end. Body weight is locked at the lightest end. The contrast between 400-weight Anton and 300-weight Inter is the entire typographic argument. Introducing medium-weight body copy collapses it.

## 4. Elevation

This system is flat by design. No shadows exist in the visual vocabulary. Depth is created exclusively through tonal layering: Pit Black (`#050505`) is the base; Card Surface (`#111111`) sits one step above it; Smoked Slate (`#1A1A1A`) one step further. Elements separated by tonal distance read as layered without any shadow primitive being involved.

The one exception: hover states on `DetailCard` components use a `border-color` shift from `Iron Grid` (`#2E2E2E`) to Live Ember at 50% opacity (`rgba(232,0,61,0.5)`). This is a color transition, not an elevation change. It signals interactivity, not depth.

**The Flat-By-Default Rule.** No `box-shadow` on any surface, ever. If a component feels "unanchored," the answer is a tonal background step — not a shadow. A shadow here would look like a mistake from a different design system.

## 5. Components

### Primary Button
Character: a block stamp. Squared-off, crimson-flooded, uppercase label.
- **Shape:** No radius (0px). Hard edges match the smokehouse brutalism.
- **Primary:** Live Ember background (`#E8003D`), Bone White text (`#FFFFFF`), `px-8 py-4` (32px horizontal, 16px vertical), uppercase tracking-widest label.
- **Hover:** The background slides in from below as Bone White, text becomes Pit Black. Transition is a `translateY` wipe using a `::after` pseudo-element, not a color fade. Duration 300ms, ease-out.
- **Focus:** `outline: 2px solid #E8003D; outline-offset: 2px` (add this — currently missing).
- **No secondary variant exists** in the current implementation.

### Navigation (Sidebar)
Character: a set-list printed on the side of a monitor. Functional, authoritative, flush to the edge.
- **Container:** `border-right: 1px solid #2E2E2E` (Iron Grid). Width 288px (18rem). Sticky, full viewport height minus header.
- **Item default:** full-width button, `border-left: 4px solid transparent`, `padding: 16px`, `color: #888888` (Cold Ash), uppercase tracking-widest, 14px.
- **Item active:** `border-left: 4px solid #DC2626` (red-600), `background: rgba(255,255,255,0.05)`, `color: #FFFFFF`.
- **Icon:** 24px, matches text color state. Lucide icons.
- **Mobile:** hidden below 1024px. Currently no mobile replacement — this is a P1 audit finding.

### DetailCard
Character: a specimen card. Image or swatch above, label in crimson, body in ash.
- **Corner Style:** Gently rounded (8px / `rounded-lg`).
- **Background:** `rgba(24,24,27,0.5)` (zinc-900 at 50% opacity). Reads as Card Surface against Pit Black.
- **Border:** 1px Iron Grid (`#2E2E2E`) at rest; transitions to Live Ember at 50% opacity on hover.
- **Internal Padding:** `1.5rem` (24px) all sides.
- **Hover behavior:** border color transition (300ms), scale on child image (`scale(1.1)`, 500ms).
- **Polymorphic media:** color swatch, Google Maps iframe, or image occupy a `aspect-square` container above the text block. Logo images use `object-fit: contain`; all others use `object-fit: cover`.
- **Nested cards are forbidden.** DetailCard never appears inside another card.

### Progress Bar
Character: a guitar string pulled tight across the top of the stage.
- **Position:** fixed, top 0, full width, z-index 100. Height: 4px.
- **Color:** Live Ember (`#E8003D`).
- **Behavior:** `transform: scaleX()`, `transform-origin: left`. Driven by `useScroll` + `useSpring` (Motion). Never animate `width` — only `scaleX`.

### Back-to-Top Button
- **Shape:** Circular (48px × 48px, `border-radius: 9999px`).
- **Color:** Live Ember background, Bone White icon.
- **Entry/exit:** `AnimatePresence` scale + opacity. Appears after 500px scroll.
- **Icon:** `ArrowUp` (Lucide), 24px. Shifts `-4px` translateY on hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep every background dark. If a section reads as "light mode," it's wrong.
- **Do** let Anton breathe at extreme scale. Headline text below 64px is not a headline.
- **Do** use Live Ember for exactly one interactive role per screen region at a time. It cannot mean both "price" and "button" and "active nav" in the same visual cluster.
- **Do** reference the existing food photography style (overhead, matte black plates, dark stone surface) for any new image additions.
- **Do** write button labels, nav items, and card headings in uppercase. Sentence-case dilutes the authority.
- **Do** use Backstage Cream (`#F0EDE8`) for text on any crimson panel. Bone White on crimson creates ≥4.5:1 but Backstage Cream reads as warmer and more intentional.
- **Do** verify contrast ratios when adding secondary/label text — Cold Ash (`#888888`) is the floor; nothing lighter than Cold Ash on Pit Black.

### Don't:
- **Don't** introduce light backgrounds. Not `#F5F5F5`, not `#FAFAFA`, not any tinted cream. This is not a "dark mode" app with a light mode option. It has one mode.
- **Don't** use gradient text (`background-clip: text`). Never, under any circumstances. Use a single solid color, change weight or size for emphasis.
- **Don't** use `box-shadow` on any surface. The flat-by-default rule is absolute.
- **Don't** make it look like corporate fast food (McDonald's, KFC) — no bright primaries, no primary-color grids, no cheerful white backgrounds.
- **Don't** make it look like a food delivery app (Uber Eats, Grab) — no functional beige, no rounded sans-serif at body scale as a heading, no "add to cart" energy.
- **Don't** make it look like hipster craft branding — no earth tones, no hand-lettered aesthetic, no "small batch" warmth. The brand is a rock venue, not a farmers' market.
- **Don't** make it look like fine dining — nothing precious, nothing hushed, nothing minimal-white.
- **Don't** add a sidebar border stripe (`border-left` > 1px) to cards or content blocks as decoration. The nav uses it for active state only.
- **Don't** use glassmorphism (`backdrop-filter: blur`) except on the fixed header, where it is structural (content passes behind it during scroll).
- **Don't** repeat the `SECTION_*` uppercase monospace label pattern on any new sections without verifying it carries real information. If it's just a structural placeholder, remove it.
- **Don't** shrink the headline type. If a section heading at `text-6xl md:text-9xl` feels "too big," that is the correct size. Reduce content before reducing type scale.
