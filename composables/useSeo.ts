/**
 * Composable for common SEO functionality
 * Handles canonical URLs, breadcrumbs, and other SEO enhancements
 */

const SITE_URL = 'https://getferrite.dev'

export interface BreadcrumbItem {
  name: string
  path?: string
}

/**
 * Sets the canonical URL for the current page
 */
export const useCanonicalUrl = (path?: string) => {
  const route = useRoute()
  const canonicalPath = path || route.path
  
  // Normalize path: remove trailing slash except for root
  const normalizedPath = canonicalPath === '/' 
    ? '' 
    : canonicalPath.replace(/\/$/, '')
  
  useHead({
    link: [
      { rel: 'canonical', href: `${SITE_URL}${normalizedPath}` }
    ]
  })
}

/**
 * Adds breadcrumb structured data for better navigation in search results
 */
export const useBreadcrumbs = (items: BreadcrumbItem[]) => {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path && { item: `${SITE_URL}${item.path}` })
    }))
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(breadcrumbList)
      }
    ]
  })
}

/**
 * Returns the full absolute URL for a path
 */
export const getAbsoluteUrl = (path: string): string => {
  return `${SITE_URL}${path}`
}

/**
 * Site URL constant for use in templates
 */
export const useSiteUrl = (): string => {
  return SITE_URL
}
