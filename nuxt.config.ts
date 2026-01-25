// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/critters',
    // '@nuxtjs/sitemap' // Enable when ready to publish sitemap.xml
  ],

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
      cmsBaseUrl: '',
      siteUrl: 'https://mkieler.dev',
      linkedinUrl: 'https://www.linkedin.com/in/mattiaskieler',
      contactEmail: 'hello@mkieler.dev',
      resumeUrl: '/resume.pdf',
      githubUrl: 'https://github.com/mkieler'
    }
  },

  routeRules: {
    '/': { prerender: true }
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