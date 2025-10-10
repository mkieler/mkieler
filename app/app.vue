<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
// const nuxtApp = useNuxtApp()
// const { updateHeadings, visibleHeadings } = useScrollspy()


// nuxtApp.hooks.hookOnce('page:finish', () => {
//   updateHeadings([
//     document.querySelector('#hero'),
//     document.querySelector('#experience'),
//     document.querySelector('#about'),
//     document.querySelector('#testimonials')
//   ].filter(Boolean) as Element[])
// })

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

const navigationItems = computed(() => [
  { 
    label: 'Kompetencer', 
    to: '/#experience', 
    active: false,
    // active: visibleHeadings.value.includes('experience') && !visibleHeadings.value.includes('hero')
  },
  { 
    label: 'Om mig', 
    to: '/#about', 
    active: false,
  },
  {
    label: 'Services',
    to: '/#services',
    active: false,
  },
  { 
    label: 'Udtaelser', 
    to: '/#testimonials', 
    active: false,
  }
])

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

const showContactModal = ref(false)
</script>

<template>
  <UApp>
    <ContactModal v-model:open="showContactModal" />

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
        
        <USeparator orientation="vertical" class="mx-2 h-6" />

        <SocialIcons />

        <USeparator orientation="vertical" class="mx-2 h-6" />

        <UButton
          @click="showContactModal = true"
          label="Kontakt mig"
          color="primary"
          variant="solid"
          class="ml-2"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage @open-contact-modal="showContactModal = true" />
    </UMain>

    <USeparator :avatar="{ alt: 'Mattias Kieler', size: 'sm', ui: { root: 'w-10 h-10 bg-primary', fallback: '!text-inverted' } }" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Mattias Kieler • Alle rettigheder forbeholdes.
        </p>
      </template>

      <template #right>
        <SocialIcons />
      </template>
    </UFooter>
  </UApp>
</template>
