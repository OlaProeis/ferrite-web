<script setup lang="ts">
interface Hotspot {
  id: string
  x: number // percentage from left
  y: number // percentage from top
  label: string
  description: string
  type?: 'number' | 'arrow-down' | 'arrow-up' | 'arrow-left' | 'arrow-right' // default is 'number'
}

interface FeatureTip {
  id: string
  title: string
  subtitle: string
  image: string // path to screenshot
  hotspots: Hotspot[]
}

const tips = ref<FeatureTip[]>([
  {
    id: 'recent-files',
    title: 'Quick File Access',
    subtitle: 'Click the filename in the status bar',
    image: '/img/tips/recent-files.png',
    hotspots: [
      {
        id: 'filename-click',
        x: 15,
        y: 95,
        label: '1',
        type: 'arrow-down',
        description: 'Click the filename in the bottom-left to open Recent Files & Folders'
      },
      {
        id: 'recent-list',
        x: 20,
        y: 50,
        label: '2',
        description: 'Quickly jump to recently opened files or switch folders'
      }
    ]
  },
  {
    id: 'csv-controls',
    title: 'CSV Power Controls',
    subtitle: 'Customize table display from the status bar',
    image: '/img/tips/csv-controls.png',
    hotspots: [
      {
        id: 'colors-toggle',
        x: 62,
        y: 93,
        label: '1',
        type: 'arrow-down',
        description: 'Toggle rainbow column colors for better readability'
      },
      {
        id: 'headers-toggle',
        x: 68,
        y: 93,
        label: '2',
        type: 'arrow-down',
        description: 'Toggle header row detection on/off'
      },
      {
        id: 'delimiter-select',
        x: 74,
        y: 93,
        label: '3',
        type: 'arrow-down',
        description: 'Change delimiter (comma, tab, semicolon, pipe)'
      }
    ]
  },
  {
    id: 'outline-stats',
    title: 'Outline & Statistics',
    subtitle: 'Document structure and word counts at a glance',
    image: '/img/tips/outline-panel.png',
    hotspots: [
      {
        id: 'outline-toggle',
        x: 60,
        y: 8,
        label: '1',
        type: 'arrow-left',
        description: 'Click the outline icon to toggle the panel'
      },
      {
        id: 'outline-nav',
        x: 88,
        y: 40,
        label: '2',
        description: 'Click any heading to jump directly to that section'
      },
      {
        id: 'stats-tab',
        x: 92,
        y: 17,
        label: '3',
        description: 'Switch to Stats tab for word count, reading time, and more'
      }
    ]
  },
  {
    id: 'customize',
    title: 'Customize Your Editor',
    subtitle: 'Tailor Ferrite to your workflow',
    image: '/img/tips/customize.png',
    hotspots: [
      {
        id: 'line-width',
        x: 53,
        y: 51,
        label: '1',
        type: 'arrow-up',
        description: 'Set maximum line width - essential for centered text in Zen mode'
      },
      {
        id: 'keyboard',
        x: 26,
        y: 35,
        label: '2',
        type: 'arrow-right',
        description: 'Remap keyboard shortcuts to match your preferences'
      }
    ]
  }
])

const activeHotspot = ref<string | null>(null)
const activeTip = ref<string | null>(null)

function setActiveHotspot(tipId: string, hotspotId: string | null) {
  if (hotspotId) {
    activeHotspot.value = `${tipId}-${hotspotId}`
    activeTip.value = tipId
  } else {
    activeHotspot.value = null
  }
}

function isHotspotActive(tipId: string, hotspotId: string) {
  return activeHotspot.value === `${tipId}-${hotspotId}`
}

function getActiveDescription(tip: FeatureTip) {
  if (activeTip.value !== tip.id) return null
  const hotspot = tip.hotspots.find(h => `${tip.id}-${h.id}` === activeHotspot.value)
  return hotspot?.description || null
}
</script>

<template>
  <section class="py-16 lg:py-24 bg-gradient-to-b from-transparent to-ferrite-surface/30">
    <div class="container-wide">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
        <span class="badge-rust mb-4">Hidden Gems</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          Power user tips
        </h2>
        <p class="text-lg text-text-secondary">
          Features you might have missed. Hover over the 
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rust text-white text-xs font-bold mx-1">?</span>
          indicators to learn more.
        </p>
      </div>

      <!-- Tips Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div 
          v-for="tip in tips" 
          :key="tip.id"
          class="card-hover overflow-hidden group"
        >
          <!-- Card Header -->
          <div class="p-5 pb-3 border-b border-ferrite-border">
            <h3 class="font-display font-semibold text-lg text-text-primary">
              {{ tip.title }}
            </h3>
            <p class="text-sm text-text-tertiary">{{ tip.subtitle }}</p>
          </div>

          <!-- Screenshot with Hotspots -->
          <div class="relative bg-ferrite-surface">
            <div class="aspect-video bg-ferrite-surface-elevated">
              <NuxtImg 
                :src="tip.image" 
                :alt="tip.title"
                class="w-full h-full object-cover"
                width="800"
                height="450"
                loading="lazy"
                format="webp"
              />
            </div>

            <!-- Hotspot Indicators -->
            <button
              v-for="hotspot in tip.hotspots"
              :key="hotspot.id"
              class="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 z-10"
              :style="{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }"
              @mouseenter="setActiveHotspot(tip.id, hotspot.id)"
              @mouseleave="setActiveHotspot(tip.id, null)"
              @focus="setActiveHotspot(tip.id, hotspot.id)"
              @blur="setActiveHotspot(tip.id, null)"
            >
              <!-- Pulse ring -->
              <span 
                class="absolute inset-0 rounded-full bg-rust/30 animate-ping"
                :class="{ 'animation-paused': isHotspotActive(tip.id, hotspot.id) }"
              />
              <!-- Arrow indicators -->
              <span 
                v-if="hotspot.type?.startsWith('arrow-')"
                class="absolute inset-0 bg-rust text-white flex items-center justify-center transition-transform shadow-lg rounded-full"
                :class="{ 'scale-125': isHotspotActive(tip.id, hotspot.id) }"
              >
                <!-- Arrow Down -->
                <svg v-if="hotspot.type === 'arrow-down'" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                <!-- Arrow Up -->
                <svg v-else-if="hotspot.type === 'arrow-up'" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
                <!-- Arrow Left -->
                <svg v-else-if="hotspot.type === 'arrow-left'" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
                <!-- Arrow Right -->
                <svg v-else-if="hotspot.type === 'arrow-right'" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <!-- Number indicator -->
              <span 
                v-else
                class="absolute inset-0 rounded-full bg-rust text-white text-xs font-bold flex items-center justify-center transition-transform shadow-lg"
                :class="{ 'scale-125': isHotspotActive(tip.id, hotspot.id) }"
              >
                {{ hotspot.label }}
              </span>
            </button>
          </div>

          <!-- Description Panel -->
          <div class="p-4 min-h-[56px] bg-ferrite-surface-elevated/50 border-t border-ferrite-border">
            <Transition name="fade" mode="out-in">
              <p 
                v-if="getActiveDescription(tip)" 
                :key="activeHotspot ?? 'none'"
                class="text-sm text-text-secondary"
              >
                <span 
                  v-if="!tip.hotspots.find(h => `${tip.id}-${h.id}` === activeHotspot)?.type?.startsWith('arrow-')"
                  class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-rust text-white text-xs font-bold mr-2"
                >
                  {{ tip.hotspots.find(h => `${tip.id}-${h.id}` === activeHotspot)?.label }}
                </span>
                {{ getActiveDescription(tip) }}
              </p>
              <p v-else class="text-sm text-text-tertiary italic">
                Hover over the indicators above
              </p>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Note about screenshots -->
      <p class="text-center text-sm text-text-tertiary mt-8">
        More tips coming soon. Have a feature request? 
        <a 
          href="https://github.com/OlaProeis/ferrite/discussions" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-rust hover:underline"
        >
          Let us know on GitHub
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animation-paused {
  animation-play-state: paused;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
