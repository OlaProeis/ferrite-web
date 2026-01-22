/**
 * Client-side SEO plugin
 * Adds canonical URLs after route is resolved (avoids SSR issues)
 */
export default defineNuxtPlugin(() => {
  const route = useRoute()
  const siteUrl = 'https://getferrite.dev'

  // Set canonical URL on each navigation
  watch(() => route.path, (path) => {
    const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '')
    useHead({
      link: [
        { rel: 'canonical', href: `${siteUrl}${normalizedPath}` }
      ]
    })
  }, { immediate: true })
})
