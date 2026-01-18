interface GitHubRepo {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}

interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  assets: {
    name: string
    download_count: number
    browser_download_url: string
  }[]
}

interface GitHubStats {
  stars: number
  forks: number
  totalDownloads: number
  latestVersion: string
  latestReleaseDate: string
  loading: boolean
  error: string | null
}

// Default stats for SSR and initial render
const defaultStats: GitHubStats = {
  stars: 0,
  forks: 0,
  totalDownloads: 0,
  latestVersion: '0.2.5.1',
  latestReleaseDate: 'January 2026',
  loading: true,
  error: null,
}

export const useGitHubStats = () => {
  // Use tryUseNuxtApp to check if we're in a valid Nuxt context
  const nuxtApp = tryUseNuxtApp()
  
  // If no Nuxt context (shouldn't happen in normal usage, but safety first)
  // return a basic ref-based state
  if (!nuxtApp) {
    const stats = ref<GitHubStats>({ ...defaultStats })
    return {
      stats,
      fetchStats: async () => {},
      formatNumber: (num: number) => num.toString(),
    }
  }

  // Use useState for shared state across components (SSR-safe)
  const stats = useState<GitHubStats>('github-stats', () => ({ ...defaultStats }))

  const fetchStats = async () => {
    // Only fetch on client side to avoid SSR issues
    if (import.meta.server) return

    // Don't refetch if we already have data
    if (stats.value.stars > 0 && !stats.value.loading) return

    try {
      // Fetch repo info for stars
      const repoResponse = await fetch('https://api.github.com/repos/OlaProeis/Ferrite')
      if (repoResponse.ok) {
        const repoData: GitHubRepo = await repoResponse.json()
        stats.value.stars = repoData.stargazers_count
        stats.value.forks = repoData.forks_count
      }

      // Fetch releases for download count and version
      const releasesResponse = await fetch('https://api.github.com/repos/OlaProeis/Ferrite/releases')
      if (releasesResponse.ok) {
        const releases: GitHubRelease[] = await releasesResponse.json()
        
        // Get total downloads across all releases
        let totalDownloads = 0
        for (const release of releases) {
          for (const asset of release.assets) {
            totalDownloads += asset.download_count
          }
        }
        stats.value.totalDownloads = totalDownloads

        // Get latest version info
        if (releases.length > 0) {
          const latest = releases[0]
          stats.value.latestVersion = latest.tag_name.replace(/^v/, '')
          stats.value.latestReleaseDate = new Date(latest.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })
        }
      }

      stats.value.loading = false
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error)
      stats.value.error = 'Failed to fetch stats'
      stats.value.loading = false
    }
  }

  // Format number with K/M suffix
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return {
    stats,
    fetchStats,
    formatNumber,
  }
}
