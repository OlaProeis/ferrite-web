<script setup lang="ts">
useSeoMeta({
  title: 'Features - Ferrite',
  description: 'Discover what makes Ferrite different: native Mermaid diagrams, semantic minimap, CSV viewing, and more. This is a work in process, and not all features of mermaid.js currently work',
  ogTitle: 'Features - Ferrite',
  ogDescription: 'Discover what makes Ferrite different: native Mermaid diagrams, semantic minimap, CSV viewing, and more.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

// Add breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Features' },
])

const activeFeature = ref<string | null>(null)
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
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

    <!-- Bento Grid -->
    <section class="pb-20">
      <div class="container-wide">
        <div class="grid grid-cols-12 gap-4 lg:gap-6">
          
          <!-- Large: Mermaid Diagrams -->
          <div class="col-span-12 lg:col-span-8 card-hover overflow-hidden group relative min-h-[320px]">
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
              
              <!-- Mini diagram preview -->
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

          <!-- Stats: Memory -->
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">~72</span>
            <span class="text-sm text-text-tertiary">MB idle RAM</span>
          </div>

          <!-- Stats: Startup -->
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">&lt;1s</span>
            <span class="text-sm text-text-tertiary">cold start</span>
          </div>

          <!-- Medium: Split View -->
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

          <!-- Medium: Semantic Minimap -->
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

          <!-- Medium: CSV Viewer -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
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
              delimiter (comma, tab, semicolon, pipe).
            </p>
          </div>

          <!-- Wide: Editor Features List -->
          <div class="col-span-12 lg:col-span-6 card-hover p-6 lg:p-8">
            <span class="text-rust text-sm font-mono mb-4 block">// editing</span>
            <h3 class="font-display font-bold text-xl text-text-primary mb-6">
              Thoughtful editing experience
            </h3>
            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">WYSIWYG markdown</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Zen mode (F11)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Auto-save</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Session restore</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Custom shortcuts</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Snippets</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Quick switcher</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Find in files</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">TOC generation</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Drag & drop images</span>
              </div>
            </div>
          </div>

          <!-- Wide: Dev Tools List -->
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
                <span class="text-sm text-text-secondary">Multi-encoding support</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">JSON/YAML/TOML tree viewer</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">Live pipeline panel</span>
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
                <span class="text-sm text-text-secondary">HTML export</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">CLI support</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-rust" />
                <span class="text-sm text-text-secondary">CJK lazy loading</span>
              </div>
            </div>
          </div>

          <!-- Accent: CJK Support -->
          <div class="col-span-12 md:col-span-6 lg:col-span-4 card-hover p-6 lg:p-8 bg-gradient-to-br from-ferrite-surface to-ferrite-surface-elevated">
            <span class="text-3xl mb-3 block">&#x4E2D;&#x6587; &#x65E5;&#x672C;&#x8A9E; &#xD55C;&#xAE00;</span>
            <h3 class="font-display font-semibold text-lg text-text-primary mb-2">
              CJK Support
            </h3>
            <p class="text-text-secondary text-sm">
              Full Chinese, Japanese, Korean rendering. 
              Custom font selection for regional glyph preferences.
            </p>
          </div>

          <!-- Accent: i18n -->
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

          <!-- Stats: Diagram Types -->
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">11</span>
            <span class="text-sm text-text-tertiary">diagram types</span>
          </div>

          <!-- Stats: Platforms -->
          <div class="col-span-6 lg:col-span-2 card-hover p-6 flex flex-col items-center justify-center text-center">
            <span class="text-4xl lg:text-5xl font-display font-bold text-rust mb-2">3</span>
            <span class="text-sm text-text-tertiary">platforms</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Hidden Gems / Power User Tips -->
    <FeatureTipsSection />

    <!-- Honest Limitations -->
    <section class="section bg-ferrite-surface/30">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4 text-center">
          Honest limitations
        </h2>
        <p class="text-text-secondary text-center mb-8">
          We're building in public. Here's what's blocked, incomplete, or not yet implemented:
        </p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              Multi-cursor incomplete
            </h4>
            <p class="text-sm text-text-tertiary">Blocked by egui's TextEdit. Cursor rendering works, text operations don't. Fix: v0.3.0 custom editor.</p>
          </div>
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              Code folding incomplete
            </h4>
            <p class="text-sm text-text-tertiary">Detection works, but text hiding not possible in egui. Fix: v0.3.0 custom editor.</p>
          </div>
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              IME positioning
            </h4>
            <p class="text-sm text-text-tertiary">Chinese/Japanese IME candidate window may appear offset from cursor.</p>
          </div>
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              Large files (&gt;10MB)
            </h4>
            <p class="text-sm text-text-tertiary">Performance degrades. Lazy loading and view-only mode planned for v0.2.6.</p>
          </div>
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              No code signing yet
            </h4>
            <p class="text-sm text-text-tertiary">Windows Defender may flag Ferrite as suspicious. Code signing is urgent priority for v0.2.6.</p>
          </div>
          <div class="card p-5">
            <h4 class="font-semibold text-text-primary mb-2 flex items-center gap-2">
              <span class="text-amber-500">&#x26A0;</span>
              No LaTeX math yet
            </h4>
            <p class="text-sm text-text-tertiary">Math rendering ($...$) not implemented. Planned for v0.4.0.</p>
          </div>
        </div>

        <p class="text-center text-sm text-text-tertiary mt-6">
          These limitations are documented in our 
          <a href="https://github.com/OlaProeis/ferrite/blob/main/ROADMAP.md" target="_blank" rel="noopener noreferrer" class="text-rust hover:underline">roadmap</a>.
          Many will be addressed in the custom editor widget planned for v0.3.0.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4">
          Try it yourself
        </h2>
        <p class="text-text-secondary mb-8">
          It's free, it's fast, and it works offline.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  </div>
</template>
