<script setup lang="ts">
const platforms = [
  { 
    id: 'windows', 
    name: 'Windows', 
    icon: 'windows',
    versions: ['Windows 10+', '64-bit'],
    file: 'ferrite-windows-x64.zip'
  },
  { 
    id: 'macos', 
    name: 'macOS', 
    icon: 'apple',
    versions: ['macOS 11+', 'Intel & Apple Silicon'],
    file: 'ferrite-macos-arm64.tar.gz'
  },
  { 
    id: 'linux', 
    name: 'Linux', 
    icon: 'linux',
    versions: ['Ubuntu 20.04+', '.deb / .tar.gz'],
    file: 'ferrite-editor_amd64.deb'
  },
]

const iconPaths: Record<string, string> = {
  windows: 'M3 5.548l7.025-0.957v6.784H3V5.548zm0 12.904l7.025 0.957V12.625H3v5.827zm7.888 1.058l10.112 1.39V12.625H10.888v6.885zm0-14.02v6.885H21V3.1l-10.112 1.39z',
  apple: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
  linux: 'M12.5 2C9.46 2 7 4.46 7 7.5c0 1.33.47 2.55 1.26 3.5H7.5C5.57 11 4 12.57 4 14.5S5.57 18 7.5 18h9c1.93 0 3.5-1.57 3.5-3.5S18.43 11 16.5 11h-.76c.79-.95 1.26-2.17 1.26-3.5C17 4.46 14.54 2 12.5 2zm0 2c1.93 0 3.5 1.57 3.5 3.5S14.43 11 12.5 11 9 9.43 9 7.5 10.57 4 12.5 4zM7.5 13h9c.83 0 1.5.67 1.5 1.5S17.33 16 16.5 16h-9c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13z M12 19v3M8 22h8',
}
</script>

<template>
  <section id="download" class="section bg-ferrite-surface/50">
    <div class="container-wide">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-12">
        <span class="badge-rust mb-4">Download</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          Get Ferrite for free
        </h2>
        <p class="text-lg text-text-secondary">
          Open source and free forever. Choose your platform below.
        </p>
      </div>

      <!-- Platform Cards -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div
          v-for="platform in platforms"
          :key="platform.id"
          class="card-hover text-center group"
        >
          <!-- Platform Icon -->
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ferrite-surface-elevated border border-ferrite-border mb-4 group-hover:border-rust/30 transition-colors">
            <svg class="w-8 h-8 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path :d="iconPaths[platform.icon]" />
            </svg>
          </div>

          <h3 class="font-display font-semibold text-lg text-text-primary mb-2">
            {{ platform.name }}
          </h3>
          
          <p class="text-sm text-text-tertiary mb-4">
            {{ platform.versions.join(' / ') }}
          </p>

          <a 
            :href="`https://github.com/OlaProeis/Ferrite/releases/latest/download/${platform.file}`"
            class="btn-primary w-full justify-center"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>
      </div>

      <!-- Additional Options -->
      <div class="text-center">
        <p class="text-text-tertiary text-sm mb-4">
          Looking for other versions or installation methods?
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://github.com/OlaProeis/Ferrite/releases" 
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm"
          >
            View all releases
          </a>
          <span class="text-text-tertiary">|</span>
          <NuxtLink to="/download" class="link text-sm">
            Installation instructions
          </NuxtLink>
          <span class="text-text-tertiary">|</span>
          <a 
            href="https://github.com/OlaProeis/Ferrite#building-from-source" 
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm"
          >
            Build from source
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
