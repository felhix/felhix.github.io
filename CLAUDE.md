# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the static HTML website for the French Netrunner community, served at `netrunner.fr` via GitHub Pages. There is no build system, framework, or package manager — everything is plain HTML, CSS, and assets.

## Structure

- `index.html` — Homepage (root level)
- `html/` — All subpages (blog, guide, history, battlebox, etc.)
- `assets/` — Images (PNG, WebP, JPEG)
- `css/styles.css` — Minimal custom CSS; Bootstrap handles the rest
- `js/components.js` — Shared web components (`<site-header>`, `<site-footer>`)

## Deployment

Push to the `main` branch deploys automatically to GitHub Pages. The CNAME file maps the domain to `netrunner.fr`.

## Key Conventions

- **Bootstrap 5.3.x via CDN** — used for all layout, components, and utility classes. Some pages also include the Bootstrap Icons CDN link.
- **CSS paths differ by location**: root-level `index.html` uses `css/styles.css`; pages inside `html/` use `../css/styles.css`. Same pattern for asset paths.
- **`<site-header>` and `<site-footer>` web components** — nav/hero and footer are shared via `js/components.js`. Load it with a relative path (same convention as CSS). To change nav or footer, edit only `js/components.js`.
- **Stay static** — the site doubles as a blog but must remain plain HTML/CSS with no build tool, static site generator, or CMS. New articles are added as new `.html` files in `html/` and linked manually from `html/blog.html`.
- **Content is in French** — all pages must use `lang="fr"` on the `<html>` tag.
- **`index.html` contains the event calendar** — upcoming tournaments and meetups are hardcoded directly in the HTML and need manual updates.

## Implementation guidelines

- Keep it extremely simple : it is sometimes easier to go by hand rather than importing complicated libraries
- Conventions conventions conventions : the standards are king
- It is important to fit the use cases into bootstrap library and we'd rather use premade Bootstrap behaviour rather than some `components.js` homemade unmaintainable code. That's why conventions are important
- You can be proactive in the recommandations : you know more the standards and you can give me what are the standards for some tasks. Plus, standard conventions lead to using Bootstrap premade features

## Common Tasks

**New blog post:**
1. Create `html/<slug>.html` (copy structure from an existing article in `html/`)
2. Add a link card in `html/blog.html`
3. Fill in the content of the blog post
4. Read all other blog articles, understand their content, and propose at least 10 internal links (to/from other articles)
