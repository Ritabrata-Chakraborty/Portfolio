# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Summary

Single-page research portfolio for Ritabrata Chakraborty, deployed to GitHub Pages at
`https://ritabrata-chakraborty.github.io/Portfolio/`. React 19 + TypeScript + Vite + Tailwind v4.

## Build / Run / Test

```bash
npm install
npm run dev      # vite dev server on :3000 (host 0.0.0.0)
npm run build    # -> dist/
npm run preview  # serve the built dist/
npm run lint     # tsc --noEmit — the only check in the repo
npm run clean    # rm -rf dist
```

There is no test suite and no ESLint config; `npm run lint` is a TypeScript type-check only.

## Architecture

**Content and presentation are fully separated, and this is the single most important fact:**

- `src/data.ts` — the entire site's content as one `portfolioData` object
  (`personalInfo`, `education`, `publications`, `experience`, `skills`, `achievements`, `projects`).
  Adding or editing any content means editing this file **only**.
- `src/App.tsx` — one default-export component that renders every section from `portfolioData`.
  Touch it only to change layout, filters, or markup.
- `src/components/` — `BackgroundCanvas.tsx` (animated backdrop), `ThemePanel.tsx`
  (`ThemeProvider`, pushes `themeConfig.ts` values into CSS custom properties on mount).

### Data-shape contracts that App.tsx depends on

These are implicit — nothing enforces them, so breaking one silently drops content from the page:

- **Publications filters** (`App.tsx:36`): buttons are
  `All | Journal | Conference | Workshop | Poster | Patent | Peer Review`, in that order.
  `type` must match one of `Journal`/`Conference`/`Workshop`/`Poster`/`Patent`. The `Peer Review`
  filter matches `role === 'Peer Reviewer'` — that same `role` also renders the amber badge.
  **Workshop is deliberately empty**; Poster holds the BARC PPSTA entry.
  Peer-review entries carry a real `type` too, so every non-`Peer Review` filter also excludes
  `role === 'Peer Reviewer'` — otherwise reviewed papers surface under Journal/Conference.
- **Peer-review cards render as a distinct, shorter layout** (`App.tsx`, the
  `pub.role === 'Peer Reviewer'` branch in the publications map): badge row, title, full venue name
  in blue — no image, no authors line, no status line. Only non-peer-review publications get the
  full card with image, authors, and status. Keep both branches in sync on shared styling (badge
  colors, card radius, the blue venue text) but do not merge them back into one layout.
- **Project tags** (`App.tsx:32`): `allTags` is hardcoded as
  `All | Simulation | Vision | Robotics | Gen-AI | Design | Others`. A project whose `tags` contain
  a string not in that list is only reachable under `All`; a new category requires editing
  `allTags`. `Design` covers CAD/FEM work (it was renamed from `CAD/FEM`); `Others` holds entries
  that fit no technical category (Primal World Beliefs, AQI forecasting, cricket optimisation).
- **Optional fields degrade gracefully**: `image`, `location`, `techStack`, `links`,
  `projects[].bullets`, and `description` are all conditionally rendered. Omitting `image` on an
  experience renders no logo; omitting it on a project renders a grey placeholder box.
- **Link order is fixed** for both projects and publications: Paper → Poster → Project → Code →
  Report → Presentation → PDF. The buttons render in JSX source order, so adding a link type means
  placing it in that sequence in both blocks. `poster` uses the `Image` icon (aliased `ImageIcon` in
  `App.tsx` to avoid clashing with the DOM `Image` global) — distinct from `presentation`'s
  `MonitorPlay`, since a poster PDF/photo and a slide deck read as different artifacts.
- **`techStack` follows a fixed order**: programming languages (Python, C++, …) → ML/CV libraries
  (PyTorch, OpenCV, XGBoost) → ROS → simulation software (AirSim, MATLAB) → hardware (Jetson) →
  CAD/FEM software (ANSYS Mechanical, Fusion 360, SolidWorks).
- **Skill `icon` must exist in `iconMap`** (`App.tsx:7`). An unmapped name is guarded, so it fails
  silently as an empty icon tile rather than an error — check the map when adding a category.
- `education[].achievements` is a flat string array and is where leadership, teaching, and
  scholarship entries live — there is no separate leadership section.

### Images

Flat files in `public/`, referenced from `data.ts` by **bare filename** (e.g. `"org-nus.webp"`),
never with a leading `/` — `vite.config.ts` sets `base: '/Portfolio/'` and a rooted path would
break under the GitHub Pages subpath. Prefer `.webp`; the convention is `org-*` for institution
logos and `proj-*` / `pub-*` for publication and project imagery. Resize new images to roughly
match the existing ones (~1280px wide) before converting.

### Hiding entries

Entries are **commented out in place** in `data.ts`, not deleted — several publications and the
BARC experience already follow this convention. Preserve it.

### Styling

Tailwind v4 through `@tailwindcss/vite` (no `tailwind.config.js`). Design tokens live in the
`@theme` block of `src/index.css`; the custom classes used throughout `App.tsx` are `glass-panel`,
`bg-atmosphere`, `text-gradient`, and the `theme-hero`/`theme-section`/`theme-card`/`theme-body`/
`theme-meta` font-size classes. Change global type scale in `src/themeConfig.ts`, not in the markup.

**Spacing scale — keep it tight and uniform.** The user's standing preference is compact cards and
even gaps between every section; large padding and big corner radii read as unpolished.

- Section rhythm: `Section` uses `py-6` and its heading `mb-5`. The hero uses `pt-24 pb-6` (no
  `min-h`) so the hero→Education gap equals the gap between any two sections. Changing one of
  these three values without the others reintroduces the uneven gap.
- Cards: `p-4 md:p-5` with `rounded-xl`. Card lists use `space-y-4` / `gap-4`, filter rows `mb-4`.
- Project cards are a CSS **masonry** (`columns-*` + `break-inside-avoid`), not a grid, sized by
  `getColumnsClass`. Cap it at `lg:columns-4`: with 5 columns, column balancing fits everything in
  four and leaves the fifth visibly empty on filters like Robotics.
- Do not reach for `rounded-2xl`/`rounded-3xl` or `p-6`+ on content cards.

**Type scale.** Deliberately small for a dense, professional feel. The five sizes are defined
**twice** — `src/themeConfig.ts` (applied at runtime by `ThemeProvider`) and the `:root` block of
`src/index.css` (the pre-hydration values). **Change both or the page flashes at the old size.**
Current: hero `1.6rem`, section `1.05rem`, card `0.9rem`, body `0.85rem`, meta `0.7rem`.
Inter and JetBrains Mono are loaded from Google Fonts in `index.html`; without that link the CSS
font stacks silently fall back to system sans.

### Verifying layout changes

Framer Motion's `whileInView` keeps every section below the fold at `opacity: 0`, so a headless
screenshot captures a blank page. To check a layout change visually, temporarily append
`#root [style*="opacity"] { opacity: 1 !important; transform: none !important; }` to
`src/index.css`, screenshot, then revert it — do not commit that rule.

## Deploy

Push to `master` → `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes
`dist/` to GitHub Pages. `dist/` is gitignored; never commit it.

## Content source of truth

The résumé at `/home/rc/Code/GitHub Pages/Research-Resume-CV/Master___Resume.tex` is the canonical
source for education, publications, experience, projects, achievements, and leadership.

- **Keep `data.ts` in sync with the résumé.** When the résumé changes, mirror the change here;
  when adding to the portfolio, take wording from the résumé rather than inventing it.
- **Keep entries concise.** Portfolio entries are titles and short phrases, not résumé bullet
  prose — the existing entries set the length to match.
- **`projects` is not just the résumé's Projects section.** Every item under an Experience section
  is also its own project entry (one résumé item = one project card), including the indented
  sub-items such as the two field-hockey-launcher entries.
- **A project card's title is the résumé's own wording for that item, verbatim** — the experience
  item's heading, or the Projects-section heading. Do not substitute the related *publication*
  title: the CogniPlan, ACWGAN-GP, and orchard-patent papers each have a different name from the
  work item they came from, and the project cards use the work item's name.
  `Vision-Attention-Driven Autonomous Navigation` is the one deliberate exception — it stays in the
  NUS experience entry but has no project card.
- BARC is live: the experience entry, its two project cards, and the PPSTA poster publication are
  all uncommented in `data.ts`. (Earlier revisions of this file said to keep BARC hidden — that was
  reversed on request; the commented-out pattern itself is still the right tool for hiding entries.)
- The résumé's **Competitive Examinations** (GRE/TOEFL/JEE) are intentionally *not* on the site;
  its **Professional Activities** (IEEE membership) is folded into `achievements`.
- The CV link lives at `personalInfo.cv` and is surfaced as one more circular icon button in the
  hero's social row (Email, LinkedIn, GitHub, Scholar, ResearchGate, CV) — there is no large
  call-to-action button, and `personalInfo.portfolio` is now unused by the UI.
- Skill categories mirror the résumé's `Technical Skills` lines one-for-one, including the merged
  **AI & Data Science** and **Leadership & Communication** groupings.

## Working agreement

- **Update this file on every prompt.** Fold anything durable the user says — new conventions,
  preferences, corrections — into the relevant section here before finishing the turn.
- **Always commit and push the latest changes** at the end of a turn; the user does not want to be
  asked each time. Pushing to `master` triggers the Pages deploy.

## Notes

`@google/genai`, `express`, and `dotenv` are vestigial dependencies from the AI Studio scaffold
(hence `"name": "react-example"` in `package.json`); no source file imports them, and
`GEMINI_API_KEY` in `vite.config.ts` / `.env.example` is unused.
