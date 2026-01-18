<script setup lang="ts">
useSeoMeta({
  title: 'Download - Ferrite',
  description: 'Download Ferrite for Windows, macOS, or Linux. Free and open source Markdown editor.',
  ogTitle: 'Download Ferrite',
  ogDescription: 'Download Ferrite for Windows, macOS, or Linux. Free and open source Markdown editor.',
})

const version = '0.2.5-hotfix.1'
const displayVersion = '0.2.5.1'
const releaseDate = 'January 2026'

const platforms = [
  {
    id: 'windows',
    name: 'Windows',
    icon: 'M3 5.548l7.025-0.957v6.784H3V5.548zm0 12.904l7.025 0.957V12.625H3v5.827zm7.888 1.058l10.112 1.39V12.625H10.888v6.885zm0-14.02v6.885H21V3.1l-10.112 1.39z',
    requirements: 'Windows 10 or later (64-bit)',
    downloads: [
      { name: 'Exe (.zip)', file: 'ferrite-windows-x64.zip', recommended: true },
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
    requirements: 'macOS 11 (Big Sur) or later',
    downloads: [
      { name: 'Apple Silicon (.tar.gz)', file: 'ferrite-macos-arm64.tar.gz', recommended: true },
      { name: 'Intel (.tar.gz)', file: 'ferrite-macos-x64.tar.gz' },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'M12.5 2C9.46 2 7 4.46 7 7.5c0 1.33.47 2.55 1.26 3.5H7.5C5.57 11 4 12.57 4 14.5S5.57 18 7.5 18h9c1.93 0 3.5-1.57 3.5-3.5S18.43 11 16.5 11h-.76c.79-.95 1.26-2.17 1.26-3.5C17 4.46 14.54 2 12.5 2z',
    requirements: 'Ubuntu 20.04+, Fedora 35+, or equivalent',
    downloads: [
      { name: 'Debian/Ubuntu (.deb)', file: 'ferrite-editor_amd64.deb', recommended: true },
      { name: 'Tarball (.tar.gz)', file: 'ferrite-linux-x64.tar.gz' },
    ],
  },
]

const checksums = [
  { file: 'ferrite-windows-x64.zip', sha256: '71bcb8964ee7c4fa648a332ca24c9...' },
  { file: 'ferrite-macos-arm64.tar.gz', sha256: 'd80d69f624fdf6ae33c3016d4b54d...' },
  { file: 'ferrite-editor_amd64.deb', sha256: 'c9172ba7f0035b02d3ba3f4090e8f...' },
]
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section bg-gradient-to-b from-ferrite-surface/50 to-transparent">
      <div class="container-wide">
        <div class="max-w-3xl mx-auto text-center">
          <span class="badge-rust mb-4">Download</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-4">
            Download Ferrite
          </h1>
          <p class="text-lg text-text-secondary mb-2">
            Free, open source, and available for all major platforms.
          </p>
          <p class="text-sm text-text-tertiary">
            Current version: <span class="text-rust font-mono">v{{ displayVersion }}</span> ({{ releaseDate }})
          </p>
        </div>
      </div>
    </section>

    <!-- Platform Downloads -->
    <section class="pb-20">
      <div class="container-wide">
        <div class="space-y-8">
          <div
            v-for="platform in platforms"
            :key="platform.id"
            class="card p-8"
          >
            <div class="flex flex-col lg:flex-row lg:items-start gap-6">
              <!-- Platform Info -->
              <div class="flex items-start gap-4 lg:w-1/3">
                <div class="w-14 h-14 rounded-xl bg-ferrite-surface-elevated border border-ferrite-border flex items-center justify-center shrink-0">
                  <svg class="w-7 h-7 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="platform.icon" />
                  </svg>
                </div>
                <div>
                  <h2 class="font-display font-bold text-xl text-text-primary">
                    {{ platform.name }}
                  </h2>
                  <p class="text-sm text-text-tertiary mt-1">
                    {{ platform.requirements }}
                  </p>
                </div>
              </div>

              <!-- Download Options -->
              <div class="flex-1 grid sm:grid-cols-2 gap-3">
                <a
                  v-for="download in platform.downloads"
                  :key="download.file"
                  :href="`https://github.com/OlaProeis/Ferrite/releases/download/v${version}/${download.file}`"
                  class="flex items-center justify-between p-4 rounded-lg border transition-all"
                  :class="download.recommended 
                    ? 'bg-rust/10 border-rust/30 hover:bg-rust/20' 
                    : 'bg-ferrite-surface-elevated border-ferrite-border hover:border-rust/30'"
                >
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <div>
                      <span class="text-sm font-medium text-text-primary">{{ download.name }}</span>
                      <span v-if="download.recommended" class="ml-2 text-xs text-rust">Recommended</span>
                    </div>
                  </div>
                  <svg class="w-4 h-4 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Instructions -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-8 text-center">
          Installation Instructions
        </h2>

        <div class="space-y-6">
          <!-- Windows -->
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-4">Windows</h3>
            <ol class="text-sm text-text-secondary space-y-2 list-decimal list-inside">
              <li>Download the <code class="px-1.5 py-0.5 bg-code rounded text-xs">.zip</code> file</li>
              <li>Extract the archive to a folder of your choice</li>
              <li>Run <code class="px-1.5 py-0.5 bg-code rounded text-xs">ferrite.exe</code> to launch Ferrite</li>
            </ol>
            <p class="text-xs text-text-tertiary mt-4">
              Note: Windows may show a SmartScreen warning. Click "More info" then "Run anyway" to proceed.
            </p>
          </div>

          <!-- macOS -->
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-4">macOS</h3>
            <div class="text-sm text-text-secondary space-y-4">
              <div>
                <strong class="text-text-primary">Extract and run:</strong>
                <pre class="mt-2 p-3 bg-code rounded-lg text-xs font-mono overflow-x-auto"><code>tar -xzf ferrite-macos-arm64.tar.gz
./ferrite</code></pre>
              </div>
              <p class="text-xs text-text-tertiary mt-2">
                First launch: You may need to right-click and select "Open" or allow it in System Preferences &gt; Security &amp; Privacy.
              </p>
            </div>
          </div>

          <!-- Linux -->
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-4">Linux</h3>
            <div class="text-sm text-text-secondary space-y-4">
              <div>
                <strong class="text-text-primary">Debian/Ubuntu (.deb):</strong>
                <pre class="mt-2 p-3 bg-code rounded-lg text-xs font-mono overflow-x-auto"><code>sudo apt install ./ferrite-editor_amd64.deb</code></pre>
              </div>
              <div>
                <strong class="text-text-primary">Tarball (.tar.gz):</strong>
                <pre class="mt-2 p-3 bg-code rounded-lg text-xs font-mono overflow-x-auto"><code>tar -xzf ferrite-linux-x64.tar.gz
./ferrite</code></pre>
              </div>
              <div>
                <strong class="text-text-primary">Arch Linux (AUR):</strong>
                <pre class="mt-2 p-3 bg-code rounded-lg text-xs font-mono overflow-x-auto"><code>yay -Sy ferrite-bin</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checksums -->
    <section class="section">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4 text-center">
          Verify Your Download
        </h2>
        <p class="text-text-secondary text-center mb-8">
          Verify the integrity of your download using SHA256 checksums.
        </p>

        <div class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-ferrite-surface-elevated border-b border-ferrite-border">
              <tr>
                <th class="text-left py-3 px-4 font-medium text-text-primary">File</th>
                <th class="text-left py-3 px-4 font-medium text-text-primary">SHA256</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="checksum in checksums" :key="checksum.file" class="border-b border-ferrite-border last:border-0">
                <td class="py-3 px-4 font-mono text-xs text-text-secondary">{{ checksum.file }}</td>
                <td class="py-3 px-4 font-mono text-xs text-text-tertiary">{{ checksum.sha256 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center mt-8">
          <a 
            href="https://github.com/OlaProeis/Ferrite/releases" 
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm"
          >
            View all releases on GitHub
            <svg class="w-4 h-4 inline-block ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
