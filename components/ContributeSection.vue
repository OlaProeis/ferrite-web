<script setup lang="ts">
const contributions = [
  {
    icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
    title: 'Code',
    description: 'Fix bugs, add features, improve performance. Rust experience welcome but not required.',
    link: 'https://github.com/OlaProeis/ferrite',
    linkText: 'View issues',
  },
  {
    icon: 'M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6',
    title: 'Translate',
    description: 'Help translate Ferrite into your language. We use Weblate for community contributions.',
    link: 'https://hosted.weblate.org/projects/ferrite/',
    linkText: 'Join Weblate',
  },
  {
    icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    title: 'Feedback',
    description: 'Report bugs, suggest features, share your workflow. Every issue helps.',
    link: 'https://github.com/OlaProeis/ferrite/issues',
    linkText: 'Open an issue',
  },
  {
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'Mermaid',
    description: 'We\'re extracting the Mermaid renderer as a standalone crate. Help us test edge cases.',
    link: 'https://github.com/OlaProeis/ferrite/blob/main/docs/mermaid-crate-plan.md',
    linkText: 'Read the plan',
  },
]
</script>

<template>
  <section class="section bg-ferrite-surface/50">
    <div class="container-wide">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
        <span class="badge-rust mb-4">Get Involved</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          Help build Ferrite
        </h2>
        <p class="text-lg text-text-secondary">
          Ferrite is open source and community-driven. There are many ways to contribute.
        </p>
      </div>

      <!-- Contribution cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div 
          v-for="item in contributions" 
          :key="item.title"
          class="card-hover group text-center p-6"
        >
          <div class="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icon" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-lg text-text-primary mb-2">
            {{ item.title }}
          </h3>
          <p class="text-sm text-text-secondary mb-4">
            {{ item.description }}
          </p>
          <a 
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-rust text-sm font-medium hover:underline inline-flex items-center gap-1"
          >
            {{ item.linkText }}
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Community note -->
      <div class="max-w-2xl mx-auto mt-12 text-center">
        <p class="text-sm text-text-tertiary">
          First time contributing to open source? No problem! 
          Look for issues labeled 
          <a 
            href="https://github.com/OlaProeis/ferrite/labels/good%20first%20issue"
            target="_blank"
            rel="noopener noreferrer"
            class="text-rust hover:underline"
          >good first issue</a>.
        </p>
      </div>
    </div>
  </section>
</template>
