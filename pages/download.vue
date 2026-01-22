<script setup lang="ts">
useSeoMeta({
  title: 'Download - Ferrite',
  description: 'Download Ferrite for Windows, macOS, or Linux. Free and open source Markdown editor.',
  ogTitle: 'Download Ferrite',
  ogDescription: 'Download Ferrite for Windows, macOS, or Linux. Free and open source Markdown editor.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

// Add breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Download' },
])

const { stats, fetchStats, formatNumber } = useGitHubStats()

onMounted(() => {
  fetchStats()
})

interface Download {
  name: string
  file: string
  recommended?: boolean
  chip?: 'apple-silicon' | 'intel'
  hint?: string
}

interface Platform {
  id: string
  name: string
  icon: string
  requirements: string
  downloads: Download[]
}

const platforms: Platform[] = [
  {
    id: 'windows',
    name: 'Windows',
    icon: 'M3 5.548l7.025-0.957v6.784H3V5.548zm0 12.904l7.025 0.957V12.625H3v5.827zm7.888 1.058l10.112 1.39V12.625H10.888v6.885zm0-14.02v6.885H21V3.1l-10.112 1.39z',
    requirements: 'Windows 10 or later (64-bit)',
    downloads: [
      { name: 'MSI Installer (.msi)', file: 'ferrite-windows-x64.msi', recommended: true },
      { name: 'Portable (.zip)', file: 'ferrite-portable-windows-x64.zip' },
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
    requirements: 'macOS 11 (Big Sur) or later',
    downloads: [
      { name: 'Apple Silicon (.tar.gz)', file: 'ferrite-macos-arm64.tar.gz', chip: 'apple-silicon', hint: 'M1/M2/M3/M4 • 2020+' },
      { name: 'Intel (.tar.gz)', file: 'ferrite-macos-x64.tar.gz', chip: 'intel', hint: 'Intel Core • 2019 & earlier' },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'M12.5 2C9.46 2 7 4.46 7 7.5c0 1.33.47 2.55 1.26 3.5H7.5C5.57 11 4 12.57 4 14.5S5.57 18 7.5 18h9c1.93 0 3.5-1.57 3.5-3.5S18.43 11 16.5 11h-.76c.79-.95 1.26-2.17 1.26-3.5C17 4.46 14.54 2 12.5 2z',
    requirements: 'Ubuntu 20.04+, Fedora 35+, or equivalent',
    downloads: [
      { name: 'Debian/Ubuntu (.deb)', file: 'ferrite-editor_amd64.deb' },
      { name: 'Fedora/RHEL (.rpm)', file: 'ferrite-editor.x86_64.rpm' },
      { name: 'Tarball (.tar.gz)', file: 'ferrite-linux-x64.tar.gz' },
    ],
  },
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
            Current version: <span class="text-rust font-mono">v{{ stats.latestVersion }}</span> ({{ stats.latestReleaseDate }})
          </p>
          <!-- Download Stats -->
          <div class="flex items-center justify-center gap-6 mt-4">
            <div class="flex items-center gap-2 text-sm text-text-secondary">
              <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <span v-if="stats.stars > 0">{{ formatNumber(stats.stars) }} stars</span>
              <span v-else class="w-16 h-4 bg-ferrite-border rounded animate-pulse" />
            </div>
            <div class="flex items-center gap-2 text-sm text-text-secondary">
              <svg class="w-4 h-4 text-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span v-if="stats.totalDownloads > 0">{{ formatNumber(stats.totalDownloads) }} downloads</span>
              <span v-else class="w-20 h-4 bg-ferrite-border rounded animate-pulse" />
            </div>
          </div>
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
                  :href="`https://github.com/OlaProeis/Ferrite/releases/latest/download/${download.file}`"
                  class="flex items-center justify-between p-4 rounded-lg border transition-all"
                  :class="[
                    download.recommended 
                      ? 'bg-rust/10 border-rust/30 hover:bg-rust/20' 
                      : 'bg-ferrite-surface-elevated border-ferrite-border hover:border-rust/30',
                    download.chip === 'apple-silicon' ? 'hover:border-purple-500/50' : '',
                    download.chip === 'intel' ? 'hover:border-blue-500/50' : ''
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-medium text-text-primary">{{ download.name }}</span>
                        <span v-if="download.recommended" class="text-xs text-rust">Recommended</span>
                      </div>
                      <!-- Chip indicator for macOS -->
                      <div v-if="download.chip" class="flex items-center gap-1.5 mt-1">
                        <!-- Apple Silicon chip icon -->
                        <svg v-if="download.chip === 'apple-silicon'" class="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <!-- Intel chip icon -->
                        <svg v-if="download.chip === 'intel'" class="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"/>
                        </svg>
                        <span class="text-xs text-text-tertiary">{{ download.hint }}</span>
                      </div>
                    </div>
                  </div>
                  <svg class="w-4 h-4 text-text-tertiary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
            <div class="text-sm text-text-secondary space-y-4">
              <div>
                <strong class="text-text-primary">MSI Installer (Recommended):</strong>
                <ol class="mt-2 space-y-1 list-decimal list-inside">
                  <li>Download the <code class="px-1.5 py-0.5 bg-code rounded text-xs">.msi</code> file</li>
                  <li>Run the installer - Ferrite will be added to Start Menu</li>
                  <li>Uninstall via Windows Settings when needed</li>
                </ol>
              </div>
              <div>
                <strong class="text-text-primary">Portable Version:</strong>
                <ol class="mt-2 space-y-1 list-decimal list-inside">
                  <li>Download <code class="px-1.5 py-0.5 bg-code rounded text-xs">ferrite-portable-windows-x64.zip</code></li>
                  <li>Extract to a folder or USB drive</li>
                  <li>All settings are stored in the <code class="px-1.5 py-0.5 bg-code rounded text-xs">portable</code> folder next to the executable</li>
                </ol>
              </div>
            </div>
            <p class="text-xs text-text-tertiary mt-4">
              Note: Windows may show a SmartScreen warning. Click "More info" then "Run anyway" to proceed.
            </p>
          </div>

          <!-- macOS -->
          <div class="card">
            <h3 class="font-display font-semibold text-text-primary mb-4">macOS</h3>
            <div class="text-sm text-text-secondary space-y-4">
              <div class="p-3 bg-ferrite-surface-elevated rounded-lg border border-ferrite-border">
                <strong class="text-text-primary">Which version do I need?</strong>
                <p class="mt-1">Click the Apple menu () → About This Mac:</p>
                <ul class="mt-2 space-y-1 list-disc list-inside text-xs">
                  <li><strong>Apple Silicon</strong> — Shows "Chip" with M1, M2, M3, or M4</li>
                  <li><strong>Intel</strong> — Shows "Processor" with Intel Core</li>
                </ul>
              </div>
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
                <strong class="text-text-primary">Fedora/RHEL/CentOS (.rpm):</strong>
                <pre class="mt-2 p-3 bg-code rounded-lg text-xs font-mono overflow-x-auto"><code>sudo dnf install ./ferrite-editor.x86_64.rpm</code></pre>
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

    <!-- Verify & More -->
    <section class="section">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-display-sm text-text-primary mb-4 text-center">
          Verify Your Download
        </h2>
        <p class="text-text-secondary text-center mb-8">
          SHA256 checksums are available on the GitHub releases page for each version.
        </p>

        <div class="card p-6 text-center">
          <p class="text-sm text-text-secondary mb-4">
            To verify your download, compare the SHA256 hash of your downloaded file 
            with the checksums published on GitHub.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/OlaProeis/Ferrite/releases/latest" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Latest Release
            </a>
            <a 
              href="https://github.com/OlaProeis/Ferrite/releases" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              All Releases
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
