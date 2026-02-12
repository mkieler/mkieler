<script setup lang="ts">
const route = useRoute()
const content = useContent()
const slug = route.params.slug as string

const { data: service } = await content.getService(slug)
const { data: services } = await content.getServices()

if (!service.value) {
  throw createError({ statusCode: 404, message: 'Service ikke fundet' })
}

const relatedServices = computed(() =>
  services.value?.filter(s => s.slug !== slug).slice(0, 3) || []
)

// Use SEO data from API if available
if (service.value.seo) {
  useSeoMeta({
    title: service.value.seo.title,
    description: service.value.seo.description,
    ogTitle: service.value.seo.ogTitle,
    ogDescription: service.value.seo.ogDescription
  })
} else {
  useSeoMeta({
    title: `${service.value.title} | Mattias Kieler`,
    description: service.value.description,
    ogTitle: `${service.value.title} | Mattias Kieler`,
    ogDescription: service.value.description
  })
}

// Use schemaOrg from API if available
const schemaOrgScripts = []
if (service.value.schemaOrg?.service) {
  schemaOrgScripts.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      ...service.value.schemaOrg.service
    })
  })
}
if (service.value.schemaOrg?.breadcrumb) {
  schemaOrgScripts.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      ...service.value.schemaOrg.breadcrumb
    })
  })
}

useHead({
  link: [{ rel: 'canonical', href: `https://mkieler.com/services/${slug}` }],
  script: schemaOrgScripts.length ? schemaOrgScripts : [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.value.title,
        description: service.value.description,
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
  <div v-if="service">
    <SharedBreadcrumb
      :items="[
        { label: 'Forside', to: '/' },
        { label: 'Services', to: '/services' },
        { label: service.title }
      ]"
    />

    <UPageHero
      :title="service.title"
      :description="service.headline"
      :ui="{
        root: 'bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20',
        title: 'text-3xl sm:text-4xl',
      }"
    />

    <UContainer class="pb-12">
      <div class="grid gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Om {{ service.title.toLowerCase() }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {{ service.longDescription }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Hvad du får
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
              Fordele
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
              Kontakt mig for en uforpligtende snak om dit projekt.
            </p>
            <UButton
              label="Kontakt mig"
              color="primary"
              block
              @click="$emit('open-contact-modal')"
            />
          </UCard>

        </div>
      </div>

      <div v-if="relatedServices.length" class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Relaterede services
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <SharedServiceCard
            v-for="related in relatedServices"
            :key="related.slug"
            :service="related"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>
