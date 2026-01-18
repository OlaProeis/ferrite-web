<script setup lang="ts">
useSeoMeta({
  title: 'About - Ferrite',
  description: 'Learn about Ferrite, the fast native Markdown editor built with Rust and AI-assisted development.',
  ogTitle: 'About Ferrite',
  ogDescription: 'Learn about Ferrite, the fast native Markdown editor built with Rust and AI-assisted development.',
})

const timeline = [
  {
    date: 'December 2025',
    title: 'The Idea',
    description: 'Saw Microsoft add Copilot to Notepad and thought: why not build a proper native editor for Markdown and JSON files? Started building with AI-assisted development.',
  },
  {
    date: 'Dec 20, 2025',
    title: 'v0.1.0 - First Release',
    description: 'First public release. Multi-tab editing, WYSIWYG markdown, JSON/YAML tree viewers, workspace mode, and custom borderless UI.',
  },
  {
    date: 'Jan 9, 2026',
    title: 'v0.2.0 - Major Features',
    description: 'Split view, native Mermaid diagrams (11 types), editor minimap, Git integration, Zen mode, auto-save, and session persistence.',
  },
  {
    date: 'Jan 10-12, 2026',
    title: 'v0.2.1-0.2.3 - Rapid Iteration',
    description: 'Mermaid improvements, CJK font support, CLI arguments, editor productivity features (Go to Line, Duplicate, Move Line, Smart Paste).',
  },
  {
    date: 'Jan 16, 2026',
    title: 'v0.2.5 - The Mermaid Update',
    description: 'Mermaid refactor, CSV viewer, i18n infrastructure, semantic minimap, keyboard customization, drag-drop images, snippets. Hacker News launch generated tons of feedback.',
  },
  {
    date: 'Jan 17-18, 2026',
    title: 'v0.2.5.1 - Polish',
    description: 'Memory optimization (250MB → 72MB), multi-encoding support, CPU optimization (10% → <1% idle), cursor positioning fixes.',
  },
]
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section">
      <div class="container-narrow">
        <div class="text-center mb-12">
          <span class="badge-rust mb-4">About</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-6">
            The story of Ferrite
          </h1>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            A passion project built at the intersection of native development 
            and AI-assisted programming.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="pb-20">
      <div class="container-narrow">
        <div class="card p-8 lg:p-12 bg-gradient-to-br from-ferrite-surface to-ferrite-surface-elevated">
          <h2 class="font-display font-bold text-display-sm text-text-primary mb-6">
            Why Ferrite exists
          </h2>
          <div class="prose prose-lg text-text-secondary space-y-4">
            <p>
              It started with Notepad. When Microsoft added Copilot to Notepad, I thought: 
              "I could build something better." Working with AI and Markdown files daily, 
              I wanted an editor that understood both - and didn't require Electron's bloat.
            </p>
            <p>
              What began as "a Notepad clone with Markdown support" quickly snowballed. 
              JSON/YAML tree viewers. Mermaid diagrams. Git integration. A Hacker News post 
              generated a flood of feature requests. The project grew from idea to 700+ GitHub 
              stars in under a month.
            </p>
            <p>
              The name "Ferrite" comes from iron oxide - a nod to Rust (the language) 
              and the strength we aim to bring to the editing experience. Built entirely 
              through AI-assisted development, it's proof that production software can be 
              created this way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Story -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow">
        <div class="text-center mb-12">
          <span class="badge-rust mb-4">Unique Approach</span>
          <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
            Built with AI
          </h2>
          <p class="text-lg text-text-secondary">
            Ferrite's entire codebase was developed through AI-assisted programming.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-3">How it works</h3>
            <p class="text-sm text-text-secondary leading-relaxed">
              Every line of Ferrite's code was written through conversation with AI. 
              A human developer provides direction, reviews output, and guides the 
              architecture - while AI handles the actual code generation.
            </p>
          </div>
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-3">Why share this?</h3>
            <p class="text-sm text-text-secondary leading-relaxed">
              We believe in transparency. AI-assisted development is the future, and 
              Ferrite demonstrates that production-quality software can be built this way. 
              The dev blog documents this journey.
            </p>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/blog" class="btn-secondary">
            Read the development blog
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-12 text-center">
          Development Timeline
        </h2>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ferrite-border md:-translate-x-px" />

          <!-- Timeline items -->
          <div class="space-y-8">
            <div
              v-for="(item, index) in timeline"
              :key="item.date"
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
            >
              <!-- Content -->
              <div class="flex-1 ml-12 md:ml-0" :class="index % 2 === 0 ? 'md:text-right' : ''">
                <div class="card">
                  <span class="text-xs text-rust font-mono mb-2 block">{{ item.date }}</span>
                  <h3 class="font-display font-semibold text-text-primary mb-2">{{ item.title }}</h3>
                  <p class="text-sm text-text-secondary">{{ item.description }}</p>
                </div>
              </div>

              <!-- Dot -->
              <div class="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-rust shadow-glow md:-translate-x-1.5" />

              <!-- Spacer for alignment -->
              <div class="hidden md:block flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Long-term Vision -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow">
        <div class="text-center mb-12">
          <span class="badge-rust mb-4">Looking Ahead</span>
          <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
            Long-term Vision
          </h2>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Ferrite is evolving toward a modular architecture. Instead of one monolithic app, 
            we want you to choose exactly what you need.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <!-- Modular Core -->
          <div class="card p-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-rust flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-text-primary mb-2">Modular Core</h3>
            <p class="text-sm text-text-secondary">
              A lightweight core that handles text editing, files, and theming. Everything else 
              becomes optional. Don't need Mermaid diagrams? Don't include them.
            </p>
          </div>

          <!-- Build Presets -->
          <div class="card p-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-rust flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-text-primary mb-2">Build Presets</h3>
            <p class="text-sm text-text-secondary">
              Choose from presets like <span class="text-rust">Full</span>, 
              <span class="text-rust">Slim</span>, or <span class="text-rust">Writer</span>. 
              Each optimized for different workflows and binary sizes.
            </p>
          </div>

          <!-- Cloud Build -->
          <div class="card p-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-rust flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-text-primary mb-2">Cloud Build Service</h3>
            <p class="text-sm text-text-secondary">
              Want a custom combination? Select your features, and we'll build your 
              personalized binary in the cloud. Watch the build live or get notified when it's ready.
            </p>
          </div>
        </div>

        <!-- Plugin ecosystem note -->
        <div class="card p-6 bg-ferrite-surface-elevated/50 text-center">
          <p class="text-sm text-text-secondary">
            <span class="text-rust font-semibold">Future:</span> A plugin ecosystem where 
            the community can contribute modules. Since Ferrite is open source, anyone can 
            build and share their own features.
          </p>
        </div>

        <p class="text-center text-xs text-text-tertiary mt-6">
          This is where we're heading - implementation details are still being refined.
        </p>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-8 text-center">
          Built with
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="card text-center py-8">
            <div class="text-2xl font-bold text-gradient mb-2">Rust</div>
            <div class="text-xs text-text-tertiary">Core application</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-2xl font-bold text-gradient mb-2">eframe</div>
            <div class="text-xs text-text-tertiary">Native windowing</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-2xl font-bold text-gradient mb-2">egui</div>
            <div class="text-xs text-text-tertiary">GUI framework</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-2xl font-bold text-gradient mb-2">Claude</div>
            <div class="text-xs text-text-tertiary">AI assistant</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contributing -->
    <section class="section">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4">
          Want to contribute?
        </h2>
        <p class="text-text-secondary mb-8 max-w-xl mx-auto">
          Ferrite is open source and welcomes contributions. Whether it's bug reports, 
          feature requests, or code contributions - we'd love to hear from you.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/OlaProeis/Ferrite" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <a 
            href="https://github.com/OlaProeis/Ferrite/blob/main/CONTRIBUTING.md" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            Contributing Guide
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
