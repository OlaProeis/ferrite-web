<script setup lang="ts">
useSeoMeta({
  title: 'Blog - Ferrite',
  description: 'Development blog for Ferrite. Release notes, technical deep-dives, and insights into AI-assisted development.',
  ogTitle: 'Ferrite Blog',
  ogDescription: 'Development blog for Ferrite. Release notes, technical deep-dives, and insights into AI-assisted development.',
  ogImage: 'https://getferrite.dev/img/og-image.png',
})

// Add breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Blog' },
])

const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .find()
)

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'release', name: 'Releases' },
  { id: 'development', name: 'Development' },
  { id: 'technical', name: 'Technical' },
  { id: 'ai-workflow', name: 'AI Workflow' },
]

const activeCategory = ref('all')

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (activeCategory.value === 'all') return posts.value
  return posts.value.filter(post => post.category === activeCategory.value)
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div>
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Hero -->
    <section class="section bg-gradient-to-b from-ferrite-surface/50 to-transparent">
      <div class="container-wide">
        <div class="max-w-3xl mx-auto text-center">
          <span class="badge-rust mb-4">Blog</span>
          <h1 class="font-display font-bold text-display-lg text-text-primary mb-4">
            Development Journal
          </h1>
          <p class="text-lg text-text-secondary">
            Follow along with Ferrite's development. Release notes, technical insights, 
            and stories from the AI-assisted development journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="pb-8">
      <div class="container-wide">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            :class="activeCategory === category.id 
              ? 'bg-rust text-white' 
              : 'bg-ferrite-surface border border-ferrite-border text-text-secondary hover:text-text-primary hover:border-rust/30'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="pb-20">
      <div class="container-wide">
        <div v-if="filteredPosts.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in filteredPosts"
            :key="post._path"
            :to="post._path"
            class="card-hover group block"
          >
            <!-- Post Image -->
            <div v-if="post.image" class="aspect-video rounded-lg overflow-hidden mb-4 bg-ferrite-surface-elevated">
              <NuxtImg 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width="600"
                height="338"
                loading="lazy"
                format="webp"
              />
            </div>
            <div v-else class="aspect-video rounded-lg mb-4 bg-gradient-to-br from-rust/20 to-copper/20 flex items-center justify-center">
              <NuxtImg 
                src="/img/icon_256.png" 
                alt="Ferrite" 
                class="w-16 h-16 opacity-50"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>

            <!-- Category & Date -->
            <div class="flex items-center gap-3 mb-3">
              <span class="badge-rust text-xs capitalize">{{ post.category || 'Article' }}</span>
              <span class="text-xs text-text-tertiary">{{ formatDate(post.date) }}</span>
            </div>

            <!-- Title -->
            <h2 class="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-rust transition-colors">
              {{ post.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-sm text-text-secondary line-clamp-2">
              {{ post.description }}
            </p>

            <!-- Reading time -->
            <div class="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{{ post.readingTime || '5 min read' }}</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <p class="text-text-tertiary">No posts found in this category.</p>
        </div>
      </div>
    </section>

    <!-- RSS CTA -->
    <section class="section bg-ferrite-surface/50">
      <div class="container-narrow text-center">
        <h2 class="font-display font-bold text-xl text-text-primary mb-3">
          Stay updated
        </h2>
        <p class="text-text-secondary mb-6">
          Subscribe to the RSS feed to get notified of new posts.
        </p>
        <a href="/rss.xml" class="btn-secondary">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          Subscribe via RSS
        </a>
      </div>
    </section>
  </div>
</template>
