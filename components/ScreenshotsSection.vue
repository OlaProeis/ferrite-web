<script setup lang="ts">
const views = [
  { id: 'split', name: 'Split View', description: 'See your Markdown and preview side by side', image: '/img/split-dark.png' },
  { id: 'raw', name: 'Raw Mode', description: 'Focus on the source with syntax highlighting', image: '/img/raw-dark.png' },
  { id: 'zen', name: 'Zen Mode', description: 'Distraction-free writing experience', image: '/img/zen-dark.png' },
]

const activeView = ref('split')

const currentImage = computed(() => views.find(v => v.id === activeView.value)?.image)
</script>

<template>
  <section class="section bg-ferrite-surface/50">
    <div class="container-wide">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-12">
        <span class="badge-rust mb-4">Preview</span>
        <h2 class="font-display font-bold text-display-md text-text-primary mb-4">
          Multiple ways to write
        </h2>
        <p class="text-lg text-text-secondary">
          Choose the view that fits your workflow. Switch between modes instantly.
        </p>
      </div>

      <!-- View Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="view in views"
          :key="view.id"
          @click="activeView = view.id"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeView === view.id 
            ? 'bg-rust text-white shadow-glow' 
            : 'bg-ferrite-surface border border-ferrite-border text-text-secondary hover:text-text-primary hover:border-rust/30'"
        >
          {{ view.name }}
        </button>
      </div>

      <!-- Screenshot Display -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Glow effect -->
        <div class="absolute -inset-4 bg-gradient-rust opacity-10 blur-3xl rounded-3xl" />
        
        <!-- Screenshot with transition -->
        <div class="relative rounded-xl overflow-hidden shadow-2xl border border-ferrite-border">
          <Transition name="fade" mode="out-in">
            <NuxtImg 
              :key="activeView"
              :src="currentImage" 
              :alt="`Ferrite ${views.find(v => v.id === activeView)?.name}`"
              class="w-full"
              width="1920"
              height="1080"
              :loading="activeView === 'split' ? 'eager' : 'lazy'"
              format="webp"
            />
          </Transition>
        </div>
      </div>

      <!-- View description -->
      <p class="text-center text-text-tertiary text-sm mt-6">
        {{ views.find(v => v.id === activeView)?.description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
