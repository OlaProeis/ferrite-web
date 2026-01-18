<script setup lang="ts">
useSeoMeta({
  title: 'Changelog - Ferrite',
  description: 'Complete changelog for Ferrite releases. See what\'s new, improved, and fixed in each version.',
  ogTitle: 'Changelog - Ferrite',
  ogDescription: 'Complete changelog for Ferrite releases. See what\'s new, improved, and fixed in each version.',
})

const releases = [
  {
    version: '0.2.5.1',
    date: 'January 17, 2026',
    highlights: [
      'Memory optimization: 250MB → 72MB idle',
      'Multi-encoding file support',
      'CPU usage: 10% → <1% idle',
      'Cursor positioning improvements',
    ],
    changes: {
      added: [
        'Multi-encoding file support (Latin-1, Windows-1252, Shift-JIS, etc.)',
        'Status bar encoding indicator with click-to-change',
        'Session restore toggle in settings',
      ],
      improved: [
        'CJK fonts now lazy-load on demand (~180MB savings)',
        'Custom memory allocators (mimalloc/jemalloc)',
        'Tiered idle repaint system for CPU efficiency',
        'Galley-based click mapping for better cursor positioning',
        'Scroll navigation accuracy in large files',
      ],
      fixed: [
        'Memory leaks in viewer states',
        'Intel Mac continuous 60fps repaint issue',
        'Window title command sent every frame',
        'New file dirty flag false positive',
        'CJK first-line indentation',
        'Linux close button hit-testing',
      ],
    },
  },
  {
    version: '0.2.5',
    date: 'January 16, 2026',
    highlights: [
      'Native Mermaid diagrams (11 types)',
      'CSV/TSV viewer with rainbow columns',
      'Internationalization support',
      'Semantic minimap',
    ],
    changes: {
      added: [
        'Native Mermaid rendering for 11 diagram types',
        'CSV/TSV viewer with auto-delimiter detection',
        'i18n infrastructure with Weblate integration',
        'Semantic minimap showing actual headings',
        'Keyboard shortcut customization',
        'Drag-and-drop image support',
        'TOC generation (Ctrl+Shift+U)',
        'Document statistics panel',
        'Snippet system with variables',
        'Custom font selection',
        'CJK paragraph indentation settings',
        'Git status auto-refresh',
      ],
      improved: [
        'Split view: both panes now fully editable',
        'Complete Mermaid parser rewrite',
        'Font selection for regional CJK variants',
        'Smart paste for URLs and paths',
      ],
      fixed: [
        'Search highlight drift in UTF-8 text',
        'Config persistence across restarts',
        'Quick switcher mouse support',
        'Table editing cursor loss',
      ],
    },
  },
  {
    version: '0.2.0',
    date: 'January 9, 2026',
    highlights: [
      'Split view with dual editing',
      'Git integration',
      'Zen mode',
      'Auto-save & session persistence',
    ],
    changes: {
      added: [
        'Split view with both panes editable',
        'Native Mermaid diagram support',
        'Editor minimap',
        'Git status indicators',
        'Zen mode (F11)',
        'Auto-save functionality',
        'Session persistence',
      ],
      improved: [
        'Overall performance and stability',
      ],
      fixed: [
        'Various stability issues from v0.1.x',
      ],
    },
  },
  {
    version: '0.1.0',
    date: 'December 20, 2025',
    highlights: [
      'First public release',
      'Multi-tab editing',
      'WYSIWYG markdown',
      'JSON/YAML tree viewers',
    ],
    changes: {
      added: [
        'Multi-tab editing interface',
        'WYSIWYG markdown editing',
        'JSON/YAML/TOML tree viewers',
        'Workspace mode',
        'Custom borderless UI',
        'Syntax highlighting for 40+ languages',
      ],
      improved: [],
      fixed: [],
    },
  },
]
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section bg-gradient-to-b from-ferrite-surface/50 to-transparent">
      <div class="container-wide">
        <div class="max-w-3xl mx-auto text-center">
          <span class="badge-rust mb-4">History</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-4">
            Changelog
          </h1>
          <p class="text-lg text-text-secondary">
            A complete history of Ferrite releases. For detailed technical notes, 
            check our <NuxtLink to="/blog" class="link">blog</NuxtLink> or the 
            <a href="https://github.com/OlaProeis/Ferrite/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" class="link">GitHub changelog</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Releases -->
    <section class="pb-20">
      <div class="container-narrow">
        <div class="space-y-12">
          <article 
            v-for="release in releases" 
            :key="release.version"
            class="card p-8"
          >
            <!-- Version Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-ferrite-border">
              <div>
                <h2 class="font-display font-bold text-2xl text-text-primary">
                  v{{ release.version }}
                </h2>
                <p class="text-sm text-text-tertiary mt-1">{{ release.date }}</p>
              </div>
              <a 
                :href="`https://github.com/OlaProeis/Ferrite/releases/tag/v${release.version}`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary text-sm"
              >
                View on GitHub
              </a>
            </div>

            <!-- Highlights -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-rust mb-3 uppercase tracking-wider">Highlights</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="highlight in release.highlights" 
                  :key="highlight"
                  class="px-3 py-1 bg-rust/10 border border-rust/20 rounded-full text-sm text-rust"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>

            <!-- Changes -->
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Added -->
              <div v-if="release.changes.added.length">
                <h3 class="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                  Added
                </h3>
                <ul class="space-y-2">
                  <li 
                    v-for="item in release.changes.added" 
                    :key="item"
                    class="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span class="text-emerald-400 mt-1.5">•</span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Improved -->
              <div v-if="release.changes.improved.length">
                <h3 class="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Improved
                </h3>
                <ul class="space-y-2">
                  <li 
                    v-for="item in release.changes.improved" 
                    :key="item"
                    class="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span class="text-amber-400 mt-1.5">•</span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Fixed -->
              <div v-if="release.changes.fixed.length">
                <h3 class="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Fixed
                </h3>
                <ul class="space-y-2">
                  <li 
                    v-for="item in release.changes.fixed" 
                    :key="item"
                    class="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span class="text-blue-400 mt-1.5">•</span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <!-- More History Link -->
        <div class="text-center mt-12">
          <a 
            href="https://github.com/OlaProeis/Ferrite/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm"
          >
            View complete changelog on GitHub →
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
