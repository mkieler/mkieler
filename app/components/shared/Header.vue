<script setup lang="ts">
const emit = defineEmits<{
  'open-contact-modal': []
}>()

const navigationItems = [
  { label: 'Kompetencer', to: '/#experience', active: false },
  { label: 'Om mig', to: '/#about', active: false },
  {
    label: 'Services',
    active: false,
    children: [
      { label: 'Alle services', to: '/services' },
      { label: 'Webudvikling', to: '/services/webudvikling' },
      { label: 'Web Applikationer', to: '/services/webapp' },
      { label: 'Webshop & E-commerce', to: '/services/webshop' },
      { label: 'Frontend Udvikling', to: '/services/frontend' },
      { label: 'Backend Udvikling', to: '/services/backend' },
      { label: 'API Udvikling', to: '/services/api-udvikling' },
      { label: 'Mobil App', to: '/services/mobil-app' },
      { label: 'Hosting', to: '/hosting' }
    ]
  },
  { label: 'Udtalelser', to: '/#testimonials', active: false }
]

const mobileNavigationItems = [
  { label: 'Kompetencer', to: '/#experience' },
  { label: 'Om mig', to: '/#about' },
  { label: 'Services', to: '/services' },
  { label: 'Hosting', to: '/hosting' },
  { label: 'Udtalelser', to: '/#testimonials' }
]
</script>

<template>
  <UHeader mode="slideover" :ui="{ content: 'w-md max-w-[90%]' }">
    <template #left>
      <NuxtLink to="/">
        <SharedLogo class="w-auto shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="navigationItems" class="hidden md:inline-flex" />

    <template #right>
      <UColorModeButton />
      <USeparator orientation="vertical" class="sm:mx-2 h-6" />
      <SharedSocialIcons />
      <USeparator orientation="vertical" class="sm:mx-2 h-6" />
      <UButton
        label="Kontakt mig"
        color="primary"
        variant="solid"
        class="ml-2 hidden md:inline-flex"
        @click="emit('open-contact-modal')"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="mobileNavigationItems" vertical orientation="vertical" />
    </template>
  </UHeader>
</template>
