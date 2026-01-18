<script setup lang="ts">
// Translation progress data from Weblate
// Source: https://hosted.weblate.org/projects/ferrite/
const translations = ref([
  { code: 'en', name: 'English', flag: '🇬🇧', progress: 100 },
  { code: 'zh-Hans', name: 'Chinese (Simplified)', flag: '🇨🇳', progress: 100 },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', progress: 1 },
  { code: 'de', name: 'German', flag: '🇩🇪', progress: 0 },
  { code: 'nb', name: 'Norwegian Bokmål', flag: '🇳🇴', progress: 0 },
])

const sortedTranslations = computed(() => 
  [...translations.value].sort((a, b) => b.progress - a.progress)
)

const needsHelp = computed(() => 
  translations.value.filter(t => t.progress < 100).length
)
</script>

<template>
  <div class="card p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="font-display font-semibold text-text-primary">Translation Progress</h3>
      <a 
        href="https://hosted.weblate.org/projects/ferrite/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs text-rust hover:underline"
      >
        Help translate →
      </a>
    </div>
    
    <div class="space-y-3">
      <div 
        v-for="lang in sortedTranslations" 
        :key="lang.code"
        class="group"
      >
        <div class="flex items-center justify-between mb-1">
          <span class="text-sm text-text-secondary flex items-center gap-2">
            <span>{{ lang.flag }}</span>
            <span>{{ lang.name }}</span>
          </span>
          <span class="text-xs font-mono text-text-tertiary">{{ lang.progress }}%</span>
        </div>
        <div class="h-1.5 bg-ferrite-surface-elevated rounded-full overflow-hidden">
          <div 
            class="h-full rounded-full transition-all duration-500"
            :class="lang.progress === 100 ? 'bg-emerald-500' : 'bg-rust'"
            :style="{ width: `${lang.progress}%` }"
          />
        </div>
      </div>
    </div>

    <p class="text-xs text-text-tertiary mt-4 text-center">
      {{ sortedTranslations.length }} languages • {{ needsHelp }} need help • Powered by Weblate
    </p>
  </div>
</template>
