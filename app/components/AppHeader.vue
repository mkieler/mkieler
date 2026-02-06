<script setup lang="ts">
const emit = defineEmits<{
  'open-contact-modal': []
}>()

const navigationItems = [
  { label: 'Kompetencer', to: '/#experience', active: false },
  { label: 'Om mig', to: '/#about', active: false },
  { label: 'Services', to: '/#services', active: false },
  { label: 'Udtalelser', to: '/#testimonials', active: false }
]
</script>

<template>
  <UHeader mode="slideover" :ui="{ content: 'w-md max-w-[90%]' }">
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="navigationItems" class="hidden md:inline-flex" />

    <template #right>
      <UColorModeButton />
      <USeparator orientation="vertical" class="sm:mx-2 h-6" />
      <SocialIcons />
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
      <UNavigationMenu :items="navigationItems" vertical orientation="vertical" />
    </template>
  </UHeader>
</template>
