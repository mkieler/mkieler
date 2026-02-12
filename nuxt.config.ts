// https://nuxt.com/docs/api/configuration/nuxt-config

// Disable SSL verification in development for self-signed certificates
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/critters',
    '@nuxtjs/sitemap',
    '@nuxtjs/turnstile'
  ],

  turnstile: {
    siteKey: '0x4AAAAAACQOuw-doa3_L5q0'
  },

  site: {
    url: 'https://mkieler.com',
    name: 'Mattias Kieler'
  },

  devtools: {
    enabled: true
  },

  vite: {
    build: {
      cssCodeSplit: true,
      sourcemap: true
    }
  },

  sourcemap: {
    server: false,
    client: true
  },

  srcDir: 'app',
  css: ['assets/css/main.css'],

  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin']
    },
    families: [
      {
        name: 'Public Sans',
        provider: 'google',
        global: true,
        weights: [400, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin']
      }
    ]
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://mkieler.com',
      linkedinUrl: 'https://www.linkedin.com/in/mattiaskieler',
      contactEmail: 'hello@mkieler.dev',
      resumeUrl: '/resume.pdf',
      githubUrl: 'https://github.com/mkieler',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://api.mkieler.com' 
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { prerender: true }
  },

  nitro: {
    compressPublicAssets: true,
    devProxy: {
      host: 'localhost'
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})