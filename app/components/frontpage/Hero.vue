<script setup lang="ts">
import type { CmsHeroContent } from '~/types/cms'

const props = defineProps<{
  hero: CmsHeroContent
}>()

const links = ref([
  {
    label: 'Get started',
    to: '#',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '#',
    color: 'primary' as 'primary',
    variant: 'soft' as 'soft',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

const bulletpoints = [
  {
    title: 'End to end ansvar',
    description: 'Fra problemidentifikation til deployment',
    icon: 'i-lucide-rocket'
  },
  {
    title: 'Performance',
    description: 'Performance-budgetter indarbejdet i hvert build og release.',
    icon: 'i-lucide-gauge'
  },
  {
    title: 'Sikkerhed',
    description: 'Sikre fundamenter med autentifikation, audits og observability.',
    icon: 'i-lucide-shield-check'
  }
]

const badge = {
  color: 'neutral' as 'neutral',
  variant: 'outline' as 'outline',
  size: 'xl' as 'xl'
}
</script>

<template>
  <UPageHero :title="props.hero.headline" :headline="props.hero.eyebrow" orientation="horizontal" :links="links" :ui="{
    root: 'py-20 bg-gradient-to-t from-indigo-900/10 to-transparent border-b border-primary-200 dark:border-gray-800',
    title: 'sm:text-5xl mb-7',
  }">
    <template #description>
      <h1 class="text-xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
        Senior udvikler med forretningslogikken tæt ind til kroppen. 
        Speciale i <UBadge v-bind="badge">Laravel</UBadge> + <UBadge v-bind="badge">Nuxt</UBadge>  
        men en bred vifte af andre teknologi stacks som <UBadge v-bind="badge">.NET C#</UBadge> , <UBadge v-bind="badge">Flutter</UBadge> , <UBadge v-bind="badge">React</UBadge> og <UBadge v-bind="badge">Vue</UBadge>.
      </h1>

      <p class="text-lg text-gray-600 dark:text-gray-400">
        {{ props.hero.supportingText }}
      </p>
    </template>
    <LazyStarsBg />
    <UPageCard 
      title="Det får du i et samarbejde med mig" 
      :ui="{
        title: 'text-gray-600 dark:text-gray-500 font-thin text-lg italic',
        root: 'bg-gray-100/60 dark:bg-gray-900/30 border border-primary-200 dark:border-gray-800 shadow-2xl dark:shadow-primary-900/20',
      }"
      >
      <ul class="mt-4 space-y-7 text-gray-600 dark:text-gray-300">
        <li v-for="point in bulletpoints" :key="point.title">
          <UPageFeature :title="point.title" :description="point.description" :icon="point.icon" />
        </li>
      </ul>
    </UPageCard>
  </UPageHero>
</template>
