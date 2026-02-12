<script setup lang="ts">
import type { ServiceContent } from '~/types/content'

const props = defineProps<{
  services: ServiceContent[]
}>()
</script>

<template>
  <UPageSection
    id="services"
    headline="YDELSER JEG TILBYDER"
    title="Services der matcher dine behov"
    description="Jeg matcher teknologivalget ud fra budget, teamkapacitet og de resultater, I skal levere. Aldrig bare trends."
    :ui="{
      headline: 'justify-start',
      description: 'text-left',
      title: 'text-left lg:text-4xl',
      root: 'pt-20',
    }"
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
      <UCard
        v-for="service in props.services"
        :key="service.slug"
        :ui="{
          root: 'border border-primary-500/40 dark:border-primary-dark',
          body: 'grid flex-col gap-4 justify-between h-full',
        }"
        variant="subtle"
      >
        <div class="flex items-center gap-3">
          <UIcon v-if="service.icon" :name="service.icon" class="h-8 w-8 text-primary-500" />
          <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {{ service.title }}
          </h3>
        </div>

        <p class="text-gray-600 dark:text-gray-400">
          {{ service.description }}
        </p>

        <NuxtLink
          :to="`/services/${service.slug}`"
          class="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1"
        >
          Læs mere
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </UCard>
    </div>

    <div class="flex justify-center">
      <UButton
        variant="outline"
        color="primary"
        size="xl"
        to="/services"
        trailing-icon="i-lucide-arrow-right"
      >
        Se alle services
      </UButton>
    </div>
  </UPageSection>
</template>
