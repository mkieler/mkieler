<script setup lang="ts">
import type { CmsProjectContent } from '~/types/cms'

const props = defineProps<{
  projects: CmsProjectContent[]
}>()
</script>

<template>
  <section id="projects" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Udvalgte projekter"
        title="Repræsentativt arbejde"
        description="Et udsnit af de SaaS-platforme, integrationer og statisk-først sites, jeg bygger. Fuld portefølje kan deles efter aftale."
      />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <UCard
          v-for="project in props.projects"
          :key="project.id"
          :ui="{ body: 'space-y-4 p-6' }"
        >
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {{ project.title }}
            </h3>
            <p class="text-sm font-medium text-primary-500 dark:text-primary-400">
              {{ project.role }}
            </p>
          </div>

          <p class="text-gray-600 dark:text-gray-400">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <UiStackPill v-for="tag in project.stack" :key="tag" :label="tag" />
          </div>

          <div v-if="project.links.length" class="flex flex-wrap gap-2 pt-2">
            <UButton
              v-for="link in project.links"
              :key="link.id"
              :label="link.label"
              :to="link.href"
              :target="link.target"
              variant="ghost"
              color="neutral"
              size="sm"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
