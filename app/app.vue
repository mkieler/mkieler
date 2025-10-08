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
    lang: 'da'
  }
})

const siteTitle = 'Mattias Kieler · Laravel + Nuxt-ingeniør'
const siteDescription = 'Fractional CTO og senior fullstack-udvikler med fokus på Laravel-backends og Nuxt-frontends, der forbliver hurtige, tilgængelige og lette at vedligeholde.'

const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
const ogImage = `${siteUrl.replace(/\/$/, '')}/og-image.jpg`

const navigationItems = [
  { label: 'Teknologistakke', href: '/#stacks' },
  { label: 'Erfaring', href: '/#experience' },
  { label: 'Projekter', href: '/#projects' },
  { label: 'Kontakt', href: '/#contact' }
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
          to="githubLink"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />

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
          label="Kontakt mig"
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
          © {{ new Date().getFullYear() }} Mattias Kieler • Bygget med Nuxt SSG
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
