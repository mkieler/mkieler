<script setup lang="ts">
import type { ServiceContent } from '~/types/content'

const props = defineProps<{
  service: ServiceContent
  locationSlug?: string
}>()

const href = computed(() => {
  if (props.locationSlug) {
    return `/${props.locationSlug}/${props.service.slug}`
  }
  return `/services/${props.service.slug}`
})
</script>

<template>
  <NuxtLink :to="href" class="block h-full">
    <UCard
      :ui="{
        root: 'hover:border-primary-500 transition-colors h-full',
        body: 'flex flex-col gap-4 h-full'
      }"
    >
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
          <UIcon :name="props.service.icon" class="h-5 w-5 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ props.service.title }}
        </h3>
      </div>

      <p class="text-gray-600 dark:text-gray-400 flex-grow">
        {{ props.service.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="tech in props.service.technologies.slice(0, 4)"
          :key="tech"
          :label="tech"
          color="neutral"
          variant="subtle"
          size="sm"
        />
        <UBadge
          v-if="props.service.technologies.length > 4"
          :label="`+${props.service.technologies.length - 4}`"
          color="neutral"
          variant="subtle"
          size="sm"
        />
      </div>

      <div class="mt-auto pt-4">
        <span
          class="inline-flex items-center justify-center gap-2 w-full text-primary-500 font-medium"
        >
          Læs mere
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </span>
      </div>
    </UCard>
  </NuxtLink>
</template>
