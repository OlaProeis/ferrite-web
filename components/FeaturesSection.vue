<script setup lang="ts">
</script>

<template>
  <section class="section bg-ferrite-surface/50">
    <div class="container-wide">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
        <span class="badge-rust mb-4">What's Inside</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          Thoughtfully crafted
        </h2>
        <p class="text-lg text-text-secondary">
          Not just another Electron wrapper. Ferrite is built from scratch with native performance in mind.
        </p>
      </div>

      <!-- Bento-ish grid -->
      <div class="grid grid-cols-12 gap-4 lg:gap-6 max-w-5xl mx-auto">
        
        <!-- Mermaid - Wide -->
        <div class="col-span-12 lg:col-span-7 card-hover p-6 lg:p-8 group">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-rust flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
                <line x1="15" y1="3" x2="15" y2="21"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="3" y1="15" x2="21" y2="15"/>
              </svg>
            </div>
            <div>
              <h3 class="font-display font-semibold text-lg text-text-primary">Native Mermaid Diagrams</h3>
              <p class="text-sm text-text-tertiary">11 diagram types, no JavaScript</p>
            </div>
          </div>
          <p class="text-text-secondary text-sm leading-relaxed">
            Flowcharts, sequence diagrams, state machines, class diagrams, ER diagrams, and more - 
            all rendered in pure Rust. Works offline, renders instantly.
          </p>
        </div>

        <!-- Stats column -->
        <div class="col-span-6 lg:col-span-5 grid grid-rows-2 gap-4 lg:gap-6">
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

        <!-- Semantic Minimap -->
        <div class="col-span-6 lg:col-span-4 card-hover p-6 group">
          <div class="feature-icon mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>
          <h3 class="font-display font-semibold text-text-primary mb-1">Semantic Minimap</h3>
          <p class="text-sm text-text-secondary">
            Shows actual heading text, not blurry pixels. Navigate large documents at a glance.
          </p>
        </div>

        <!-- Split View -->
        <div class="col-span-6 lg:col-span-4 card-hover p-6 group">
          <div class="feature-icon mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <line x1="12" y1="3" x2="12" y2="21"/>
            </svg>
          </div>
          <h3 class="font-display font-semibold text-text-primary mb-1">Dual-Pane Editing</h3>
          <p class="text-sm text-text-secondary">
            Raw and rendered views side by side. Both fully editable with undo/redo.
          </p>
        </div>

        <!-- Git -->
        <div class="col-span-12 lg:col-span-4 card-hover p-6 group">
          <div class="feature-icon mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            </svg>
          </div>
          <h3 class="font-display font-semibold text-text-primary mb-1">Git Integration</h3>
          <p class="text-sm text-text-secondary">
            Visual status indicators for modified, added, and untracked files.
          </p>
        </div>

        <!-- More features list -->
        <div class="col-span-12 card p-6 lg:p-8 bg-ferrite-surface-elevated/50">
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary justify-center">
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-emerald-500"></span>
              Multi-cursor editing
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-emerald-500"></span>
              Code folding
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              40+ syntax languages
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              Multi-encoding support
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              CSV/TSV viewer
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              JSON/YAML/TOML tree view
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              IME support (CJK)
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              Bracket matching
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              Session restore
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-rust"></span>
              Zen mode
            </span>
          </div>
        </div>
      </div>

      <!-- View All Features Link -->
      <div class="text-center mt-10">
        <NuxtLink to="/features" class="btn-secondary">
          Explore all features
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
