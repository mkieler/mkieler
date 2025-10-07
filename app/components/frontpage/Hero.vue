<script setup lang="ts">
import type { CmsHeroContent } from '~/types/cms'

const props = defineProps<{
  hero: CmsHeroContent
}>()
</script>

<template>
  <section id="hero" class="py-20 sm:py-70 bg-gradient-to-t from-indigo-900/10 to-transparent border-b border-primary-200 dark:border-gray-800">
    <UContainer class="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
      <div class="space-y-6">
        <p v-if="props.hero.eyebrow" class="text-sm font-semibold uppercase tracking-wide text-primary-500 dark:text-primary-400">
          {{ props.hero.eyebrow }}
        </p>

        <div class="space-y-3">
          <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            {{ props.hero.headline }}
          </h1>

          <p class="text-xl text-gray-700 dark:text-gray-300">
            {{ props.hero.lead }}
          </p>
        </div>

        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ props.hero.supportingText }}
        </p>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <UButton
            :label="props.hero.primaryCta.label"
            :to="props.hero.primaryCta.href"
            color="primary"
            variant="solid"
            size="lg"
          />

          <UButton
            :label="props.hero.secondaryCta.label"
            :to="props.hero.secondaryCta.href"
            :target="props.hero.secondaryCta.target"
            color="neutral"
            variant="ghost"
            size="lg"
          />
        </div>

        <div v-if="props.hero.badges?.length" class="flex flex-wrap gap-3 pt-4">
          <UiStackPill
            v-for="badge in props.hero.badges"
            :key="badge.id"
            :label="badge.label"
          />
        </div>
      </div>

      <div class="rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
        <p class="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          What you get
        </p>
        <ul class="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-rocket" class="mt-1 h-5 w-5 text-primary-500" />
            <span>End-to-end ownership from problem discovery to deployment.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-gauge" class="mt-1 h-5 w-5 text-primary-500" />
            <span>Performance budgets baked into every build and release.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-shield-check" class="mt-1 h-5 w-5 text-primary-500" />
            <span>Secure foundations with authentication, audits, and observability.</span>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>


<style scoped>
  .hero-gradient-bg {
    background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(75, 77, 228, 0) 70%);
  }
</style>