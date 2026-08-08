# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page personal research homepage for Woochang Sim (Ph.D. student, AI Convergence, GIST Data Science Lab), deployed to GitHub Pages at https://whatchang.github.io via `.github/workflows/deploy.yml`. Stack: Astro 7, Tailwind CSS v4 (through `@tailwindcss/vite`, no tailwind config file), strict TypeScript.

## Commands

Bun is the default package manager (`bun.lock` is committed); npm also works.

```
bun install        # install dependencies
bun run build      # production build to ./dist
bun run preview    # preview the production build
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`. Dev server runs at http://localhost:4321.

There are no tests or linters; verify changes with `bun run build` (it fails on Astro/TS errors).

## Architecture

Strict content/presentation split — most edits are content edits and only touch `src/data/`:

- `src/data/*.ts` holds all site content as plain typed objects: `profile.ts` (name, links, email, and the About bio), `interests.ts`, `featured.ts`, `publications.ts`, `education.ts`, `news.ts`.
- `src/pages/index.astro` is the only page. It composes the section components from `src/components/` in display order: Nav, Hero, About, Education, ResearchInterests, FeaturedResearch, Publications, News, Footer.
- `src/layouts/BaseLayout.astro` owns the `<head>`, fonts, and the inline dark-mode init script (`prefers-color-scheme` + `localStorage`, applied before paint to avoid FOUC). `src/styles/global.css` is the Tailwind v4 entry with the custom `dark:` variant.

Non-obvious behaviors:

- The About bio is a single template string in `profile.ts`; `About.astro` splits it into paragraphs on blank lines.
- `Publications.astro` bolds any author matching the `SELF_NAMES` array in `publications.ts` — add new romanization variants there, not in the component.
- The News section hides itself entirely when `news.ts` is empty; empty-string links in `profile.ts` hide the corresponding social icons.
- Internal asset links must go through `withBase()` from `src/lib/url.ts` so they survive a subpath (`base`) deployment.
- Files in `public/` are served from the site root (`public/cv.pdf` → `/cv.pdf`, referenced by `profile.links.cv`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
