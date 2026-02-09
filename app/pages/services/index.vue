<script setup lang="ts">
const content = useContent()

const [{ data: page }, { data: services }] = await Promise.all([
  content.getServicesPage(),
  content.getServices()
])

if (page.value) {
  useSeoMeta({
    title: page.value.seo.title,
    description: page.value.seo.description,
    ogTitle: page.value.seo.ogTitle,
    ogDescription: page.value.seo.ogDescription
  })
}

useHead({
  link: [{ rel: 'canonical', href: 'https://mkieler.com/services' }]
})
</script>

<template>
  <div v-if="page">
    <SharedBreadcrumb
      :items="[
        { label: 'Forside', to: '/' },
        { label: page.title }
      ]"
    />

    <UPageHero
      :title="page.headline"
      :description="page.description"
      :ui="{
        root: 'py-12 bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20',
        title: 'text-3xl sm:text-4xl',
      }"
    />

    <UContainer class="py-12">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SharedServiceCard
          v-for="service in services"
          :key="service.slug"
          :service="service"
        />
      </div>

      <div class="mt-16 text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ page.cta.text }}
        </p>
        <UButton
          :label="page.cta.buttonLabel"
          color="primary"
          size="lg"
          @click="$emit('open-contact-modal')"
        />
      </div>
    </UContainer>
  </div>
</template>
