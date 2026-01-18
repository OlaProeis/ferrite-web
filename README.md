# Ferrite Website

The official website for [Ferrite](https://github.com/OlaProeis/Ferrite), the fast native Markdown editor built with Rust.

**Live at [getferrite.dev](https://getferrite.dev)**

---

## Features

- **Landing page** with feature showcase, screenshots, and download links
- **Dynamic GitHub stats** - Stars, downloads, and version pulled from GitHub API
- **Blog** with RSS feed for release notes and development updates
- **FAQ** with collapsible questions and answers
- **Keyboard shortcuts** reference (platform-aware Mac/Windows toggle)
- **Changelog** with formatted release history
- **Download page** with platform-specific instructions
- **SEO optimized** with SSR, sitemap, and JSON-LD structured data
- **Translation progress** widget showing Weblate status

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Nuxt 3](https://nuxt.com/) | Vue 3 framework with SSR |
| [Nuxt Content](https://content.nuxt.com/) | Blog posts & markdown |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Giscus](https://giscus.app/) | Comments via GitHub Discussions |
| [Vercel](https://vercel.com/) | Hosting & deployment |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
ferrite-webpage/
├── assets/
│   ├── css/main.css              # Global styles & Tailwind
│   └── img/                      # Images (demo.gif, icons, screenshots)
├── components/
│   ├── AppHeader.vue             # Navigation
│   ├── AppFooter.vue             # Footer with links
│   ├── HeroSection.vue           # Landing hero with GitHub stats
│   ├── FeaturesSection.vue       # Feature cards
│   ├── ScreenshotsSection.vue    # View mode toggle
│   ├── RoadAheadSection.vue      # Roadmap timeline
│   ├── ContributeSection.vue     # Contribution options
│   ├── DownloadSection.vue       # Platform download cards
│   ├── NewsletterSection.vue     # RSS subscription
│   ├── TranslationProgress.vue   # Weblate progress bars
│   └── GiscusComments.vue        # Comment system
├── composables/
│   └── useGitHubStats.ts         # GitHub API integration
├── content/
│   └── blog/                     # Blog posts (Markdown)
├── layouts/
│   └── default.vue               # Main layout
├── pages/
│   ├── index.vue                 # Landing page
│   ├── features.vue              # Detailed features
│   ├── download.vue              # Downloads & instructions
│   ├── blog/
│   │   ├── index.vue             # Blog listing
│   │   └── [...slug].vue         # Blog post template
│   ├── faq.vue                   # FAQ page
│   ├── shortcuts.vue             # Keyboard shortcuts
│   ├── changelog.vue             # Release history
│   ├── about.vue                 # About & timeline
│   └── error.vue                 # 404 page
├── server/
│   └── routes/
│       └── rss.xml.ts            # RSS feed generator
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── img/                      # OG images, screenshots
├── nuxt.config.ts
├── tailwind.config.js
└── package.json
```

## Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for RSS and previews"
date: 2026-01-20
category: release
readingTime: "5 min read"
tags: ["release", "feature"]
---

# Your Post Title

Content goes here...
```

The post will automatically appear in the blog listing and RSS feed.

## Design System

The color palette is defined in `tailwind.config.js`:

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0b` | Page background |
| Surface | `#141416` | Cards, elevated areas |
| Rust | `#e07020` | Primary accent |
| Text Primary | `#f5f5f5` | Headings |
| Text Secondary | `#a0a0a5` | Body text |

Fonts: **Outfit** (headings), **DM Sans** (body), **JetBrains Mono** (code)

## Deployment

The site auto-deploys to Vercel on push to `main`.

For other hosts:

```bash
npm run generate
# Upload .output/public to any static host
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Giscus (optional - for blog comments)
GISCUS_REPO=your-username/your-repo
GISCUS_REPO_ID=your-repo-id
GISCUS_CATEGORY=Announcements
GISCUS_CATEGORY_ID=your-category-id
```

## Contributing

Contributions welcome! This website is part of the [Ferrite](https://github.com/OlaProeis/Ferrite) project.

## AI-Assisted Development

This website was built using AI-assisted development with [Claude](https://anthropic.com) via [Cursor](https://cursor.com). Human developer provided direction and review; AI handled code generation. This transparency is consistent with the main Ferrite project's open approach.

## License

MIT - See [LICENSE](LICENSE) for details.

---

**[getferrite.dev](https://getferrite.dev)** | **[Ferrite on GitHub](https://github.com/OlaProeis/Ferrite)**
