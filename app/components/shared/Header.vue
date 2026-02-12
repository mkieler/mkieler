<script setup lang="ts">
const emit = defineEmits<{
  'open-contact-modal': []
}>()

const content = useContent()
const { data: services } = await content.getServices()

const serviceChildren = computed(() => {
  const items = [{ label: 'Alle services', to: '/services', icon: 'i-lucide-grid-2x2' }]
  if (services.value) {
    items.push(...services.value.map(s => ({
      label: s.title,
      to: `/services/${s.slug}`,
      icon: s.icon
    })))
  }
  return items
})

const navigationItems = computed(() => [
  { label: 'Kompetencer', to: '/#experience', active: false },
  { label: 'Om mig', to: '/#about', active: false },
  {
    label: 'Services',
    active: false,
    children: serviceChildren.value
  },
  { label: 'Udtalelser', to: '/#testimonials', active: false }
])

const mobileNavigationItems = [
  { label: 'Kompetencer', to: '/#experience' },
  { label: 'Om mig', to: '/#about' },
  { label: 'Services', to: '/services' },
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

    <UNavigationMenu
      :items="navigationItems"
      class="hidden md:inline-flex"
      :ui="{
        viewportWrapper: 'w-auto left-1/2 -translate-x-1/2',
        viewport: 'w-[800px]',
        childList: 'grid grid-cols-1 md:grid-cols-3 gap-4',
      }"
    />

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
