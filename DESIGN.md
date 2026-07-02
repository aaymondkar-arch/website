---
name: Aayush Mondkar — Portfolio
description: Architecture and art portfolio. Playful, poetic, warmly unsettling.
colors:
  ink: "#121212"
  canvas: "#ffffff"
  ash: "#6b6b68"
  vellum: "#e6e4df"
typography:
  display:
    fontFamily: "'Coral Pixels', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(28px, 3.4vw, 48px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0"
  headline:
    fontFamily: "'Coral Pixels', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(24px, 2.6vw, 36px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0"
  body:
    fontFamily: "'Helvetica Neue World 75 Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Helvetica Neue World 75 Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
  mono:
    fontFamily: "'JetBrains Mono', 'Menlo', 'Consolas', 'Courier New', monospace"
    fontSize: "6px"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "0"
rounded:
  sm: "4px"
spacing:
  xs: "16px"
  sm: "32px"
  md: "48px"
  lg: "96px"
  xl: "140px"
components:
  project-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "16px 0"
  project-card-thumb:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
  nav:
    backgroundColor: "rgba(255,255,255,0.92)"
    textColor: "{colors.ink}"
    height: "72px"
  email-link:
    textColor: "{colors.ink}"
    padding: "0 0 12px"
---

# Design System: Aayush Mondkar — Portfolio

## 1. Overview

**Creative North Star: "The Uncanny Portfolio"**

This is a portfolio that watches back. The ASCII eyes follow the cursor. The typewriter types before you read. The Coral Pixels bitmap font sits improbably beside Helvetica Neue Bold — and the collision is the point. These are familiar materials made slightly strange: the conventions of a portfolio, the tools of a designer, bent just enough to feel like a person rather than a document.

The system is built entirely from four values: Ink, Canvas, Ash, Vellum. No accent color. The palette holds by force — tension comes from the typographic collision (bitmap pixel vs. Swiss bold), the interactive strangeness (ASCII eyes, typewriter), and the weight of the work itself. Color enters only through photography. Introducing a fifth color would displace the load onto the wrong element.

This system explicitly rejects: the neutral grids and restrained professionalism of typical architecture portfolios; the scroll-theater of pinned sections and parallax where the interaction becomes the product; the card grids, soft shadows, and rounded corners of the generic design portfolio template. It also refuses the first-reflex "dark mode for portfolios" and the second-reflex "editorial black on cream." The surface stays Canvas-white. The weight is felt in the typographic choices and the things the portfolio does that portfolios don't usually do.

**Key Characteristics:**
- Monochromatic without exception: Ink, Canvas, Ash, Vellum. Four values. No fifth.
- Two fonts, one collision: Coral Pixels (bitmap display) and Helvetica Neue Bold (Swiss authority). No third face.
- Flat surfaces: no shadows, no elevation. Depth from hairline Vellum borders and spacing rhythm.
- Interactive personality as first-class design: the ASCII eye element is not a gimmick, it is the argument.
- Typography carries all hierarchy weight. Size and weight contrast, never color.

## 2. Colors: The Monochrome Hold

Four values. No exceptions and no gradient between them except in photography.

### Primary
- **Ink** (#121212): Primary text, nav brand, all interactive elements at rest and on hover. Near-black rather than true black — the difference is felt at large display sizes where pure black reads as harsh. Used at full saturation or not at all. Never as a tint or transparency except in the nav backdrop (rgba(255,255,255,0.92), the one structural exception).

### Neutral
- **Canvas** (#ffffff): Page background, card surfaces, nav background base. Pure white. The default surface and the thing everything else sits on.
- **Ash** (#6b6b68): Secondary text — lede copy, nav links at rest, project captions, meta row keys, footer copy. Contrast ratio ~4.6:1 on Canvas, which passes WCAG AA at body sizes. This is the floor. Do not create a lighter variant.
- **Vellum** (#e6e4df): Hairline borders and dividers exclusively. The 1px separator between sections, below meta rows, around project thumbnails at rest. Not a surface color, not a background.

### Named Rules
**The No-Accent Rule.** This palette has no accent color. The strangeness of the portfolio is carried by typographic collision and interactive behavior — not by hue. Reaching for a fifth color is always the wrong answer. Photography carries color; UI does not.

**The Ash Floor Rule.** Ash (#6b6b68) is the minimum text color in the system at ~4.6:1 contrast on Canvas. There is no lighter variant for captions, placeholders, or "less important" copy. If a string feels less important, make it shorter or remove it — not lighter.

## 3. Typography: The Productive Collision

**Display Font:** Coral Pixels (Google Fonts, bitmap/pixel aesthetic, weight 400 only)
**Body Font:** Helvetica Neue World 75 Bold / Helvetica Neue (weight 700 throughout)
**Mono Font:** JetBrains Mono (ASCII art element exclusively — not general-purpose)

**Character:** A pairing that shouldn't work: Coral Pixels is chunky and retro, something you'd expect on a CRT screen from 1985. Helvetica Neue at bold weight is Swiss, confident, and maximally legible. They hold together because both are strong — neither is decorative filler. The body font is always bold (700). There is no light-weight text in this system; even captions and labels carry weight.

### Hierarchy
- **Display** (Coral Pixels, 400, `clamp(28px, 3.4vw, 48px)`, line-height 1.15, letter-spacing 0): Hero headline only. Driven by the typewriter animation on page load. The visual anchor of every first impression.
- **Headline** (Coral Pixels, 400, `clamp(24px, 2.6vw, 36px)`, line-height 1.2, letter-spacing 0): Section headings (h2), contact email display at `clamp(26px, 3.2vw, 40px)`. Coral Pixels at this size without tracking is the correct choice — do not add letter-spacing to Coral Pixels.
- **Body** (Helvetica Neue Bold, 700, 16–17px, line-height 1.6): Long-form prose. About section paragraphs run at 17px for reading comfort. Max line length 65–75ch enforced by `max-width`.
- **Label** (Helvetica Neue Bold, 700, 11–13px, letter-spacing 0.06–0.12em, uppercase): Project titles (13px, 0.06em), section markers (12px, 0.12em), meta keys (11px, 0.08em), nav links (14px). Uppercase for labels ≤4 words only.
- **Mono** (JetBrains Mono, 400, 6px, line-height 1.0): Reserved for the ASCII eye `<pre>` blocks. Not a general-purpose code font for this site.

### Named Rules
**The Two-Font Rule.** Coral Pixels for display roles; Helvetica Neue Bold for everything else. No third typeface is permitted. The collision of these two is the identity — a third face dilutes the argument.

**The Uppercase Ceiling Rule.** Uppercase is permitted for labels ≤4 words, meta keys, and nav links at label sizes. Body copy, section headings, and any string longer than four words must be sentence case. All-caps at body sizes is illegible.

**The No-Tracking Rule for Display.** Coral Pixels has letter-spacing: 0 at all sizes. Do not add tracking to a pixel font — the glyphs are designed to sit next to each other at normal spacing. The temptation to add tracking "for elegance" produces gaps between bitmap characters that read as broken, not refined.

## 4. Elevation

This system is flat. No shadows on cards, containers, buttons, or project thumbnails. Depth is achieved through three means only: hairline Vellum borders (1px solid), spacing rhythm (sections separated by 96px of vertical padding plus a hairline, never by raised planes), and the natural figure-ground contrast of Ink on Canvas.

The one structural exception: the sticky navigation uses `backdrop-filter: blur(8px)` at 92% Canvas opacity. This is not decorative — the nav must remain readable as it floats over scrolling content, and blur is the appropriate tool. It is not a shadow. It is not a card. It does not set a precedent.

### Named Rules
**The Flat-by-Default Rule.** No `box-shadow` on any surface except the nav backdrop-filter. If a new element appears to need a shadow, the actual answer is more spacing or a border. Shadows exist in this system as an absence, which makes the nav's blur feel intentional rather than reflexive.

## 5. Components

### Navigation
The only layered surface in the system. Sticky, 72px tall, border-bottom 1px solid Vellum. Backdrop: rgba(255,255,255,0.92) with blur(8px).

- **Brand mark:** Coral Pixels 20px, letter-spacing 0, Ink. The one display-font instance in the nav.
- **Nav links:** Helvetica Neue Bold 14px, Ash at rest. On hover: color becomes Ink, no opacity drop (opacity:1 explicit, overrides the default `a:hover` opacity:0.6).
- **Back link (project pages):** 13px, uppercase, letter-spacing 0.08em, Ash. Hover: Ink, opacity stays 1.
- **z-index:** 50. Stacking order: nav (50) is the ceiling; nothing else in the current system requires a higher value.

### Project Cards
The primary surface of the work grid. Shape and behavior are deliberate and minimal.

- **Container:** `display: block`, aspect-ratio 4:3 for the thumbnail, no card-level background or border.
- **Thumbnail:** border-radius 4px, border 1px solid Vellum at rest, overflow hidden, Canvas background. Aspect-ratio locked.
- **Hover treatment:** The project link's default `opacity: 0.6` hover is suppressed (`project:hover { opacity: 1 }`). The thumbnail itself has no scale, shadow, or border-change on hover — the image inside may receive a subtle scale if motion is added, but the container stays still.
- **Title:** 13px, uppercase, letter-spacing 0.06em, Ink, Helvetica Neue Bold. No Coral Pixels on project titles.
- **Tag / type:** 12px, Ash, sentence case, no tracking.
- **Description (when present):** 14px, Ash, line-height 1.5.

**The Placeholder Rule.** Thumbnails without a project image use a subtle diagonal gradient within the Vellum–Canvas range (e.g., `linear-gradient(135deg, #f0ece4 0%, #d9d3c6 100%)`). This is a placeholder state, not a design choice. Real projects require real images.

### Email / Contact Display Link
The largest interactive element on the page. Coral Pixels at `clamp(26px, 3.2vw, 40px)` — display weight serving a display function.

- **Default:** Ink text, border-bottom 1px solid Vellum, padding-bottom 12px.
- **Hover:** border-bottom shifts to 1px solid Ink. No opacity change, no color change on the text, no underline animation.
- **Arrow character:** `→` appended inline. Part of the label, not a pseudo-element.

### Section Labels
Small uppercase marker used at the start of sections to name the area. 12px, letter-spacing 0.12em, Ash. Preceded by an 8px square Ink dot (via `::before` with `border-radius: 50%`). Used sparingly — once per section at most, and only where the section type genuinely needs naming.

**The Eyebrow Ceiling Rule.** This element is permitted because it appears at most once per section and names something the heading alone cannot. If it begins appearing above every h2 as mechanical scaffold, remove it. Its value is in its restraint.

### About / Socials Meta Rows
Key-value pairs in rows separated by 1px Vellum hairlines.

- **Key:** 11px, uppercase, letter-spacing 0.08em, Ash.
- **Value:** 14px, Ink, normal weight (system-wise 700, but feels lighter at this size).
- **Row padding:** 10–14px vertical. Bottom border on all rows except the last.

### Signature Component: The ASCII Eyes
The cursor-tracking ASCII-art eye element. Not a component in any framework sense — it is a first-class design element and the most distinctive surface in the system.

- **Render:** Two `<pre>` elements using JetBrains Mono at 6px / line-height 1.0 / letter-spacing 0. Character ramp from space (transparent) to `$` approximates grayscale luminance. W=110, H=30 characters.
- **Behavior:** Pupils track the cursor via `mousemove`. Smooth lerp toward the target (~0.32 per frame via `requestAnimationFrame`). Runs on an idle RAF loop so the interpolation continues between mouse events.
- **Reduced motion:** On `prefers-reduced-motion: reduce`, render at forward gaze (px=0, py=0) statically. No cursor tracking, no RAF loop.
- **Accessibility:** `aria-hidden="true"`. The element is purely visual.
- **Placement:** Hero row right column, centered. Stacks below hero text at ≤900px.
- **Design rule:** This element is not replaceable by a photograph, illustration, or icon. It is the portfolio watching back — the primary argument the site makes about its maker's sensibility. Preserve it across any redesign.

## 6. Do's and Don'ts

### Do:
- **Do** hold the four-value palette (Ink, Canvas, Ash, Vellum) without exception across every page and state.
- **Do** use Coral Pixels only in display roles: hero h1, section h2, the contact email link, and the nav brand. Its impact depends on its selectivity.
- **Do** keep all display headings and body copy in sentence case. Reserve uppercase strictly for labels ≤4 words.
- **Do** use 1px solid Vellum as the only visual separator between sections, rows, and surfaces. No full-bleed color-change sections, no padding-only separation at scale.
- **Do** set `letter-spacing: 0` on all Coral Pixels instances. The pixel font is not tracked.
- **Do** respect the 4px border-radius on thumbnails. It is the only radius value in the system.
- **Do** provide `prefers-reduced-motion` alternatives for every animation: typewriter renders the full string instantly, ASCII eyes hold at forward gaze, reveal elements are immediately visible.
- **Do** let images carry visual weight on project pages. The UI retreats to become the quiet room around the work.
- **Do** preserve the ASCII eye element across redesigns. It is the site's core argument.
- **Do** keep Ash (#6b6b68) as the minimum text color. Do not soften captions below this value.

### Don't:
- **Don't** introduce a fifth color or an accent of any kind. There is no accent. Photography carries hue; UI does not.
- **Don't** lighten Ash (#6b6b68). It is the contrast floor. Softening it further is how the system loses its nerve.
- **Don't** add `box-shadow` to cards, thumbnails, containers, or buttons. The system is intentionally flat.
- **Don't** use a third typeface. Coral Pixels plus Helvetica Neue Bold is the complete inventory.
- **Don't** apply uppercase to sentences, section headings, or strings longer than four words.
- **Don't** use border-radius values other than 4px on surfaces. Higher values read as a different site.
- **Don't** pair `border` and `box-shadow` on the same element as dual decoration.
- **Don't** build the generic portfolio template: card grids with soft shadows, rounded corners above 4px, icon+heading+text repeated blocks, or neutral Swiss grids with project-number eyebrows (`01 / PROJECT`).
- **Don't** add scroll-pinning, parallax, or section-entrance choreography. The animation vocabulary is: typewriter (hero, once), ASCII eye cursor tracking, and reveal-on-scroll (opacity + translateY, fires once per element, then done). That is the complete inventory.
- **Don't** add `border-left` stripe accents greater than 1px as colored callouts on any element.
- **Don't** use gradient text (`background-clip: text` with a gradient) or glassmorphism as decoration.
- **Don't** build the typical architecture portfolio layout: restrained-professional Swiss grids, full-bleed image heroes as the only personality, numbered section eyebrows, or museum-clean white-box presentation with no voice in the container.
- **Don't** build the flashy SPA scroll experience: pinned sections, parallax, scroll-driven sequences where the interaction is the product rather than the work.
