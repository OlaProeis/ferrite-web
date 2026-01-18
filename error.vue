<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Page Not Found - Ferrite' : 'Error - Ferrite',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-ferrite-bg flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <!-- Error Code -->
      <div class="mb-8">
        <span class="text-8xl md:text-9xl font-display font-bold text-gradient">
          {{ error?.statusCode || '500' }}
        </span>
      </div>

      <!-- Error Message -->
      <h1 class="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
        {{ is404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      
      <p class="text-text-secondary mb-8">
        {{ is404 
          ? "The page you're looking for doesn't exist or has been moved." 
          : error?.message || 'An unexpected error occurred.' 
        }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button @click="handleError" class="btn-primary">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </button>
        <a 
          href="https://github.com/OlaProeis/Ferrite/issues" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          Report Issue
        </a>
      </div>

      <!-- Helpful Links -->
      <div class="mt-12 pt-8 border-t border-ferrite-border">
        <p class="text-sm text-text-tertiary mb-4">Looking for something?</p>
        <div class="flex flex-wrap items-center justify-center gap-4 text-sm">
          <NuxtLink to="/download" class="link">Download</NuxtLink>
          <NuxtLink to="/features" class="link">Features</NuxtLink>
          <NuxtLink to="/blog" class="link">Blog</NuxtLink>
          <NuxtLink to="/about" class="link">About</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
