const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Rust/Iron Theme)
        ferrite: {
          bg: '#0a0a0b',
          surface: '#141416',
          'surface-elevated': '#1a1a1e',
          border: '#2a2a2e',
          'border-subtle': '#1f1f23',
        },
        // Accent Colors
        rust: {
          DEFAULT: '#e07020',
          light: '#f08030',
          dark: '#c45d10',
          glow: 'rgba(224, 112, 32, 0.15)',
        },
        amber: {
          DEFAULT: '#f5a623',
          light: '#ffc847',
          dark: '#d4890f',
        },
        copper: {
          DEFAULT: '#b87333',
          light: '#d4945a',
          dark: '#96571f',
        },
        // Text
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a5',
          tertiary: '#6a6a70',
        },
        // Semantic
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f5a623',
        code: '#1a1a1e',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-rust': 'linear-gradient(135deg, #e07020 0%, #c45d10 50%, #b87333 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(224, 112, 32, 0.15) 0%, transparent 70%)',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a2a2e' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        'glow': '0 0 40px rgba(224, 112, 32, 0.15)',
        'glow-lg': '0 0 80px rgba(224, 112, 32, 0.2)',
        'inner-glow': 'inset 0 0 40px rgba(224, 112, 32, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#a0a0a5',
            '--tw-prose-headings': '#f5f5f5',
            '--tw-prose-lead': '#a0a0a5',
            '--tw-prose-links': '#e07020',
            '--tw-prose-bold': '#f5f5f5',
            '--tw-prose-counters': '#6a6a70',
            '--tw-prose-bullets': '#6a6a70',
            '--tw-prose-hr': '#2a2a2e',
            '--tw-prose-quotes': '#f5f5f5',
            '--tw-prose-quote-borders': '#e07020',
            '--tw-prose-captions': '#6a6a70',
            '--tw-prose-code': '#f5f5f5',
            '--tw-prose-pre-code': '#f5f5f5',
            '--tw-prose-pre-bg': '#1a1a1e',
            '--tw-prose-th-borders': '#2a2a2e',
            '--tw-prose-td-borders': '#2a2a2e',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              backgroundColor: '#1a1a1e',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1a1a1e',
              border: '1px solid #2a2a2e',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
