<script setup lang="ts">
import type { StackContent } from '~/types/content'

const props = defineProps<{
  stacks: StackContent[]
}>()
</script>

<template>

  <UPageSection
    id="services"
    headline="YDELSER JEG TILBYDER & TEKNOLOGIER JEG ANBEFALER"
    title="Applikationer bygget med de rette teknologier"
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
        v-for="stack in props.stacks"
        :key="stack.headline"
        :ui="{ 
          root: 'border border-primary-500/40 dark:border-primary-dark',
          body: 'grid flex-col gap-4 justify-between h-full',
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
          <SharedStackPill v-for="tag in stack.tags" :key="tag" :label="tag" />
        </div>

        <UButton
          variant="solid"
          color="primary"
          size="xl"
          class="mt-10 flex w-full justify-center"
          @click="$emit('open-contact-modal')"
        >
          Kontakt mig for at høre mere
        </UButton>
      </UCard>
    </div>
  </UPageSection>
</template>
