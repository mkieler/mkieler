<script setup lang="ts">
const route = useRoute()
const content = useContent()
const locationSlug = route.params.location as string
const serviceSlug = route.params.service as string

// Valid locations
const validLocations = ['koebenhavn', 'aarhus', 'odense', 'aalborg', 'danmark']

if (!validLocations.includes(locationSlug)) {
  throw createError({ statusCode: 404, message: 'Side ikke fundet' })
}

const { data: location } = await content.getLocation(locationSlug)
const { data: service } = await content.getService(serviceSlug)
const { data: services } = await content.getServices()
const { data: locations } = await content.getLocations()

if (!location.value || !service.value) {
  throw createError({ statusCode: 404, message: 'Side ikke fundet' })
}

const pageTitle = `${service.value.title} ${location.value.suffix}`
const pageDescription = `${service.value.description} Professionel ${service.value.title.toLowerCase()} ${location.value.suffix} af erfaren fullstack udvikler.`

const relatedServices = computed(() =>
  services.value?.filter(s => s.slug !== serviceSlug).slice(0, 3) || []
)

const otherLocations = computed(() =>
  locations.value?.filter(l => l.slug !== locationSlug) || []
)

useSeoMeta({
  title: `${pageTitle} | Mattias Kieler`,
  description: pageDescription,
  ogTitle: `${pageTitle} | Mattias Kieler`,
  ogDescription: pageDescription
})

useHead({
  link: [{ rel: 'canonical', href: `https://mkieler.com/${locationSlug}/${serviceSlug}` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: pageTitle,
        description: pageDescription,
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
  <div v-if="location && service">
    <SharedBreadcrumb
      :items="[
        { label: 'Forside', to: '/' },
        { label: location.city, to: `/${locationSlug}` },
        { label: service.title }
      ]"
    />

    <UPageHero
      :title="pageTitle"
      :description="service.headline"
      :ui="{
        root: 'py-12 bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20',
        title: 'text-3xl sm:text-4xl',
      }"
    />

    <UContainer class="py-12">
      <div class="grid gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {{ service.title }} {{ location.suffix }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              {{ service.longDescription }}
            </p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Som erfaren webudvikler {{ location.suffix }} hjælper jeg virksomheder med at bygge moderne, skalerbare webløsninger. Uanset om du er en startup eller en etableret virksomhed, tilpasser jeg løsningen til dine specifikke behov.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Hvad du får med {{ service.title.toLowerCase() }}
            </h3>
            <ul class="space-y-3">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <UIcon name="i-lucide-check" class="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                <span class="text-gray-600 dark:text-gray-400">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Fordele ved at arbejde med mig
            </h3>
            <ul class="space-y-3">
              <li
                v-for="benefit in service.benefits"
                :key="benefit"
                class="flex items-start gap-3"
              >
                <UIcon name="i-lucide-star" class="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                <span class="text-gray-600 dark:text-gray-400">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <UCard :ui="{ body: 'space-y-4' }">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Teknologier
            </h3>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in service.technologies"
                :key="tech"
                :label="tech"
                color="primary"
                variant="subtle"
              />
            </div>
          </UCard>

          <UCard :ui="{ body: 'space-y-4' }">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Klar til at komme i gang?
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Kontakt mig for en uforpligtende snak om dit projekt {{ location.suffix }}.
            </p>
            <UButton
              label="Kontakt mig"
              color="primary"
              block
              @click="$emit('open-contact-modal')"
            />
          </UCard>

          <UCard v-if="otherLocations.length" :ui="{ body: 'space-y-4' }">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ service.title }} i andre byer
            </h3>
            <ul class="space-y-2">
              <li v-for="loc in otherLocations" :key="loc.slug">
                <NuxtLink
                  :to="`/${loc.slug}/${serviceSlug}`"
                  class="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                >
                  {{ service.title }} {{ loc.suffix }}
                </NuxtLink>
              </li>
            </ul>
          </UCard>
        </div>
      </div>

      <div v-if="relatedServices.length" class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Andre services {{ location.suffix }}
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <SharedServiceCard
            v-for="related in relatedServices"
            :key="related.slug"
            :service="related"
            :location-slug="locationSlug"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>
