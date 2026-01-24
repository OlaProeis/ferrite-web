# Performance Optimization Tasks

This document outlines performance optimizations to improve PageSpeed Insights scores for getferrite.dev.

## Current State (January 22, 2026)

**PageSpeed Mobile Results:**
- LCP (Largest Contentful Paint): 18.8s ❌ (target: <2.5s)
- FCP (First Contentful Paint): 2.9s ⚠️ (target: <1.8s)
- Speed Index: 5.0s ⚠️
- TBT (Total Blocking Time): 0ms ✅
- CLS (Cumulative Layout Shift): 0 ✅

**Main issues identified by Lighthouse:**
1. Render-blocking requests (~970ms potential savings)
2. Image delivery (~1,719 KiB potential savings)

---

## Task 1: Add `font-display=swap` to Google Fonts

**File:** `nuxt.config.ts`

**Current (line ~77):**
```typescript
{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap' }
```

**Action:** The URL already has `&display=swap` at the end - verify this is working. If fonts still block rendering, consider preloading the font files directly.

**Alternative - preload fonts:**
```typescript
// Add before the stylesheet link
{ rel: 'preload', href: 'https://fonts.gstatic.com/s/outfit/v11/...woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
```

---

## Task 2: Preload Hero Image

**File:** `nuxt.config.ts`

**Add to `app.head.link` array:**
```typescript
{ rel: 'preload', href: '/img/og-image.png', as: 'image' },
```

**Or if using a different hero image, preload that instead.**

Also check `components/HeroSection.vue` and `components/ScreenshotsSection.vue` for the main LCP image candidates.

---

## Task 3: Replace `<img>` with `<NuxtImg>`

**Why:** `@nuxt/image` (already installed) provides:
- Automatic WebP/AVIF conversion
- Responsive srcset generation
- Lazy loading for below-fold images
- Proper width/height to prevent CLS

**Files to update:**

### `components/HeroSection.vue`
Find any `<img>` tags and replace with:
```vue
<NuxtImg 
  src="/img/demo.gif" 
  alt="Ferrite demo"
  width="800"
  height="600"
  loading="eager"  <!-- For above-fold images -->
  format="webp"
/>
```

### `components/ScreenshotsSection.vue`
```vue
<NuxtImg 
  src="/img/zen-dark.png" 
  alt="Zen mode screenshot"
  width="1200"
  height="800"
  loading="lazy"  <!-- For below-fold images -->
  format="webp"
/>
```

### `pages/blog/index.vue` and `pages/blog/[...slug].vue`
Replace post image `<img>` tags with `<NuxtImg>`.

### `components/FeatureTipsSection.vue`
Check for any tip images and convert.

---

## Task 4: Preload Critical Fonts (Optional - Advanced)

**If fonts are still slow after Task 1, self-host them:**

1. Download fonts from Google Fonts
2. Place in `public/fonts/`
3. Create `assets/css/fonts.css`:
```css
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Outfit-Regular.woff2') format('woff2');
}
/* ... repeat for other weights/families */
```
4. Import in `assets/css/main.css`
5. Remove Google Fonts link from `nuxt.config.ts`

---

## Verification

After implementing changes:

1. Run `npm run build && npm run preview` locally
2. Test with Lighthouse in Chrome DevTools
3. Deploy to Vercel
4. Re-test at https://pagespeed.web.dev/

**Target metrics:**
- LCP: <2.5s (green)
- FCP: <1.8s (green)
- Speed Index: <3.4s (green)

---

## Files Summary

| File | Changes |
|------|---------|
| `nuxt.config.ts` | Add image preload, verify font-display |
| `components/HeroSection.vue` | `<img>` → `<NuxtImg>` |
| `components/ScreenshotsSection.vue` | `<img>` → `<NuxtImg>` |
| `components/FeatureTipsSection.vue` | `<img>` → `<NuxtImg>` |
| `pages/blog/index.vue` | `<img>` → `<NuxtImg>` |
| `pages/blog/[...slug].vue` | `<img>` → `<NuxtImg>` |

---

## Notes

- The site already uses `@nuxt/image` module (in nuxt.config.ts)
- Images should NOT be reduced in quality - only format/delivery optimized
- Hero/above-fold images use `loading="eager"`, others use `loading="lazy"`
- GIF files may not benefit from WebP conversion - test case by case
