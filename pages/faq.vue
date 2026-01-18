<script setup lang="ts">
useSeoMeta({
  title: 'FAQ - Ferrite',
  description: 'Frequently asked questions about Ferrite, the fast native Markdown editor built with Rust.',
  ogTitle: 'FAQ - Ferrite',
  ogDescription: 'Frequently asked questions about Ferrite, the fast native Markdown editor built with Rust.',
})

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Ferrite?',
        a: 'Ferrite is a fast, native Markdown editor built with Rust. Unlike Electron-based editors, it uses native code for maximum performance - launching in under a second and using minimal memory.',
      },
      {
        q: 'Is Ferrite free?',
        a: 'Yes! Ferrite is completely free and open source under the MIT license. No subscriptions, no paywalls, no feature gates.',
      },
      {
        q: 'What platforms does Ferrite support?',
        a: 'Ferrite runs on Windows 10+, macOS 11+ (both Intel and Apple Silicon), and Linux (Ubuntu 20.04+, Fedora 35+, and other distributions).',
      },
      {
        q: 'Why "Ferrite"?',
        a: 'Ferrite (iron oxide) is a nod to Rust - the programming language used to build the editor. It represents the strength and durability we aim to bring to the editing experience.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'Why Rust instead of Electron?',
        a: 'Electron apps bundle an entire Chromium browser, leading to high memory usage (300MB+) and slower startup. Rust compiles to native code, giving us ~72MB memory usage and sub-second startup times.',
      },
      {
        q: 'Is my data stored locally?',
        a: 'Yes, 100%. Ferrite stores all your files locally on your computer. We don\'t have servers, accounts, or cloud storage. Your data never leaves your machine.',
      },
      {
        q: 'Does Ferrite work offline?',
        a: 'Absolutely. Ferrite is entirely offline-capable. All features including Mermaid diagrams, syntax highlighting, and rendering work without an internet connection.',
      },
      {
        q: 'What file formats does Ferrite support?',
        a: 'Ferrite supports Markdown (.md), JSON, YAML, TOML, CSV/TSV files with specialized viewers, and plain text files. We\'re working on more formats for future releases.',
      },
      {
        q: 'Does Ferrite support plugins?',
        a: 'Not yet, but a plugin system is on our roadmap for v0.5.0+. We\'re designing a modular architecture where features can be added or removed based on your needs.',
      },
    ],
  },
  {
    category: 'Features',
    questions: [
      {
        q: 'Does Ferrite support LaTeX math?',
        a: 'Not yet. Native LaTeX math rendering is planned for v0.4.0. In the meantime, you can use Mermaid diagrams for visualizations.',
      },
      {
        q: 'Can I sync between devices?',
        a: 'Ferrite doesn\'t have built-in sync, but you can use any file sync service (Dropbox, OneDrive, iCloud, Syncthing) since your files are just local markdown files.',
      },
      {
        q: 'Does Ferrite support Vim keybindings?',
        a: 'Vim mode is planned for v0.2.6. Stay tuned!',
      },
      {
        q: 'What Mermaid diagram types are supported?',
        a: 'Ferrite supports 11 diagram types: flowchart, sequence, state, class, ER, pie, git graph, gantt, mindmap, timeline, and journey. All rendered natively in Rust without JavaScript.',
      },
    ],
  },
  {
    category: 'Troubleshooting',
    questions: [
      {
        q: 'Windows Defender flags Ferrite as suspicious',
        a: 'This is a known issue with unsigned Rust applications. We\'re working on code signing for v0.2.6. For now, you can click "More info" then "Run anyway" or add an exception in Windows Defender.',
      },
      {
        q: 'macOS won\'t let me open Ferrite',
        a: 'Right-click on Ferrite and select "Open" from the context menu, then click "Open" in the dialog. Alternatively, go to System Preferences > Security & Privacy and click "Open Anyway".',
      },
      {
        q: 'Large files are slow',
        a: 'Files over 10MB may experience slower performance. We\'re implementing lazy loading and view-only mode for large files in v0.2.6.',
      },
      {
        q: 'IME candidate window appears in wrong position',
        a: 'This is a known limitation with Chinese/Japanese/Korean input methods. We\'re tracking this issue and working on improvements.',
      },
    ],
  },
]

const openItems = ref<Set<string>>(new Set())

const toggleItem = (id: string) => {
  if (openItems.value.has(id)) {
    openItems.value.delete(id)
  } else {
    openItems.value.add(id)
  }
}
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section bg-gradient-to-b from-ferrite-surface/50 to-transparent">
      <div class="container-wide">
        <div class="max-w-3xl mx-auto text-center">
          <span class="badge-rust mb-4">FAQ</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p class="text-lg text-text-secondary">
            Everything you need to know about Ferrite. Can't find an answer? 
            <a href="https://github.com/OlaProeis/Ferrite/discussions" target="_blank" rel="noopener noreferrer" class="link">Ask in our discussions</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Sections -->
    <section class="pb-20">
      <div class="container-narrow">
        <div class="space-y-12">
          <div v-for="category in faqs" :key="category.category">
            <h2 class="font-display font-bold text-xl text-text-primary mb-6">
              {{ category.category }}
            </h2>
            <div class="space-y-3">
              <div 
                v-for="(item, index) in category.questions" 
                :key="`${category.category}-${index}`"
                class="card overflow-hidden"
              >
                <button
                  @click="toggleItem(`${category.category}-${index}`)"
                  class="w-full flex items-center justify-between p-5 text-left hover:bg-ferrite-surface-elevated/50 transition-colors"
                >
                  <span class="font-medium text-text-primary pr-4">{{ item.q }}</span>
                  <svg 
                    class="w-5 h-5 text-text-tertiary shrink-0 transition-transform duration-200"
                    :class="{ 'rotate-180': openItems.has(`${category.category}-${index}`) }"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-96"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div 
                    v-if="openItems.has(`${category.category}-${index}`)"
                    class="px-5 pb-5 overflow-hidden"
                  >
                    <p class="text-text-secondary text-sm leading-relaxed border-t border-ferrite-border pt-4">
                      {{ item.a }}
                    </p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Still have questions? -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-xl text-text-primary mb-4">
          Still have questions?
        </h2>
        <p class="text-text-secondary mb-8">
          We're here to help. Reach out through any of these channels.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/OlaProeis/Ferrite/discussions"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Discussions
          </a>
          <a 
            href="https://github.com/OlaProeis/Ferrite/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            Report an Issue
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
