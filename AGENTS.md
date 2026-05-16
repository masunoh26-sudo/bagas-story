# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A minimalist short story website with Decap CMS integration. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + Typography |
| Content | Content Collections (type-safe markdown) |
| CMS | Decap CMS (Git Gateway) + Netlify Identity |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   ├── author
│   │   └── about.md  # Author biography configuration.
│   └── posts
│       └── blog-entry-1.md  # Short story markdown files.
├── public
│   ├── admin
│   │   ├── config.yml  # Decap CMS configuration.
│   │   └── index.html  # Decap CMS entry point.
│   ├── favicon.ico
│   └── placeholder.png
├── src
│   ├── components
│   │   ├── ui
│   │   │   └── card.tsx  # Card UI component.
│   │   └── blog-posts.tsx  # Short story list/card display component.
│   ├── lib
│   │   └── utils.ts  # cn() helper for conditional Tailwind class merging.
│   ├── routes
│   │   ├── __root.tsx  # Root layout with Netlify Identity widget included.
│   │   ├── index.tsx  # Home page: author biography and short stories list.
│   │   └── posts.$slug.tsx  # Story detail route: single story by slug.
│   ├── router.tsx  # TanStack Router setup.
│   └── styles.css  # Global styles: Tailwind and typography plugin.
├── content-collections.ts  # Content Collections config: posts schema and author schema.
├── netlify.toml  # Netlify deployment config.
├── package.json  # Project manifest.
└── vite.config.ts  # Vite config template.
```

## Key Concepts

### Content Architecture
The site uses `@content-collections/core` to validate and type-check markdown content.
There are two collections configured in `content-collections.ts`:
- **posts**: Short stories stored in `content/posts/`. Includes `title`, `summary`, `categories` (Genres), `image`, `date`, and `content`.
- **author**: Author biography stored in `content/author/about.md`. Includes `name`, `bio`, `avatar`, and `content`.

### Decap CMS Integration
Content can be easily managed at the `/admin/` route. The CMS is configured to use the `git-gateway` backend via Netlify Identity.

**Configuration:**
- `public/admin/config.yml` defines the collections schema for Decap CMS, mapping exactly to `content-collections.ts`.
- `public/admin/index.html` loads the Decap CMS script and the Netlify Identity widget.
- `src/routes/__root.tsx` injects the Netlify Identity widget globally to catch login redirect tokens.

## Development Commands

```bash
netlify dev      # Start dev server with Netlify Identity emulation
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

- **Styling**: Tailwind CSS utility classes. The site uses `@tailwindcss/typography` (`prose` class) for formatting markdown content.
- **Routing**: TanStack Router file-based routing in `src/routes/`.
- **CMS**: Any new content fields should be added to BOTH `public/admin/config.yml` and `content-collections.ts`.
