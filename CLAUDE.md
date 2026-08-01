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

- **Publications filters** (`App.tsx:36`): buttons are `All | Journal | Conference | Patent | Peer Review`.
  `type` must match one of `Journal`/`Conference`/`Patent`. The `Peer Review` filter matches
  `role === 'Peer Reviewer'` — that same `role` field also renders the amber badge on the card.
- **Project tags** (`App.tsx:32`): `allTags` is hardcoded as
  `All | Simulation | Vision | Robotics | Gen-AI | CAD/FEM`. A project whose `tags` contain a
  string not in that list is only reachable under `All`; a new category requires editing `allTags`.
- **Optional fields degrade gracefully**: `image`, `location`, `techStack`, `links`,
  `projects[].bullets`, and `description` are all conditionally rendered. Omitting `image` on an
  experience renders no logo; omitting it on a project renders a grey placeholder box.
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
- Do not add BARC experience to the live site; it stays commented out in `data.ts`.

## Working agreement

- **Update this file on every prompt.** Fold anything durable the user says — new conventions,
  preferences, corrections — into the relevant section here before finishing the turn.
- **Always commit and push the latest changes** at the end of a turn; the user does not want to be
  asked each time. Pushing to `master` triggers the Pages deploy.

## Notes

`@google/genai`, `express`, and `dotenv` are vestigial dependencies from the AI Studio scaffold
(hence `"name": "react-example"` in `package.json`); no source file imports them, and
`GEMINI_API_KEY` in `vite.config.ts` / `.env.example` is unused.
