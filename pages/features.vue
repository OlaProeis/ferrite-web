<script setup lang="ts">
useSeoMeta({
  title: 'Features - Ferrite',
  description: 'Discover what makes Ferrite different: custom editor engine, native Mermaid diagrams, command palette, image & PDF viewers, text shaping, and more — all in native Rust.',
  ogTitle: 'Features - Ferrite',
  ogDescription: 'A native Rust markdown editor with Mermaid diagrams, command palette, image & PDF viewers, text shaping, and more.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Features' },
])
</script>

<template>
  <div>
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="py-16 lg:py-24">
      <div class="container-wide">
        <div class="max-w-3xl">
          <span class="badge-rust mb-4">What's Inside</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-6">
            Built different
          </h1>
          <p class="text-xl text-text-secondary leading-relaxed">
            No Electron. No web views. Just native Rust code that launches in milliseconds 
            and sips memory while you write.
          </p>
        </div>
      </div>
    </section>

    <!-- What's New in v0.3.0 -->
    <section class="section bg-gradient-to-b from-rust/5 to-emerald-500/5">
      <div class="container-narrow">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-2 mb-4">
            <span class="badge-rust">v0.3.0</span>
            <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded">LATEST</span>
          </div>
          <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
            Platform Refresh &amp; WYSIWYG Editing
          </h2>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Rendered edit session (WYSIWYG block switching), PDF &amp; HTML export, executable code blocks,
            Mermaid first wave, Phosphor icons, split-view scroll sync — on eframe/egui 0.34.2 with Rust 1.92.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-rust flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">Rendered Edit Session</h4>
            <p class="text-sm text-text-tertiary">One click opens any WYSIWYG block — heading, paragraph, list item, or table cell. Previous block commits automatically. True WYSIWYG.</p>
          </div>
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">PDF &amp; HTML Export</h4>
            <p class="text-sm text-text-tertiary">Export to PDF (page size, margins, link annotations) and themed HTML (Mermaid SVG, syntax-highlighted code). Print preview included.</p>
          </div>
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">Executable Code Blocks</h4>
            <p class="text-sm text-text-tertiary">Run shell and Python snippets directly in the editor. Inline ANSI-colored output, exit status, timeout, Stop control, and first-run consent.</p>
          </div>
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">Mermaid First Wave</h4>
            <p class="text-sm text-text-tertiary">Insert toolbar with diagram templates, inline validation with squiggles, flowchart extra shapes, state fork/join/history, and major edge routing improvements.</p>
          </div>
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="12" y1="3" x2="12" y2="21"/>
                <path d="M3 12h9"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">Split-View Scroll Sync</h4>
            <p class="text-sm text-text-tertiary">Raw editor and rendered preview stay aligned while scrolling. Source line + fraction anchors keep code blocks and Mermaid diagrams in sync.</p>
          </div>
          <div class="card p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4 class="font-semibold text-text-primary mb-2">Phosphor Icons &amp; egui 0.34</h4>
            <p class="text-sm text-text-tertiary">Full UI refresh with Phosphor icon set. Platform bump to eframe/egui 0.34.2 and Rust 1.92 MSRV with skrifa + vello_cpu text backend.</p>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/changelog" class="link text-sm font-medium">
            View full changelog &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section class="py-16 lg:py-24">
      <div class="container-wide">
        <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <span class="badge-rust mb-4">Core Features</span>
          <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
            Everything you need, nothing you don't
          </h2>
        </div>

        <div class="grid grid-cols-12 gap-4 lg:gap-6">

          <!-- Hero: The Editor Engine -->
          <div class="col-span-12 card-hover overflow-hidden group relative min-h-[300px]">
            <div class="absolute inset-0 bg-gradient-to-br from-rust/10 to-emerald-500/5" />
            <div class="relative p-6 lg:p-8 h-full flex flex-col">
              <span class="text-rust text-sm font-mono mb-2">// the engine</span>
              <h2 class="font-display font-bold text-2xl lg:text-3xl text-text-primary mb-3">
                Custom Editor, Built from Scratch
              </h2>
              <p class="text-text-secondary mb-6 max-w-2xl">
                FerriteEditor is a ground-up text editor built with egui drawing primitives. 
                <span class="text-rust font-semibold">100x less memory</span> than the previous egui TextEdit &mdash; 
                a 4MB file uses ~15MB (was 1.5GB). Rope-based buffer with O(log n) text operations.
              </p>
              <div class="mt-auto flex gap-3 flex-wrap">
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">virtual scrolling</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">multi-cursor</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">code folding</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">IME support</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">bracket matching</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">word wrap</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">undo/redo</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">syntax highlighting</span>
              </div>
            </div>
          </div>

          <!-- Mermaid Diagrams -->
          <div class="col-span-12 lg:col-span-8 card-hover overflow-hidden group relative min-h-[260px]">
            <div class="absolute inset-0 bg-gradient-to-br from-rust/5 to-transparent" />
            <div class="relative p-6 lg:p-8 h-full flex flex-col">
              <span class="text-rust text-sm font-mono mb-2">// diagrams</span>
              <h2 class="font-display font-bold text-2xl lg:text-3xl text-text-primary mb-3">
                Native Mermaid Rendering
              </h2>
              <p class="text-text-secondary mb-6 max-w-lg">
                11 diagram types rendered in pure Rust. No JavaScript, no network calls.
                Flowcharts, sequence, state, class, ER, git graph, gantt, and more.
              </p>
              <div class="mt-auto flex gap-3 flex-wrap">
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">flowchart</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">sequence</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">state</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">class</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">ER</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">mindmap</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">gantt</span>
                <span class="px-3 py-1.5 bg-ferrite-surface rounded-lg text-xs font-mono text-text-secondary border border-ferrite-border">+4 more</span>
              </div>
            </div>
          </div>

          <!-- Stats column -->
          <div class="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            <div class="card-hover p-6 flex items-center justify-between">
              <div>
                <span class="text-3xl font-display font-bold text-rust">100x</span>
                <p class="text-sm text-text-tertiary mt-1">less RAM</p>
              </div>
              <div class="text-text-tertiary text-xs text-right">
                4MB file: 15MB<br/>was 1.5GB before
              </div>
            </div>
            <div class="card-hover p-6 flex items-center justify-between">
              <div>
                <span class="text-3xl font-display font-bold text-rust">&lt;1s</span>
                <p class="text-sm text-text-tertiary mt-1">cold start</p>
              </div>
              <div class="text-text-tertiary text-xs text-right">
                native Rust<br/>no Electron
              </div>
            </div>
          </div>

          <!-- Command Palette -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Command Palette</h3>
                <p class="text-sm text-text-tertiary">Alt+Space</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              Fuzzy search across every action. Recent commands, category grouping, 
              and <span class="text-rust">shortcut hints</span> for quick discovery.
            </p>
          </div>

          <!-- Split View -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-rust flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="12" y1="3" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Split View</h3>
                <p class="text-sm text-text-tertiary">Both panes editable</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              Raw markdown on the left, rendered preview on the right. 
              <span class="text-rust">Both are fully editable</span> with complete undo/redo.
            </p>
          </div>

          <!-- Semantic Minimap -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Semantic Minimap</h3>
                <p class="text-sm text-text-tertiary">Actually useful</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              Shows <span class="text-rust">actual heading text</span>, not blurry pixels. 
              Visual markers for code blocks, diagrams, tables, images.
            </p>
          </div>

          <!-- Wikilinks & Backlinks -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Wikilinks &amp; Backlinks</h3>
                <p class="text-sm text-text-tertiary">Note-taking ready</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              <span class="text-rust font-mono text-xs">[[wikilinks]]</span> with click-to-navigate. 
              Backlinks panel shows all files linking to the current document.
            </p>
          </div>

          <!-- Image & PDF Viewers -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Image &amp; PDF Viewers</h3>
                <p class="text-sm text-text-tertiary">Native, in-editor</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              Open images (PNG, JPEG, GIF, WebP, BMP) and PDFs as tabs. 
              <span class="text-rust">Pure Rust</span> PDF rendering via hayro.
            </p>
          </div>

          <!-- CSV/TSV Viewer -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="3" y1="15" x2="21" y2="15"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                  <line x1="15" y1="3" x2="15" y2="21"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">CSV/TSV Viewer</h3>
                <p class="text-sm text-text-tertiary">Rainbow columns</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm">
              Native table view with alternating column colors. Auto-detects 
              delimiter (comma, tab, semicolon, pipe). Lazy parsing for large files.
            </p>
          </div>

          <!-- Editing Experience -->
          <div class="col-span-12 lg:col-span-6 card-hover p-6 lg:p-8">
            <span class="text-rust text-sm font-mono mb-4 block">// editing</span>
            <h3 class="font-display font-bold text-xl text-text-primary mb-6">
              Thoughtful editing experience
            </h3>
            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">WYSIWYG block editing</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Vim mode</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">GitHub-style callouts</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Frontmatter editor</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Zen mode (F11)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Quick note workflow</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Auto-save &amp; session restore</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Custom shortcuts &amp; snippets</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Workspace quick switcher (Ctrl+P)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Search in files (Ctrl+Shift+F)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Split-view scroll sync</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">TOC generation</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Drag &amp; drop images</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">User-configurable accent color</span>
              </div>
            </div>
          </div>

          <!-- Developer Tools -->
          <div class="col-span-12 lg:col-span-6 card-hover p-6 lg:p-8">
            <span class="text-rust text-sm font-mono mb-4 block">// dev tools</span>
            <h3 class="font-display font-bold text-xl text-text-primary mb-6">
              Built for developers
            </h3>
            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Git status indicators</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">40+ syntax languages</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Executable code blocks</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">PDF &amp; HTML export</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Multi-encoding support</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">JSON/YAML/TOML tree viewer</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Integrated terminal</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Document outline</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Word/reading stats</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">CLI support</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Single-instance protocol</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Print preview</span>
              </div>
            </div>
          </div>

          <!-- Unicode & CJK -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8 bg-gradient-to-br from-ferrite-surface to-ferrite-surface-elevated">
            <span class="text-3xl mb-3 block">&#x4E2D;&#x6587; &#x65E5;&#x672C;&#x8A9E; &#xD55C;&#xAE00;</span>
            <h3 class="font-display font-semibold text-lg text-text-primary mb-2">
              Unicode &amp; CJK
            </h3>
            <p class="text-text-secondary text-sm">
              Full Chinese, Japanese, Korean rendering. HarfRust text shaping for Arabic, Bengali, Devanagari, and 11+ script families. 
              Custom font selection per script.
            </p>
          </div>

          <!-- Community Translations -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">&#x1F310;</span>
              <div>
                <h3 class="font-display font-semibold text-lg text-text-primary">Community Translations</h3>
                <p class="text-sm text-text-tertiary">Help us translate</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm mb-4">
              UI translations powered by Weblate. Contribute translations for your language.
            </p>
            <a 
              href="https://hosted.weblate.org/projects/ferrite/" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-rust text-sm hover:underline"
            >
              Join on Weblate &rarr;
            </a>
          </div>

          <!-- Stats: Diagram Types + Platforms -->
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">11</span>
            <span class="text-sm text-text-tertiary">diagram types</span>
          </div>
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">3</span>
            <span class="text-sm text-text-tertiary">platforms</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Hidden Gems / Power User Tips -->
    <FeatureTipsSection />

    <!-- Limitations note + CTA -->
    <section class="section">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4">
          Try it yourself
        </h2>
        <p class="text-text-secondary mb-8">
          It's free, it's fast, and it works offline.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <NuxtLink to="/download" class="btn-primary">
            Download Ferrite
          </NuxtLink>
          <a 
            href="https://github.com/OlaProeis/ferrite" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            View Source
          </a>
        </div>
        <p class="text-sm text-text-tertiary">
          Some features are still in progress: LaTeX math rendering and RTL/bidirectional text are planned for upcoming releases.
          See the <a href="https://github.com/OlaProeis/ferrite/blob/main/ROADMAP.md" target="_blank" rel="noopener noreferrer" class="text-rust hover:underline">roadmap</a> for what's coming next.
        </p>
      </div>
    </section>
  </div>
</template>
