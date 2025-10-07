<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const siteTitle = 'Matthias Kieler · Laravel + Nuxt Engineer'
const siteDescription = 'Fractional CTO and senior full-stack developer focused on Laravel backends and Nuxt frontends that stay fast, accessible, and maintainable.'

const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
const ogImage = `${siteUrl.replace(/\/$/, '')}/og-image.jpg`

const navigationItems = [
  { label: 'Stacks', href: '/#stacks' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' }
]

const linkedinLink = runtimeConfig.public.linkedinUrl || 'https://www.linkedin.com/in/mattiaskieler'
const contactLink = '/#contact'

useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  ogImage,
  ogUrl: siteUrl,
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto shrink-0" />
        </NuxtLink>
      </template>

      <UNavigationMenu
        :items="navigationItems"
        class="hidden md:inline-flex"
      />

      <template #right>
        <UColorModeButton />

        <UButton
          :to="linkedinLink"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />

        <UButton
          :to="contactLink"
          label="Get in touch"
          color="primary"
          variant="solid"
          class="ml-2"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Matthias Kieler • Built with Nuxt SSG
        </p>
      </template>

      <template #right>
        <UButton
          :to="linkedinLink"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
