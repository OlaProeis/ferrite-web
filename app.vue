<script setup lang="ts">
// Add JSON-LD structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Ferrite',
        description: 'A fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows, macOS, Linux',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Organization',
          name: 'Ferrite',
          url: 'https://getferrite.dev',
        },
        downloadUrl: 'https://getferrite.dev/download',
        softwareVersion: '0.2.5.1',
        releaseNotes: 'https://getferrite.dev/changelog',
        screenshot: 'https://getferrite.dev/img/og-image.png',
        featureList: [
          'Native Mermaid diagram rendering',
          'WYSIWYG Markdown editing',
          'Split view with dual editing',
          'Semantic minimap',
          'Git integration',
          'CSV/TSV viewer',
          'Multi-encoding support',
          'Keyboard shortcut customization',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ferrite',
        url: 'https://getferrite.dev',
        description: 'A fast, native Markdown editor built with Rust.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://getferrite.dev/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
