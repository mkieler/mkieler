<script setup lang="ts">
import type { HeroContent } from '~/types/content'

const props = defineProps<{
  hero: HeroContent
}>()

const badge = {
  color: 'neutral' as 'neutral',
  variant: 'outline' as 'outline',
  size: 'xl' as 'xl',
  class: 'text-sm p-1 sm:text-base sm:p-2'
}
</script>

<template>
  <UPageHero :title="props.hero.headline" :headline="props.hero.eyebrow" orientation="horizontal" :ui="{
    root: 'py-20 bg-gradient-to-t from-indigo-900/10 to-transparent border-b border-primary-200 dark:border-gray-800',
    title: 'text-3xl sm:text-5xl mb-7',
    headline: 'text-xs sm:text-lg',
  }"
  id="hero"
  >
    <template #description>
      <h1 class="text-sm sm:text-xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
        Senior udvikler med forretningslogikken tæt ind til kroppen. 
        Speciale i <UBadge v-bind="badge">Laravel</UBadge> + <UBadge v-bind="badge">Nuxt</UBadge>  
        men en bred vifte af andre teknologi stacks som <UBadge v-bind="badge">.NET C#</UBadge> , <UBadge v-bind="badge">Flutter</UBadge> , <UBadge v-bind="badge">React</UBadge> og <UBadge v-bind="badge">Vue</UBadge>.
      </h1>

      <p class="text-sm sm:text-lg text-gray-600 dark:text-gray-400">
        {{ props.hero.supportingText }}
      </p>

      <div class="mt-15 flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8 w-full sm:w-auto">
        <UButton
          variant="solid"
          color="primary"
          size="xl"
          icon="i-lucide-message-circle"
          class="flex w-full justify-center p-3"
          @click="$emit('open-contact-modal')"
          >Kontakt mig</UButton
        >

        <UButton
          variant="outline"
          color="primary"
          size="xl"
          class="flex w-full justify-center p-3"
          trailing-icon="i-lucide-arrow-right"
          to="/#experience"
          >Se mere</UButton
        >
      </div>
    </template>
    <LazySharedStarsBg />
    <UPageCard 
      title="Det får du i et samarbejde med mig" 
      :ui="{
        title: 'text-gray-600 dark:text-gray-500 font-thin text-lg italic',
        root: 'hidden sm:block bg-gray-100/60 dark:bg-gray-900/30 border border-primary-200 dark:border-gray-800 shadow-2xl dark:shadow-primary-900/20',
      }"
      >
      <ul class="mt-4 space-y-7 text-gray-600 dark:text-gray-300">
        <li v-for="point in props.hero.bulletpoint" :key="point.title">
          <UPageFeature :title="point.title" :description="point.description" :icon="point.icon" />
        </li>
      </ul>
    </UPageCard>
  </UPageHero>
</template>
