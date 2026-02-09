<script setup lang="ts">
const route = useRoute()
const content = useContent()
const locationSlug = route.params.location as string

// Valid locations
const validLocations = ['koebenhavn', 'aarhus', 'odense', 'aalborg', 'danmark']

if (!validLocations.includes(locationSlug)) {
  throw createError({ statusCode: 404, message: 'Side ikke fundet' })
}

const { data: location } = await content.getLocation(locationSlug)
const { data: services } = await content.getServices()

if (!location.value) {
  throw createError({ statusCode: 404, message: 'Lokation ikke fundet' })
}

useSeoMeta({
  title: `${location.value.headline} | Mattias Kieler`,
  description: location.value.description,
  ogTitle: `${location.value.headline} | Mattias Kieler`,
  ogDescription: location.value.description
})

useHead({
  link: [{ rel: 'canonical', href: `https://mkieler.com/${locationSlug}` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Mattias Kieler - Webudvikler ${location.value.suffix}`,
        description: location.value.description,
        areaServed: location.value.city,
        provider: {
          '@type': 'Person',
          name: 'Mattias Kieler'
        }
      })
    }
  ]
})
</script>

<template>
  <div v-if="location">
    <SharedBreadcrumb
      :items="[
        { label: 'Forside', to: '/' },
        { label: location.city }
      ]"
    />

    <UPageHero
      :title="location.headline"
      :description="location.description"
      :ui="{
        root: 'py-12 bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20',
        title: 'text-3xl sm:text-4xl',
      }"
    />

    <UContainer class="py-12">
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Mine services {{ location.suffix }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Uanset om du er baseret {{ location.suffix }} eller i resten af landet, kan jeg hjælpe dig med at bygge moderne webløsninger. Her er de services jeg tilbyder:
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SharedServiceCard
          v-for="service in services"
          :key="service.slug"
          :service="service"
          :location-slug="locationSlug"
        />
      </div>

      <UCard class="mt-16" :ui="{ body: 'text-center py-8' }">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Klar til at starte dit projekt {{ location.suffix }}?
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Kontakt mig for en uforpligtende snak om dit projekt. Jeg arbejder remote-first, så uanset hvor du er baseret, kan vi samarbejde effektivt.
        </p>
        <UButton
          label="Kontakt mig"
          color="primary"
          size="lg"
          @click="$emit('open-contact-modal')"
        />
      </UCard>
    </UContainer>
  </div>
</template>
