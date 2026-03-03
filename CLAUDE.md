# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the static HTML website for the French Netrunner community, served at `netrunner.fr` via GitHub Pages. There is no build system, framework, or package manager — everything is plain HTML, CSS, and assets.

## Structure

- `index.html` — Homepage (root level)
- `html/` — All subpages (blog, guide, history, battlebox, etc.)
- `assets/` — Images (PNG, WebP, JPEG)
- `css/styles.css` — Minimal custom CSS; Bootstrap handles the rest

## Deployment

Push to the `main` branch deploys automatically to GitHub Pages. The CNAME file maps the domain to `netrunner.fr`.

## Key Conventions

- **Bootstrap 5.3.x via CDN** — used for all layout, components, and utility classes. Some pages also include the Bootstrap Icons CDN link.
- **CSS paths differ by location**: root-level `index.html` uses `css/styles.css`; pages inside `html/` use `../css/styles.css`. Same pattern for asset paths.
- **No shared templates** — each page is a self-contained HTML file. Nav and footer are copy-pasted across pages; update them individually when making site-wide changes.
- **Content is in French** — all pages must use `lang="fr"` on the `<html>` tag.
- **`index.html` contains the event calendar** — upcoming tournaments and meetups are hardcoded directly in the HTML and need manual updates.
