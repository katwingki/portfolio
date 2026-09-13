# kl-portfolio-2023

Kathryn Lam's personal portfolio site, live at
**https://katwingki.github.io/portfolio/**.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **MUI v5** (`@mui/material`, `@mui/icons-material`) for components/theming
- No router — it's a single page of anchor-linked sections
- No backend, no database, no third-party contact-form service (see Contact below)

## Structure

```
index.html                   Vite entry HTML (meta/SEO/favicon tags live here)
src/
  main.tsx                   ReactDOM root, wraps App in MUI's ThemeProvider
  theme.ts                   MUI theme - brand colors (navy #0e1830), typography
  App.tsx                    Composes the page: NavBar, Hero, sections, Footer
  index.css                  Global CSS: smooth scroll, keyframe animations
  components/
    layout/                  NavBar (fixed AppBar + mobile drawer), Footer
    sections/                Hero, About, Experience, Skills, Contact
                              + Section.tsx, a shared wrapper (spacing, scroll-
                              offset, scroll-reveal animation) every section uses
  data/                      Content as typed data, imported by sections:
                              about.ts, experience.ts, skills.ts
  config/                    nav.ts (single source of truth for nav items/ids),
                              social.ts (GitHub/LinkedIn/email links)
  hooks/
    useRevealOnScroll.ts     IntersectionObserver hook powering the fade-up
                              reveal animation; respects prefers-reduced-motion
public/                      Static assets served as-is: favicon.ico/.svg,
                              manifest.json, robots.txt
.github/workflows/deploy.yml GitHub Actions: build + deploy to Pages on push to main
```

## Commands

```
npm install
npm run dev       # local dev server, http://localhost:5173/portfolio/
npm run build     # tsc --noEmit type-check, then vite build -> dist/
npm run preview   # serve the production build locally
npm run lint      # eslint .
```

## Deployment

Push to `main` -> `.github/workflows/deploy.yml` builds and deploys to GitHub
Pages automatically via `actions/upload-pages-artifact` + `actions/deploy-pages`.
No manual `gh-pages` step, no `npm run deploy` script.

The repo's Pages source is set to **"GitHub Actions"** (Settings -> Pages -> Build
and deployment -> Source). If that ever gets switched back to "Deploy from a
branch," the workflow's `deploy` job will fail.

**`vite.config.ts` sets `base: '/portfolio/'`** to match this repo's GitHub Pages
path (`https://katwingki.github.io/portfolio/`). If the repo is ever renamed,
this has to change to match.

**Don't hardcode `/portfolio/` in `index.html` asset tags** (favicon, manifest,
etc.) - Vite already injects `base` for those tags in both `dev` and `build`.
Hardcoding it doubles the path in dev mode (`/portfolio/portfolio/...`); it
happened to still render fine in a production build, but it's not something to
rely on. Use plain root-relative paths (`/favicon.svg`, not `/portfolio/favicon.svg`).

## Content

Bio, work history, and skills come from `~/main/kl-resume` (a separate local
repo of resume source-of-truth documents, not linked/vendored here - if that
repo isn't available, treat `src/data/*.ts` as the current source of truth and
ask the user before making up new content). When updating this site's content,
edit the relevant file in `src/data/` directly:

- `about.ts` - bio paragraphs (About section)
- `experience.ts` - job history + education (Experience section)
- `skills.ts` - skill groups (Skills section)

## Constraints — don't "fix" these without asking

- **No Projects section, on purpose.** Nav is Home -> About -> Experience ->
  Skills -> Contact. Don't add one back without checking — there's nothing
  current to feature yet.
- **Contact is a `mailto:` button, on purpose**, not a form. No EmailJS, no
  form backend.
- **No Firebase, no analytics, no third-party JS beyond Google Fonts.**
  Dependency surface is intentionally small — check before adding a service.

## Known-good baseline

Last full check (production build via `npm run preview`, audited with
Lighthouse): Performance 98, Accessibility 100, Best Practices 100, SEO 100.
If a change tanks these, that's a regression worth catching before merging.
