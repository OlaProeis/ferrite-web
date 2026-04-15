<script setup lang="ts">
useSeoMeta({
  title: 'Changelog - Ferrite',
  description: 'Complete changelog for Ferrite releases. See what\'s new, improved, and fixed in each version.',
  ogTitle: 'Changelog - Ferrite',
  ogDescription: 'Complete changelog for Ferrite releases. See what\'s new, improved, and fixed in each version.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

// Add breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Changelog' },
])

const releases = [
  {
    version: '0.2.8',
    date: 'April 2026',
    highlights: [
      'Command Palette (Alt+Space)',
      'HarfRust text shaping for complex scripts',
      'Image viewer tabs (PNG/JPEG/GIF/WebP/BMP)',
      'PDF viewer tabs (pure Rust)',
      'Rendered view performance overhaul',
      'Table cell rich text with click-to-edit',
      '13 bug fixes',
    ],
    changes: {
      added: [
        'Command Palette (Alt+Space) - searchable command launcher with fuzzy search, recent commands, category grouping, and shortcut hints',
        'Windows Alt+Space suppression - thread-level keyboard hook prevents OS system menu conflict',
        'HarfRust text shaping engine (Phase 2) - proper rendering for Arabic, Bengali, Devanagari, and other complex scripts',
        'Image viewer tabs - open PNG, JPEG, GIF, WebP, BMP files directly as image tabs',
        'PDF viewer tabs - native PDF viewing via hayro (pure Rust, no system dependencies)',
        'Background file loading for 5MB+ files with progress indication',
        'Strict line breaks (Obsidian model) - single newlines create line breaks in rendered view',
        'Middle-click to close tabs',
        'Table cell rich text rendering - bold, italic, strikethrough, code, and nesting with click-to-edit in rendered view',
      ],
      improved: [
        'Rendered view performance overhaul - AST caching, viewport culling, block height cache, and lazy estimation for large files',
        'Per-frame O(N) elimination for large documents in rendered view',
        'CSV viewer per-frame allocation fixes (reduced unnecessary reallocation)',
        'TreeViewer (JSON/YAML/TOML) per-frame allocation fixes',
        'Central panel per-frame allocation optimizations',
      ],
      fixed: [
        'macOS .md file association not opening in Ferrite (#102)',
        'Windows IME candidate box positioning (#103) - applied layer_transform_to_global() to IME coordinates',
        'Custom font crash on Linux (#114)',
        'Linux Cinnamon desktop dialog detection (#116)',
        'Table inline formatting preservation and rendering (#117)',
        'Terminal CJK double-width character overlap (#110) - unicode-width crate, 2-column cursor advancement',
        'Windows 11 borderless window offset (#112) - .with_transparent(true) DWM workaround',
        'Slow rendering on large documents (#105) - AST caching and viewport culling',
        'Table inline formatting lost on cell edit',
        'Table strikethrough not rendering in cells',
        'Table code spans not rendering in cells',
        'Table nested formatting (bold+italic) not rendering',
        'CSV viewer unnecessary per-frame parsing',
      ],
    },
  },
  {
    version: '0.2.7',
    date: 'March 2026',
    highlights: [
      'Wikilinks & backlinks panel',
      'Vim mode (optional modal editing)',
      'GitHub-style callouts',
      'Visual frontmatter editor',
      'Welcome view on first run',
      'Unicode complex script support (Phase 1)',
      '20+ bug fixes',
    ],
    changes: {
      added: [
        'Wikilinks support - [[target]] and [[target|display]] syntax with click-to-navigate',
        'Backlinks panel - files linking to current file with graph-based indexing',
        'Vim mode - Normal/Insert/Visual modes with hjkl, dd, yy, p, /search, mode indicator',
        'GitHub-style callouts - [!NOTE], [!TIP], [!WARNING], [!CAUTION], [!IMPORTANT] with collapsible blocks',
        'Welcome view on first run with theme, language, and editor configuration (community PR #80)',
        'Check for updates button in Settings → About (manual, offline-first)',
        'Visual frontmatter editor - FM tab in outline panel with key-value form interface',
        'Ctrl+Mouse Wheel zoom (Ctrl+Scroll for zoom in/out)',
        'Large file detection (>10MB warning) and lazy CSV row parsing',
        'Single-instance protocol - files open as tabs in existing window instead of new process',
        'Unicode complex script font loading for 11 script families (Arabic, Bengali, Devanagari, Thai, Hebrew, Tamil, Georgian, Armenian, Ethiopic, other Indic, Southeast Asian)',
        'Script font preferences UI in Settings → Additional Scripts',
        'Column resizing for table editing with draggable separators',
        'Format toolbar moved to collapsible bottom bar, side panel toggle strip',
        'Windows MSI installer overhaul with optional file associations, context menu, add-to-PATH',
        'PortableApps.com Format packaging with automated CI build',
        'Nix/NixOS flake support for reproducible builds (community PR #92)',
        'German and Japanese localization',
        'macOS .app bundle in CI (fixes Gatekeeper blocking)',
      ],
      improved: [
        'Syntax highlighting no longer re-parses every frame (cache-first approach)',
        'Scrollbar accuracy with word wrap (cumulative y-offsets, binary search drag)',
        'Smooth scrollbar height that lerps toward actual value (no jumping)',
        'Flowchart modularized from 3600-line monolith into 12 focused modules',
        'Window controls redesigned with crisp hand-painted icons',
        'Table backgrounds use actual rendered row dimensions (no gaps/overlap)',
        'Text selection preserved after formatting operations',
        'Rendered mode copy no longer inserts phantom spaces',
      ],
      fixed: [
        'Crash on large selection delete with word wrap (capacity overflow panic)',
        'IME backspace deleting editor text during CJK composition (#91)',
        'Light mode text invisible (strong text color fix)',
        'List item text not wrapping in rendered/split view (#82)',
        'Empty list item causing heading mis-render (#82)',
        'CJK rendering after restart with explicit font preference (#76)',
        'Images not displaying in rendered mode',
        'Binary file crash when opening PNG/JPEG as text',
        'Session recovery dialog after "Don\'t Save"',
        'Task list checkboxes showing as ASCII instead of UI elements (#95)',
        'Open Folder not working in Flatpak (#96)',
        'Linux file dialog portal failure detection (#97)',
        'Windows IME backspace deleting editor text (#91)',
        'View mode bar hidden on unsupported file types',
        'CJK fonts not loading on language switch',
      ],
    },
  },
  {
    version: '0.2.6.1',
    date: 'February 6, 2026',
    highlights: [
      'First code-signed release',
      'Integrated terminal workspace',
      'Productivity hub',
      'Major app.rs refactoring into ~15 modules',
    ],
    changes: {
      added: [
        'Integrated terminal workspace - multiple sessions, tiling, splits, theming (community PR #74)',
        'Productivity hub - quick-access panel for common tasks (community PR #74)',
        'Code signing - Windows artifacts signed via SignPath.io, no more SmartScreen warnings',
        'Tab drag reorder with visual drop target indicator',
        'File watcher auto-reload for externally modified files',
        'Undo after text formatting (Bold, Italic, etc.)',
        'Multiline blockquote rendering - merged into continuous blocks',
        'CJK first-line paragraph indentation (Chinese 2em, Japanese 1em)',
        'Memory diagnostics with [MEM] log messages at startup',
      ],
      improved: [
        'App.rs refactoring - split 7,600+ line monolith into ~15 focused modules',
        'Lazy CJK font loading - reduced startup memory by ~80MB',
        'System locale detection - preloads only the one CJK font you likely need',
        'Settings CJK change no longer loads all fonts',
      ],
      fixed: [
        'Duplicate Line (Ctrl+Shift+D) wrong position',
        'Keyboard shortcut conflict: Ctrl+Shift+E (ExportHtml changed to Ctrl+Shift+X)',
        'Maximize/restore button icon disappearing on hover',
        'Drag-drop image inserting at wrong position',
        'Smart paste not working (stale cursor state)',
        'Auto-save toggle inconsistency',
        'Rendered mode raw editor stuttering on mode switch',
        'Keyboard shortcut conflict: Ctrl+Backtick (FormatInlineCode changed to Ctrl+Shift+Backtick)',
        'CJK font crash on startup (#63)',
        'Portable Windows startup crash (#57)',
      ],
    },
  },
  {
    version: '0.2.6',
    date: 'January 26, 2026',
    highlights: [
      'Custom FerriteEditor - ground-up rewrite',
      '100x less RAM (4MB file: 15MB vs 1.5GB)',
      'Multi-cursor & code folding now work',
      'Virtual scrolling + rope buffer',
    ],
    changes: {
      added: [
        'FerriteEditor - custom text editor built with egui drawing primitives',
        'Virtual scrolling - only renders visible lines + buffer',
        'Rope-based buffer (ropey) - O(log n) text operations',
        'Full selection support - click-drag, Shift+Arrow, double/triple-click, Ctrl+A',
        'Multi-cursor editing - Ctrl+Click to add cursors',
        'Code folding with gutter indicators',
        'IME support - Chinese Pinyin, Japanese Romaji, Korean Hangul',
        'Bracket matching - windowed O(window) algorithm',
        'Document navigation buttons - Top/Middle/Bottom jump',
        'Semi-transparent selection highlighting',
        'Cursor blink with theme-aware colors',
        'Auto-focus new documents',
      ],
      improved: [
        'Editor architecture - 2735 lines split into focused modules (43% reduction)',
        'Memory: 4MB file adds ~15MB (was 1.5GB with egui TextEdit)',
        'Search debouncing (150ms) - no more search on every keystroke',
        'Large file optimizations - hash-based modification detection, reduced undo stack',
        'Bracket matching - windowed ~20KB extraction (was 4.8GB/sec allocation)',
        'Format toolbar connected to FerriteEditor buffer',
        'Outline panel and minimap integrated with new scroll system',
        'Font settings dynamically update editor',
      ],
      fixed: [
        'Critical: 4MB file causing 1.8GB RAM usage (#45)',
        'Per-frame document cloning for undo (240MB/sec allocation)',
        'Case-insensitive search copying entire document',
        'Memory not released on tab close',
        'Text jumping to next line when typing at end',
        'Cannot scroll to bottom of large files',
        'Outline/Minimap cursor landing wrong line',
        'Search highlight drift on wrapped lines',
        'Box drawing characters (U+2500-U+257F) as squares',
        'File browser context menu doubled icons',
        'Windows Start Menu pixelated icon',
      ],
    },
  },
  {
    version: '0.2.5.2',
    date: 'January 20, 2026',
    highlights: [
      'Delete Line & Move Line shortcuts',
      'macOS file type associations',
      'Windows MSI installer & portable build',
      'Linux RPM package support',
    ],
    changes: {
      added: [
        'Delete Line shortcut (Cmd/Ctrl+D)',
        'Move Line Up/Down (Alt+Up/Down)',
        'macOS Finder "Open With" integration (.md, .json, .yaml, .toml, .txt)',
        'Windows portable build for USB drives',
        'Windows MSI installer with Start Menu shortcut',
        'Linux RPM package for Fedora/RHEL/CentOS',
      ],
      improved: [
        'I18n audit - replaced hardcoded strings with translation keys',
        'Removed ~200 orphaned translation keys',
        'Locale files now have consistent structure',
      ],
      fixed: [
        'Ctrl+X cutting entire document when nothing selected',
        'Linux window drag getting mouse stuck',
        'Split mode cursor position issues',
        'macOS modifier tooltips (now shows Cmd instead of Ctrl)',
        'Semantic minimap highlight accuracy',
      ],
    },
  },
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
