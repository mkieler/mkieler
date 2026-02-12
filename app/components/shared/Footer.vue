<script setup lang="ts">
const year = new Date().getFullYear()

const content = useContent()
const { data: services } = await content.getServices()

const serviceLinks = computed(() => {
  if (!services.value) return []
  return services.value.map(s => ({
    label: s.title,
    to: `/services/${s.slug}`
  }))
})

const quickLinks = [
  { label: 'Kompetencer', to: '/#experience' },
  { label: 'Om mig', to: '/#about' },
  { label: 'Services', to: '/services' },
  { label: 'Udtalelser', to: '/#testimonials' }
]
</script>

<template>
  <footer>
    <USeparator :avatar="{ alt: 'Mattias Kieler', size: 'sm', ui: { root: 'w-10 h-10 bg-primary', fallback: '!text-inverted' } }" />
    <UContainer class="py-12">
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <SharedLogo class="mb-4" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Fullstack webudvikler med speciale i Laravel og Nuxt.
          </p>
          <SharedSocialIcons />
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Services</h4>
          <ul class="space-y-2">
            <li v-for="link in serviceLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Genveje</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-500">
          &copy; {{ year }} Mattias Kieler &bull; Alle rettigheder forbeholdes.
        </p>
        <p class="text-xs text-gray-400 dark:text-gray-600">
          Bygget med Nuxt SSG for optimal performance
        </p>
      </div>
    </UContainer>
  </footer>
</template>
