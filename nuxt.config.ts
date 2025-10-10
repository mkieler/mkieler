// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
    // '@nuxtjs/sitemap' // Enable when ready to publish sitemap.xml
  ],

  devtools: {
    enabled: true
  },

  srcDir: 'app',
  css: ['~/assets/css/main.css'],

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
    preset: 'vercel-edge',
    prerender: {
      routes: ['/']
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
