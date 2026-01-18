<script setup lang="ts">
// ============================================
// GISCUS CONFIGURATION
// ============================================
// To enable comments:
// 1. Enable Discussions on your GitHub repo
// 2. Install Giscus app: https://github.com/apps/giscus
// 3. Go to https://giscus.app and configure
// 4. Fill in these values:

const GISCUS_CONFIG = {
  enabled: false,  // Set to true after configuring
  repo: 'OlaProeis/Ferrite',
  repoId: '',      // Get from giscus.app
  category: 'Blog Comments',
  categoryId: '',  // Get from giscus.app
}

// ============================================

const giscusLoaded = ref(false)
const giscusError = ref(false)

onMounted(() => {
  if (!GISCUS_CONFIG.enabled || !GISCUS_CONFIG.repoId || !GISCUS_CONFIG.categoryId) {
    return
  }

  // Load Giscus script
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', GISCUS_CONFIG.repo)
  script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
  script.setAttribute('data-category', GISCUS_CONFIG.category)
  script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'https://ferrite.dev/giscus-theme.css')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true
  
  script.onload = () => {
    giscusLoaded.value = true
  }

  script.onerror = () => {
    giscusError.value = true
  }
  
  const container = document.getElementById('giscus-container')
  if (container) {
    container.appendChild(script)
  }
})
</script>

<template>
  <div>
    <!-- Comments enabled and configured -->
    <div v-if="GISCUS_CONFIG.enabled && GISCUS_CONFIG.repoId" id="giscus-container" class="giscus-wrapper">
      <!-- Loading state -->
      <div v-if="!giscusLoaded && !giscusError" class="card flex items-center justify-center py-12">
        <div class="text-center">
          <div class="w-8 h-8 border-2 border-rust border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p class="text-sm text-text-tertiary">Loading comments...</p>
        </div>
      </div>
    </div>

    <!-- Comments not configured - show friendly message -->
    <div v-else class="card bg-ferrite-surface-elevated">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5 text-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div>
          <h3 class="font-display font-semibold text-text-primary mb-1">Comments coming soon</h3>
          <p class="text-sm text-text-secondary mb-3">
            Comments will be powered by GitHub Discussions. In the meantime, feel free to open an issue or start a discussion on GitHub!
          </p>
          <a 
            href="https://github.com/OlaProeis/Ferrite/discussions"
            target="_blank"
            rel="noopener noreferrer" 
            class="btn-secondary text-sm py-2"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Join the Discussion
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.giscus-wrapper .giscus {
  @apply rounded-xl overflow-hidden;
}

.giscus-wrapper .giscus-frame {
  @apply border border-ferrite-border rounded-xl;
}
</style>
