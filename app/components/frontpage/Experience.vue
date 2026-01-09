<script setup lang="ts">
import type { CmsExperienceContent } from '~/types/cms'

const props = defineProps<{
  experience: CmsExperienceContent
}>()

const halfOfSkills = Math.ceil(props.experience.skills.length / 2)
const firstHalfSkills = props.experience.skills.slice(0, halfOfSkills)
const secondHalfSkills = props.experience.skills.slice(halfOfSkills)
</script>

<template>
  <UPageSection
    id="experience"
    headline="ERFARING"
    :title="props.experience.headline"
    :description="props.experience.summary"
    :ui="{
      title: 'md:text-2xl sm:text-lg lg:text-4xl text-lg',
      description: 'text-sm lg:text-base',
      root: 'pt-15 pb-30',
    }"
  >

      <div class="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] mt-12">
        <div class="space-y-15">
          <div class="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <p class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Erfaringsniveau
            </p>
            <p class="mt-2 text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {{ props.experience.primaryMetric }}
            </p>
            <p class="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
              {{ props.experience.narrative }}
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Fokusområder
            </h3>
            <ul class="text-sm md:text-base mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li v-for="area in props.experience.focusAreas" :key="area" class="flex items-start gap-2">
                <UIcon name="i-lucide-target" class="h-4 w-4 text-primary-500 mr-2" />
                <span>{{ area }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-15 lg:border-l border-t pt-5 lg:border-t-0 border-gray-200 pl-0 lg:pl-12 dark:border-gray-800">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Kompetencer og værktøjer
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <UiStackPill v-for="skill in props.experience.skills" :key="skill" :label="skill" />
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Fra idé til system
            </h3>
            <p>
              Alt starter med en idé.
              Mit arbejde er at gøre den til virkelighed – på en måde, der holder.
            </p>
            <p>
              Mellem forretning og teknologi finder jeg balancen, hvor arkitektur bliver til værdi.
            </p>
            <p>
              Når alt fungerer gnidningsfrit, mærker man det ikke.
              Og det er præcis sådan, det skal være.
            </p>
          </div>
        </div>
      </div>
  </UPageSection>
</template>
