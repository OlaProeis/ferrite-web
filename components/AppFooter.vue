<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '/download' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Shortcuts', href: '/shortcuts' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://github.com/OlaProeis/Ferrite#readme' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ],
  community: [
    { name: 'GitHub', href: 'https://github.com/OlaProeis/Ferrite' },
    { name: 'Issues', href: 'https://github.com/OlaProeis/Ferrite/issues' },
    { name: 'Discussions', href: 'https://github.com/OlaProeis/Ferrite/discussions' },
    { name: 'Contributing', href: 'https://github.com/OlaProeis/Ferrite/blob/main/CONTRIBUTING.md' },
  ],
}
</script>

<template>
  <footer class="bg-ferrite-surface border-t border-ferrite-border">
    <div class="container-wide py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 group mb-4">
            <img 
              src="~/assets/img/icon_256.png" 
              alt="Ferrite" 
              class="w-9 h-9 rounded-lg"
            />
            <span class="font-display font-bold text-xl text-text-primary">Ferrite</span>
          </NuxtLink>
          <p class="text-text-tertiary text-sm leading-relaxed mb-4">
            A fast, native Markdown editor built with Rust. No Electron bloat, just pure performance.
          </p>
          <div class="flex items-center gap-4">
            <a 
              href="https://github.com/OlaProeis/Ferrite" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-tertiary hover:text-rust transition-colors"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="/rss.xml" 
              class="text-text-tertiary hover:text-rust transition-colors"
              aria-label="RSS Feed"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h3 class="font-display font-semibold text-text-primary mb-4">Product</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.product" :key="link.href">
              <NuxtLink 
                v-if="link.href.startsWith('/')"
                :to="link.href" 
                class="text-sm text-text-tertiary hover:text-rust transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
              <a 
                v-else
                :href="link.href" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-text-tertiary hover:text-rust transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-display font-semibold text-text-primary mb-4">Resources</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.resources" :key="link.href">
              <NuxtLink 
                v-if="link.href.startsWith('/')"
                :to="link.href" 
                class="text-sm text-text-tertiary hover:text-rust transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
              <a 
                v-else
                :href="link.href" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-text-tertiary hover:text-rust transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h3 class="font-display font-semibold text-text-primary mb-4">Community</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.community" :key="link.href">
              <a 
                :href="link.href" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-text-tertiary hover:text-rust transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-ferrite-border">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-text-tertiary text-sm">
            © {{ currentYear }} Ferrite. Open source under the 
            <a 
              href="https://github.com/OlaProeis/Ferrite/blob/main/LICENSE" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-rust hover:underline"
            >MIT License</a>.
          </p>
          <p class="text-text-tertiary text-sm">
            Built with 
            <span class="text-rust">Rust</span> 
            + 
            <span class="text-rust">AI</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
