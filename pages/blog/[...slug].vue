<script setup lang="ts">
const route = useRoute()
const { data: post, error } = await useAsyncData(`blog-${route.path}`, () => 
  queryContent(route.path).findOne()
)

// Handle 404 in a SSR-safe way
if (error.value || !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

const siteUrl = useSiteUrl()

useSeoMeta({
  title: `${post.value.title} - Ferrite Blog`,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogImage: post.value.image || `${siteUrl}/img/og-image.png`,
  ogType: 'article',
  articlePublishedTime: post.value.date,
  articleAuthor: 'Ferrite Team',
})

// Add breadcrumb schema for blog post navigation
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: post.value.title },
])

// Add Article schema for rich snippets
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value.title,
        description: post.value.description,
        image: post.value.image || `${siteUrl}/img/og-image.png`,
        datePublished: post.value.date,
        author: {
          '@type': 'Organization',
          name: 'Ferrite Team',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Ferrite',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/favicon.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}${route.path}`,
        },
      }),
    },
  ],
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get related posts
const { data: relatedPosts } = await useAsyncData(`related-${route.path}`, () => 
  queryContent('blog')
    .where({ _path: { $ne: route.path } })
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>

<template>
  <div v-if="post">
    <!-- Spacer for fixed header -->
    <div class="h-16 lg:h-20" />

    <!-- Article Header -->
    <header class="section pb-12">
      <div class="container-narrow">
        <!-- Back link -->
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-rust transition-colors mb-8"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to blog
        </NuxtLink>

        <!-- Meta -->
        <div class="flex items-center gap-3 mb-4">
          <span class="badge-rust capitalize">{{ post.category || 'Article' }}</span>
          <span class="text-sm text-text-tertiary">{{ formatDate(post.date) }}</span>
          <span class="text-sm text-text-tertiary">{{ post.readingTime || '5 min read' }}</span>
        </div>

        <!-- Title -->
        <h1 class="font-display font-bold text-display-md lg:text-display-lg text-text-primary mb-6 text-balance">
          {{ post.title }}
        </h1>

        <!-- Description -->
        <p class="text-lg text-text-secondary">
          {{ post.description }}
        </p>
      </div>
    </header>

    <!-- Featured Image -->
    <div v-if="post.image" class="container-wide pb-12">
      <div class="aspect-video rounded-xl overflow-hidden bg-ferrite-surface">
        <NuxtImg 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-full object-cover"
          width="1200"
          height="675"
          loading="eager"
          format="webp"
        />
      </div>
    </div>

    <!-- Article Content -->
    <article class="pb-16">
      <div class="container-narrow">
        <!-- Table of Contents -->
        <div v-if="post.body?.toc?.links?.length" class="card mb-12">
          <h2 class="font-display font-semibold text-text-primary mb-4">Table of Contents</h2>
          <nav>
            <ul class="space-y-2">
              <li v-for="link in post.body.toc.links" :key="link.id">
                <a 
                  :href="`#${link.id}`" 
                  class="text-sm text-text-secondary hover:text-rust transition-colors"
                >
                  {{ link.text }}
                </a>
                <ul v-if="link.children?.length" class="ml-4 mt-2 space-y-2">
                  <li v-for="child in link.children" :key="child.id">
                    <a 
                      :href="`#${child.id}`" 
                      class="text-sm text-text-tertiary hover:text-rust transition-colors"
                    >
                      {{ child.text }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <ContentRenderer :value="post" />
        </div>

        <!-- Tags -->
        <div v-if="post.tags?.length" class="mt-12 pt-8 border-t border-ferrite-border">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-3 py-1 rounded-full bg-ferrite-surface border border-ferrite-border text-xs text-text-tertiary"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Share -->
        <div class="mt-8 pt-8 border-t border-ferrite-border">
          <div class="flex items-center gap-4">
            <span class="text-sm text-text-tertiary">Share this post:</span>
            <a 
              :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://getferrite.dev${post._path}`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-tertiary hover:text-rust transition-colors"
              aria-label="Share on Twitter"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://getferrite.dev${post._path}`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-tertiary hover:text-rust transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>

    <!-- Comments -->
    <section class="pb-16">
      <div class="container-narrow">
        <h2 class="font-display font-bold text-xl text-text-primary mb-6">Comments</h2>
        <GiscusComments />
      </div>
    </section>

    <!-- Related Posts -->
    <section v-if="relatedPosts?.length" class="section bg-ferrite-surface/50">
      <div class="container-wide">
        <h2 class="font-display font-bold text-xl text-text-primary mb-8">More from the blog</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="related in relatedPosts"
            :key="related._path"
            :to="related._path"
            class="card-hover group block"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="badge-rust text-xs capitalize">{{ related.category || 'Article' }}</span>
              <span class="text-xs text-text-tertiary">{{ formatDate(related.date) }}</span>
            </div>
            <h3 class="font-display font-semibold text-text-primary mb-2 group-hover:text-rust transition-colors">
              {{ related.title }}
            </h3>
            <p class="text-sm text-text-secondary line-clamp-2">
              {{ related.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
