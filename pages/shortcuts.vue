<script setup lang="ts">
useSeoMeta({
  title: 'Keyboard Shortcuts - Ferrite',
  description: 'Complete keyboard shortcuts reference for Ferrite, the fast native Markdown editor.',
  ogTitle: 'Keyboard Shortcuts - Ferrite',
  ogDescription: 'Complete keyboard shortcuts reference for Ferrite, the fast native Markdown editor.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

// Add breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Keyboard Shortcuts' },
])

const isMac = ref(false)

// Only access navigator on client side
if (import.meta.client) {
  onMounted(() => {
    isMac.value = navigator.platform.toLowerCase().includes('mac')
  })
}

const mod = computed(() => isMac.value ? '⌘' : 'Ctrl')
const alt = computed(() => isMac.value ? '⌥' : 'Alt')

const shortcuts = computed(() => [
  {
    category: 'File Operations',
    items: [
      { action: 'New File', keys: `${mod.value} + N` },
      { action: 'Open File', keys: `${mod.value} + O` },
      { action: 'Open Folder', keys: `${mod.value} + Shift + O` },
      { action: 'Save', keys: `${mod.value} + S` },
      { action: 'Save As', keys: `${mod.value} + Shift + S` },
      { action: 'Close Tab', keys: `${mod.value} + W` },
      { action: 'Close All Tabs', keys: `${mod.value} + Shift + W` },
    ],
  },
  {
    category: 'Edit',
    items: [
      { action: 'Undo', keys: `${mod.value} + Z` },
      { action: 'Redo', keys: `${mod.value} + Shift + Z` },
      { action: 'Cut', keys: `${mod.value} + X` },
      { action: 'Copy', keys: `${mod.value} + C` },
      { action: 'Paste', keys: `${mod.value} + V` },
      { action: 'Select All', keys: `${mod.value} + A` },
      { action: 'Duplicate Line', keys: `${mod.value} + D` },
      { action: 'Delete Line', keys: `${mod.value} + Shift + K` },
      { action: 'Move Line Up', keys: `${alt.value} + ↑` },
      { action: 'Move Line Down', keys: `${alt.value} + ↓` },
    ],
  },
  {
    category: 'Navigation',
    items: [
      { action: 'Go to Line', keys: `${mod.value} + G` },
      { action: 'Quick Switcher', keys: `${mod.value} + P` },
      { action: 'Find', keys: `${mod.value} + F` },
      { action: 'Find & Replace', keys: `${mod.value} + H` },
      { action: 'Find in Files', keys: `${mod.value} + Shift + F` },
      { action: 'Next Tab', keys: `${mod.value} + Tab` },
      { action: 'Previous Tab', keys: `${mod.value} + Shift + Tab` },
      { action: 'Go to Tab 1-9', keys: `${mod.value} + 1-9` },
    ],
  },
  {
    category: 'View',
    items: [
      { action: 'Toggle Zen Mode', keys: 'F11' },
      { action: 'Toggle Split View', keys: `${mod.value} + \\` },
      { action: 'Toggle Raw/Rendered', keys: `${mod.value} + E` },
      { action: 'Toggle Sidebar', keys: `${mod.value} + B` },
      { action: 'Toggle Minimap', keys: `${mod.value} + M` },
      { action: 'Zoom In', keys: `${mod.value} + +` },
      { action: 'Zoom Out', keys: `${mod.value} + -` },
      { action: 'Reset Zoom', keys: `${mod.value} + 0` },
    ],
  },
  {
    category: 'Markdown Formatting',
    items: [
      { action: 'Bold', keys: `${mod.value} + B` },
      { action: 'Italic', keys: `${mod.value} + I` },
      { action: 'Strikethrough', keys: `${mod.value} + Shift + X` },
      { action: 'Inline Code', keys: `${mod.value} + \`` },
      { action: 'Link', keys: `${mod.value} + K` },
      { action: 'Heading 1', keys: `${mod.value} + 1` },
      { action: 'Heading 2', keys: `${mod.value} + 2` },
      { action: 'Heading 3', keys: `${mod.value} + 3` },
      { action: 'Bullet List', keys: `${mod.value} + Shift + 8` },
      { action: 'Numbered List', keys: `${mod.value} + Shift + 7` },
      { action: 'Task List', keys: `${mod.value} + Shift + 9` },
      { action: 'Blockquote', keys: `${mod.value} + Shift + .` },
      { action: 'Code Block', keys: `${mod.value} + Shift + \`` },
    ],
  },
  {
    category: 'Tools',
    items: [
      { action: 'Command Palette', keys: `${mod.value} + Shift + P` },
      { action: 'Settings', keys: `${mod.value} + ,` },
      { action: 'Insert Table of Contents', keys: `${mod.value} + Shift + T` },
      { action: 'Export to HTML', keys: `${mod.value} + Shift + E` },
      { action: 'Insert Snippet', keys: `${mod.value} + J` },
    ],
  },
])
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section bg-gradient-to-b from-ferrite-surface/50 to-transparent">
      <div class="container-wide">
        <div class="max-w-3xl mx-auto text-center">
          <span class="badge-rust mb-4">Reference</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-4">
            Keyboard Shortcuts
          </h1>
          <p class="text-lg text-text-secondary mb-6">
            Master Ferrite with these keyboard shortcuts. All shortcuts are customizable 
            in Settings → Keyboard.
          </p>
          
          <!-- Platform Toggle -->
          <div class="inline-flex items-center gap-2 bg-ferrite-surface border border-ferrite-border rounded-lg p-1">
            <button
              @click="isMac = false"
              class="px-4 py-2 rounded-md text-sm font-medium transition-all"
              :class="!isMac ? 'bg-rust text-white' : 'text-text-secondary hover:text-text-primary'"
            >
              Windows/Linux
            </button>
            <button
              @click="isMac = true"
              class="px-4 py-2 rounded-md text-sm font-medium transition-all"
              :class="isMac ? 'bg-rust text-white' : 'text-text-secondary hover:text-text-primary'"
            >
              macOS
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Shortcuts Grid -->
    <section class="pb-20">
      <div class="container-wide">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="category in shortcuts" 
            :key="category.category"
            class="card"
          >
            <h2 class="font-display font-semibold text-lg text-text-primary mb-4 pb-3 border-b border-ferrite-border">
              {{ category.category }}
            </h2>
            <div class="space-y-3">
              <div 
                v-for="item in category.items" 
                :key="item.action"
                class="flex items-center justify-between"
              >
                <span class="text-sm text-text-secondary">{{ item.action }}</span>
                <kbd class="px-2 py-1 bg-ferrite-surface-elevated border border-ferrite-border rounded text-xs font-mono text-text-tertiary">
                  {{ item.keys }}
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customization Note -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-xl text-text-primary mb-4">
          Customize Your Shortcuts
        </h2>
        <p class="text-text-secondary mb-6">
          Don't like a shortcut? Change it! Go to <code class="px-2 py-1 bg-code rounded text-sm">Settings → Keyboard</code> 
          to customize any shortcut to your preference.
        </p>
        <p class="text-sm text-text-tertiary">
          Vim mode coming in v0.2.6 for modal editing fans.
        </p>
      </div>
    </section>
  </div>
</template>
