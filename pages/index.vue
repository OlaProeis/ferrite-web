<script setup lang="ts">
useSeoMeta({
  title: 'Ferrite - A Fast, Native Markdown Editor',
  description: 'Ferrite is a fast, native Markdown editor built with Rust. No Electron bloat, just pure performance. WYSIWYG editing, Mermaid diagrams, syntax highlighting, and more.',
  ogTitle: 'Ferrite - A Fast, Native Markdown Editor',
  ogDescription: 'Ferrite is a fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <HeroSection />
    <FeaturesSection />
    <ScreenshotsSection />
    <RoadAheadSection />
    <ContributeSection />
    <DownloadSection />
    <NewsletterSection />
  </div>
</template>
