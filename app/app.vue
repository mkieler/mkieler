<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: '/_fonts' }
  ],
  htmlAttrs: { lang: 'da' }
})

const showContactModal = ref(false)
</script>

<template>
  <UApp>
    <ContactModal v-model:open="showContactModal" />
    <AppHeader @open-contact-modal="showContactModal = true" />

    <UMain>
      <NuxtPage @open-contact-modal="showContactModal = true" />
    </UMain>

    <AppFooter />
  </UApp>
</template>
