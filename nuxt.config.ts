// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // SSR enabled for better SEO
  ssr: true,

  // Enable async context for better SSR composable support
  experimental: {
    asyncContext: true,
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://getferrite.dev',
    name: 'Ferrite',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Ferrite - A Fast, Native Markdown Editor',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ferrite is a fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.' },
        { name: 'theme-color', content: '#0a0a0b' },
        { name: 'author', content: 'Ferrite Team' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ferrite' },
        { property: 'og:title', content: 'Ferrite - A Fast, Native Markdown Editor' },
        { property: 'og:description', content: 'Ferrite is a fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.' },
        { property: 'og:image', content: 'https://getferrite.dev/img/og-image.png' },
        { property: 'og:url', content: 'https://getferrite.dev' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@feraborern' },
        { name: 'twitter:creator', content: '@feraborern' },
        { name: 'twitter:title', content: 'Ferrite - A Fast, Native Markdown Editor' },
        { name: 'twitter:description', content: 'Ferrite is a fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.' },
        { name: 'twitter:image', content: 'https://getferrite.dev/img/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'Ferrite Blog RSS', href: '/rss.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://api.github.com' },
        // Preload default screenshot (LCP candidate for homepage)
        { rel: 'preload', href: '/img/split-dark.png', as: 'image' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'rust', 'markdown', 'json', 'yaml', 'toml', 'bash', 'css', 'html', 'vue']
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  nitro: {
    preset: 'vercel'
  },

  compatibilityDate: '2024-11-01'
})
