<script setup lang="ts">
import type { CmsStackContent } from '~/types/cms'

const props = defineProps<{
  stacks: CmsStackContent[]
}>()

const features = ref([
  {
    title: 'Web applikationer',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
  }
])

</script>

<template>

  <UPageSection
    headline="YDELSER JEG TILBYDER & TEKNOLOGIER JEG ANBEFALER"
    title="Applikationer bygget med de rette teknologier"
    description="Jeg matcher teknologivalget ud fra budget, teamkapacitet og de resultater, I skal levere. Aldrig bare trends."
    :ui="{headline: 'justify-start', description: 'text-left', title: 'text-left lg:text-4xl'}"
    
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
      <UCard
        v-for="stack in props.stacks"
        :key="stack.headline"
        :ui="{ 
          body: 'grid flex-col gap-4 justify-between h-full border border-primary dark:border-primary-dark rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300',
        }"
        variant="subtle"
      >
        <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {{ stack.name }}
        </h3>

        <p class="text-gray-600 dark:text-gray-400">
          {{ stack.headline }}
        </p>

        <p class="text-gray-600 dark:text-gray-400">
          {{ stack.description }}
        </p>

        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
          <li v-for="bullet in stack.bullets" :key="bullet" class="flex items-start gap-2">
            <UIcon name="i-lucide-check" class="mt-1 h-4 w-4 text-primary-500" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
        <div class="flex flex-wrap gap-2 pt-2">
          <UiStackPill v-for="tag in stack.tags" :key="tag" :label="tag" />
        </div>

        <UButton
          variant="solid"
          color="primary"
          size="xl"
          class="mt-10 flex w-full justify-center"
        >
          Kontakt mig for at høre mere
        </UButton>
      </UCard>
    </div>
  </UPageSection>
</template>
