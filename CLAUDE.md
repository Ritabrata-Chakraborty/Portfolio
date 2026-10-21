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
- `src/components/` — `ThemePanel.tsx`: `ThemeProvider` (pushes `themeConfig.ts` values into CSS
  custom properties on mount) and `ThemeToggle` (the System/Light/Dark switch in the nav).
  `BackgroundCanvas.tsx` (the old blue particle backdrop) is no longer rendered; the file is unused.

### Data-shape contracts that App.tsx depends on

These are implicit — nothing enforces them, so breaking one silently drops content from the page:

- **Publications filters** (`App.tsx:36`): buttons are
  `All | Journal | Conference | Workshop | Poster | Patent | Peer Review`, in that order.
  `type` must match one of `Journal`/`Conference`/`Workshop`/`Poster`/`Patent`. The `Peer Review`
  filter matches `role === 'Peer Reviewer'` — that same `role` also renders the amber `pill-warn` badge.
  **Workshop is deliberately empty**; Poster holds the BARC PPSTA entry.
  Peer-review entries carry a real `type` too, so every non-`Peer Review` filter also excludes
  `role === 'Peer Reviewer'` — otherwise reviewed papers surface under Journal/Conference.
- **Peer-review cards render as a distinct, shorter layout** (`App.tsx`, the
  `pub.role === 'Peer Reviewer'` branch in the publications map): badge row, title list, full venue
  name in the accent color — no image, no authors line, no status line. Only non-peer-review
  publications get the full card with image, authors, and status. Keep both branches in sync on
  shared styling (`pill` badges, card radius, the accent venue text) but do not merge them back into
  one layout.
- **Peer reviews are grouped: one card per venue**, keyed on `shortVenue` (`reviewsByVenue` /
  `shownPubs` in `App.tsx`). The card lists every reviewed title for that venue as `▹` bullets and
  sits where the venue's first entry appears in `data.ts`. When a venue spans several years, the year
  pill shows them all, descending, joined by ` · ` (e.g. `2026 · 2025`). Data stays one entry per
  reviewed paper — add a new review as its own entry with the same `shortVenue`; the venue name shown
  is the first entry's `venue`, so keep that string venue-generic if years differ.
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
- **Skills render as three fixed columns**, not a flowing grid: `skillColumnNames` in `App.tsx` maps
  category names to columns — Relevant Courses + Robotics & Simulation | Programming Languages +
  Hardware & Embedded Systems + CAD & Mechanical Simulation (the short groups, stacked) | AI & Data
  Science + Cloud & MLOps. Cards are `flex-1` so each column ends flush. Renaming a category in
  `data.ts` means renaming it there too; an unlisted category falls into the last column.
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

Tailwind v4 through `@tailwindcss/vite` (no `tailwind.config.js`). The look is a clean academic
style deliberately matching the per-paper project pages (e.g. the PHM ACWGAN-GP site): deep teal
accent, hairline rules, solid cards, no glass/blur, gradients, or particle backdrop.

- **Color tokens** are CSS variables (`--bg --fg --muted --rule --card --head --accent --accent-soft
  --warn --warn-soft`) defined **three times** in `src/index.css`: light on `:root`, dark under
  `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`, and dark again under
  `:root[data-theme="dark"]`. Change a dark value in both dark blocks. `@theme inline` maps them to
  Tailwind colors, so markup uses `text-fg`, `text-muted`, `bg-card`, `border-rule`, `text-accent`,
  `bg-accent-soft`, … — **never raw `slate-*`/`blue-*` utilities**, which don't switch with the theme.
- **Light/dark**: defaults to system. `ThemeToggle` stores `light`/`dark` in `localStorage.theme`
  (System removes the key) and sets `data-theme` on `<html>`; an inline script in `index.html`
  applies it before first paint to avoid a flash. Logos and publication images sit on a `bg-white`
  frame on purpose so white-background logos read correctly in dark mode.
- **Component classes** (`card`, `card-hover`, `kicker`, `pill`/`pill-accent`/`pill-warn`,
  `btn-link`, `filter-btn` with `data-active`, `icon-btn`, `nav-bar`) live inside
  `@layer components` — keep them there, or their `display`/padding beats Tailwind utilities like
  `md:hidden` (this once made the mobile date pill show on desktop).
- **Fonts**: Source Serif 4 for the name and section headings (`font-serif`), Inter for body, and
  JetBrains Mono for pills/dates — all loaded from Google Fonts in `index.html`.
- Section headings are serif with a hairline rule filling the rest of the row. The avatar is a
  **circle** (`rounded-full`) with a thin ring.
- Font sizes use the `theme-hero`/`theme-section`/`theme-card`/`theme-body`/`theme-meta` classes.
  Change global type scale in `src/themeConfig.ts`, not in the markup.

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
Current: hero `1.6rem`, section `1.2rem` (serif reads smaller), card `0.9rem`, body `0.85rem`,
meta `0.7rem`. Without the Google Fonts link in `index.html` the font stacks silently fall back.

### Verifying layout changes

Framer Motion's `whileInView` keeps every section below the fold at `opacity: 0`, so a headless
screenshot captures a blank page. To check a layout change visually, temporarily append
`#root [style*="opacity"] { opacity: 1 !important; transform: none !important; }` to
`src/index.css`, screenshot, then revert it — do not commit that rule. Headless Chrome takes
`--blink-settings=preferredColorScheme=0` (dark) or `=1` (light) to check both themes.

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
- **Deliberate divergences from the résumé — do not "fix" these to match it:**
  - The résumé's **Subject Matter Expert / Knowledge Cultivator** experience (Nov '23–Feb '24) is
    intentionally absent from `data.ts`; it was removed on request even though the résumé keeps it.
  - `personalInfo.github` points to `github.com/Ritabrata-Chakraborty` (the account was renamed
    from `robotics1106`; old `robotics1106.github.io` Pages URLs now 404).
  - The hero's **About Me** copy is authored directly by the user, not derived from the résumé.
    Don't regenerate or "improve" it against résumé wording; only change it on explicit instruction.
- **Links come from the résumé first, then the per-paper project pages.** Several works have their
  own GitHub Pages site (`ritabrata-chakraborty.github.io/<repo>/`: orchard UAV, railgun, primal
  world beliefs, PHM ACWGAN-GP). Their entries carry a `project` link to that page, and the Drive
  `paper`/`poster` link is the one that page itself uses. `Railgun-Impact-Layered-Shields` is a
  **private** repo, so it gets no `code` link (it would 404 for visitors) — only its page and poster.
- The CV link lives at `personalInfo.cv` and is surfaced as one more circular icon button in the
  hero's social row (Email, LinkedIn, GitHub, Scholar, ResearchGate, CV) — there is no large
  call-to-action button, and `personalInfo.portfolio` is now unused by the UI.
- Skill categories mirror the résumé's `Technical Skills` lines, including the merged
  **AI & Data Science** grouping — except **Leadership & Communication** and **Productivity
  Software**, which are commented out in `data.ts` on request (deliberately not shown on the site).
- **Peer-review entries carry no `image` field at all** — they don't need one, since the compact
  peer-review card never renders an image regardless. Don't add one for a new peer-review entry,
  even when the user supplies a picture. `proj-gait.webp` and `proj-irrigation.webp` in `public/`
  are now-unreferenced leftovers from when peer reviews used to show images; harmless, left in place.

## Working agreement

- **Update this file on every prompt.** Fold anything durable the user says — new conventions,
  preferences, corrections — into the relevant section here before finishing the turn.
- **Always commit and push the latest changes** at the end of a turn; the user does not want to be
  asked each time. Pushing to `master` triggers the Pages deploy.

## Notes

`@google/genai`, `express`, and `dotenv` are vestigial dependencies from the AI Studio scaffold
(hence `"name": "react-example"` in `package.json`); no source file imports them, and
`GEMINI_API_KEY` in `vite.config.ts` / `.env.example` is unused.
