<script setup lang="ts">
import type { CmsExperienceContent } from '~/types/cms'

const props = defineProps<{
  experience: CmsExperienceContent
}>()
</script>

<template>
  <section id="experience" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Experience"
        :title="props.experience.headline"
        :description="props.experience.summary"
      />

      <div class="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div class="space-y-6">
          <div class="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <p class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Experience level
            </p>
            <p class="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {{ props.experience.primaryMetric }}
            </p>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              {{ props.experience.narrative }}
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Focus areas
            </h3>
            <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li v-for="area in props.experience.focusAreas" :key="area" class="flex items-start gap-2">
                <UIcon name="i-lucide-target" class="mt-1 h-4 w-4 text-primary-500" />
                <span>{{ area }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Skills & tools
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <UiStackPill v-for="skill in props.experience.skills" :key="skill" :label="skill" />
            </div>
          </div>

          <div v-if="props.experience.highlights.length" class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Selected highlights
            </h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li v-for="highlight in props.experience.highlights" :key="highlight" class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="mt-1 h-4 w-4 text-primary-500" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
