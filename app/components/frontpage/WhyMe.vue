<script setup lang="ts">
import type { CmsExperienceContent } from '~/types/cms'

const props = defineProps<{
  pitch: CmsExperienceContent['performancePitch']
}>()
</script>

<template>
  <section id="why-nuxt" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Performance & SEO"
        :title="props.pitch.title"
        align="center"
      />

      <div class="mx-auto max-w-3xl space-y-6 text-lg text-gray-700 dark:text-gray-300">
        <p v-for="paragraph in props.pitch.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>

        <div class="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
          <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100">
            Why search engines appreciate it
          </h3>
          <ul class="mt-4 space-y-2">
            <li v-for="point in props.pitch.seoPoints" :key="point" class="flex items-start gap-2">
              <UIcon name="i-lucide-search" class="mt-1 h-4 w-4 text-primary-500" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

        <p class="text-base font-medium text-gray-900 dark:text-gray-100">
          {{ props.pitch.verificationPrompt }}
        </p>
      </div>
    </UContainer>
  </section>
</template>
