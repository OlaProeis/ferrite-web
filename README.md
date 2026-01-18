# Ferrite Website

The official website and development blog for [Ferrite](https://github.com/OlaProeis/Ferrite), the fast Rust-based Markdown editor.

## Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) with Vue 3
- **Content:** [Nuxt Content](https://content.nuxt.com/) for blog posts
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Comments:** [Giscus](https://giscus.app/) (GitHub Discussions)
- **Deployment:** Vercel (or any static host)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Project Structure

```
ferrite-webpage/
├── assets/
│   └── css/
│       └── main.css          # Global styles & Tailwind imports
├── components/
│   ├── AppHeader.vue         # Site header & navigation
│   ├── AppFooter.vue         # Site footer
│   ├── GiscusComments.vue    # Comment system
│   ├── HeroSection.vue       # Landing page hero
│   ├── FeaturesSection.vue   # Features showcase
│   └── ...                   # Other section components
├── content/
│   └── blog/                 # Blog posts (Markdown)
├── layouts/
│   └── default.vue           # Main layout
├── pages/
│   ├── index.vue             # Landing page
│   ├── features.vue          # Features page
│   ├── download.vue          # Download page
│   ├── about.vue             # About page
│   └── blog/
│       ├── index.vue         # Blog listing
│       └── [...slug].vue     # Blog post template
├── public/
│   ├── favicon.svg           # Site favicon
│   ├── giscus-theme.css      # Giscus custom theme
│   └── robots.txt
├── server/
│   └── routes/
│       └── rss.xml.ts        # RSS feed generator
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## Customization

### Updating GitHub Links

Search for `YOUR_USERNAME` across the codebase and replace with your actual GitHub username.

### Giscus Setup

1. Go to [giscus.app](https://giscus.app/)
2. Configure for your repository
3. Copy the configuration values to `.env` (see `.env.example`)
4. Update `GiscusComments.vue` with your values

### Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
date: 2026-01-15
category: development
readingTime: "5 min read"
tags: ["tag1", "tag2"]
---

# Your Post Title

Content goes here...
```

### Design System

The color palette and design tokens are in `tailwind.config.ts`. The main colors:

- **Background:** `#0a0a0b` (near-black)
- **Surface:** `#141416` (elevated surfaces)
- **Rust (primary):** `#e07020` (accent color)
- **Text:** `#f5f5f5` (primary), `#a0a0a5` (secondary)

## Deployment

### Vercel

1. Import the repository to Vercel
2. It will auto-detect Nuxt and configure everything
3. Deploy!

### Other Static Hosts

```bash
npm run generate
```

Upload the `.output/public` directory to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## AI-Assisted Development

This website was built using AI-assisted development with [Claude](https://anthropic.com) (Anthropic) via [Cursor](https://cursor.com). The human developer provided direction, reviewed output, and guided architecture while AI handled code generation.

This transparency is intentional - consistent with the main [Ferrite](https://github.com/OlaProeis/Ferrite) project's open approach to AI-assisted development.

## License

MIT - See [LICENSE](LICENSE) for details.
