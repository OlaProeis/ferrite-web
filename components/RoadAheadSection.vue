<script setup lang="ts">
const upcomingFeatures = [
  {
    version: 'v0.2.7',
    status: 'next',
    title: 'Code Signing & Polish',
    items: [
      'Code signing (stop Windows Defender false positives)',
      'Executable code blocks (run snippets in preview)',
      'Content blocks / callouts ([!NOTE], [!WARNING])',
      'Vim mode (optional modal editing)',
      'Further memory optimizations for large files',
    ],
  },
  {
    version: 'v0.3.0',
    status: 'planned',
    title: 'Mermaid Crate & Advanced Features',
    items: [
      'Extract Mermaid renderer as standalone Rust crate',
      'SVG and PNG export for diagrams',
      'Wikilinks and backlinks support',
      'Manual diagram layout with drag-to-reposition',
      'Rectangular/column selection (Alt+drag)',
      'Sticky scroll for context headers',
    ],
  },
  {
    version: 'v0.4.0',
    status: 'future',
    title: 'Math & Document Formats',
    items: [
      'Native LaTeX math rendering ($...$ and $$...$$)',
      'Fractions, subscripts, Greek letters, matrices',
      'Read-only DOCX/XLSX viewing (page-less rendering)',
      'OpenDocument (ODT/ODS) support',
    ],
  },
  {
    version: 'v0.5.0+',
    status: 'vision',
    title: 'Modular Architecture',
    items: [
      'Core + Modules design (choose what you need)',
      'Build presets: Full, Slim, Writer',
      'Cloud build service for custom combinations',
      'Plugin ecosystem for community modules',
    ],
  },
]
</script>

<template>
  <section class="section">
    <div class="container-wide">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
        <span class="badge-rust mb-4">The Road Ahead</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          What's missing &amp; what's coming
        </h2>
        <p class="text-lg text-text-secondary">
          Ferrite is under active development. Some features aren't here yet - but we're working on them. 
          We maintain a detailed roadmap on GitHub so you know exactly what to expect.
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rust via-rust/50 to-ferrite-border transform md:-translate-x-1/2" />

          <div v-for="(release, index) in upcomingFeatures" :key="release.version" class="relative mb-12 last:mb-0">
            <div :class="[
              'md:w-1/2',
              index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
            ]">
              <!-- Version badge -->
              <div :class="[
                'absolute left-0 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 md:-translate-x-1/2',
                release.status === 'next' ? 'bg-rust ring-4 ring-rust/20' : 
                release.status === 'planned' ? 'bg-amber-500' : 
                release.status === 'vision' ? 'bg-violet-500' : 'bg-ferrite-border'
              ]" style="top: 1.25rem;" />

              <!-- Card -->
              <div class="card ml-6 md:ml-0">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-sm text-rust font-semibold">{{ release.version }}</span>
                  <span :class="[
                    'text-xs px-2 py-0.5 rounded-full',
                    release.status === 'next' ? 'bg-rust/10 text-rust' : 
                    release.status === 'planned' ? 'bg-amber-500/10 text-amber-500' : 
                    release.status === 'vision' ? 'bg-violet-500/10 text-violet-500' : 'bg-ferrite-surface text-text-tertiary'
                  ]">
                    {{ release.status === 'next' ? 'Up next' : release.status === 'planned' ? 'Planned' : release.status === 'vision' ? 'Vision' : 'Future' }}
                  </span>
                </div>
                <h3 class="font-display font-semibold text-lg text-text-primary mb-3">
                  {{ release.title }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="item in release.items" :key="item" class="flex items-start gap-2 text-sm text-text-secondary">
                    <span class="text-rust mt-0.5">&#x2192;</span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Link to full roadmap -->
        <div class="text-center mt-12">
          <a 
            href="https://github.com/OlaProeis/ferrite/blob/main/ROADMAP.md" 
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm font-medium inline-flex items-center gap-2"
          >
            View full roadmap on GitHub
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
