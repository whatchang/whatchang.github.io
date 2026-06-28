# Woochang Sim — Personal Research Homepage

A static, single-page personal research homepage for Woochang Sim (심우창), Ph.D. student in AI Convergence at the Gwangju Institute of Science and Technology (GIST), Data Science Lab. Built for academic recruiters, collaborators, and paper readers.

## Stack

- [Astro](https://astro.build/) (static site generator)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- TypeScript (strict)
- Dark mode with `prefers-color-scheme` + `localStorage` (no flash of unstyled content)
- Inter font + system fallback
- Mobile-first responsive layout

## Local development

The project uses [Bun](https://bun.sh/) by default (`bun.lock` is committed). `npm` also works.

```bash
# Install dependencies
bun install            # or: npm install

# Start dev server (http://localhost:4321)
bun run dev            # or: npm run dev

# Production build (outputs to ./dist)
bun run build          # or: npm run build

# Preview the production build locally
bun run preview        # or: npm run preview
```

## Content updates

All content lives in plain TypeScript files under `src/data/`:

| File | Purpose |
| ---- | ------- |
| `src/data/profile.ts`      | Name, title, affiliation, advisor, email, social links, About bio |
| `src/data/interests.ts`    | Research interests (mark one with `current: true` to highlight it) |
| `src/data/featured.ts`     | Featured research cards (title, status, description, thumbnail, links) |
| `src/data/publications.ts` | Publication list grouped by type (journal / conference / workshop / preprint) |
| `src/data/news.ts`         | News/updates timeline (date + text). The whole section hides if empty. |

The publications renderer bolds any author whose name matches an entry in `SELF_NAMES` (in `src/data/publications.ts`). Add new variants (e.g., for different romanizations) to that array.

## Asset replacements

Files under `public/` are served at the site root:

- `public/images/profile.jpg` — current photo pulled from Google Scholar (100×128). Replace with a higher-resolution headshot if desired.
- `public/images/featured/arc-agi-3.svg`, `gifarc.svg`, `lot.svg` — placeholder 16:9 thumbnails. Replace with real images (1280×720 recommended). The `lot.svg` file is still referenced from the TIST card; rename if you swap it out.
- `public/cv.pdf` — drop in your real CV. The CV link in `src/data/profile.ts` (`links.cv`) defaults to `/cv.pdf`.
- `public/favicon.svg` — Astro-default placeholder.

## Deployment (GitHub Pages)

A workflow is provided at `.github/workflows/deploy.yml` using `withastro/action@v3` and `actions/deploy-pages@v4`.

1. Edit `astro.config.mjs`:
   - Set `site` to `https://<username>.github.io`
   - If the repo name is `<username>.github.io`, **remove** the `base` line entirely.
   - Otherwise (e.g., repo is `research-homepage`), keep `base: '/<repo-name>/'`.
2. If you commit `bun.lock`, uncomment the `with: package-manager: bun@latest` block in the workflow so the action installs with Bun.
3. Push to `main`.
4. On GitHub: **Settings → Pages → Source = "GitHub Actions"**. The first push to `main` will deploy.

## Project structure

```
src/
  components/   # Nav, Hero, About, ResearchInterests, FeaturedResearch,
                # Publications, News, Footer, ThemeToggle, SocialIcons, LinkChip
  data/         # profile.ts, interests.ts, featured.ts, publications.ts, news.ts
  layouts/      # BaseLayout.astro (head, theme init, fonts, body shell)
  pages/        # index.astro (the single page)
  styles/       # global.css (Tailwind + dark mode variant + body font)
public/
  images/       # profile + featured thumbnails
  favicon.svg
.github/workflows/deploy.yml
astro.config.mjs
```

## TODO checklist (for the user)

- [ ] Fill in `email` in `src/data/profile.ts`.
- [ ] Fill in `links.github`, `links.linkedin`, `links.x` (leave any empty string `""` to hide that icon).
- [ ] Add the advisor's lab URL to `profile.advisor.href`, or leave `""` to render as plain text.
- [ ] Verify the **Featured Research #3** card in `src/data/featured.ts` — currently mapped to the ACM TIST 2024 "Reasoning Abilities of LLMs on ARC" paper. Swap if you meant a different paper. Replace the `#` link with the real paper / arXiv / DOI URL.
- [ ] Replace the placeholder `#` hrefs in Featured Research items 1 (Competition / Code) and 2 (Paper / Code / Dataset) with real URLs.
- [ ] Add `links.pdf`/`arxiv`/`code`/`project` to publications where applicable (especially the TIST journal article and the System-2 NeurIPS workshop).
- [ ] Verify and uncomment the 8th publication in `src/data/publications.ts` ("Exploring Planning Capability...") — Google Scholar truncated its venue and year.
- [ ] Replace placeholder assets in `public/`:
  - `images/featured/*.svg` → real thumbnails
  - `cv.pdf` → real CV
- [ ] Update `astro.config.mjs` `site` and `base` for your GitHub Pages setup.
