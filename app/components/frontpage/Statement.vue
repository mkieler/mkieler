<script setup lang="ts">
import type { CmsStackContent } from '~/types/cms'

const props = defineProps<{
  stacks: CmsStackContent[]
}>()
</script>

<template>
  <section id="stacks" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Tech recommendations"
        title="Stacks I trust for maintainable, high-performing products"
        description="I align the technology choice with your budget, team capacity, and the outcomes you need—never just trends."
      />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <UiContentCard
          v-for="stack in props.stacks"
          :key="stack.id"
          :title="stack.name"
          :description="stack.headline"
        >
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
        </UiContentCard>
      </div>
    </UContainer>
  </section>
</template>
