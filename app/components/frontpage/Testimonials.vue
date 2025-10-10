<script setup lang="ts">
import { computed } from 'vue'

import type { CmsTestimonialContent } from '~/types/cms'

const props = defineProps<{
  testimonials: CmsTestimonialContent[]
}>()

const hasTestimonials = computed(() => props.testimonials.length > 0)
</script>

<template>
  <UPageSection
    headline="UDTALELSER"
    title="Hvad samarbejdspartnere og kolleger siger"
    description="Jeg værdsætter altid feedback og stræber efter at levere løsninger, der overstiger forventningerne."
    :ui="{
      container: 'max-w-full',
    }"
    >
      <UMarquee
        pause-on-hover
      >
        <UCard
          v-for="testimonial in props.testimonials"
          :key="testimonial.id"
          :ui="{ body: 'space-y-4 p-6 w-100' }"
          variant="subtle"
        >
          <blockquote class="text-lg italic text-gray-700 dark:text-gray-300 line-clamp-3">
            “{{ testimonial.quote }}”
          </blockquote>

          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-100">
              {{ testimonial.author.name }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ testimonial.author.role }}<span v-if="testimonial.author.company"> · {{ testimonial.author.company }}</span>
            </p>
          </div>
        </UCard>
      </UMarquee>

      <UMarquee
        reverse
        pause-on-hover
      >
        <UCard
          v-for="testimonial in props.testimonials"
          :key="testimonial.id"
          :ui="{ body: 'space-y-4 p-6 w-100' }"
          variant="subtle"
            >
          <blockquote class="text-lg italic text-gray-700 dark:text-gray-300 line-clamp-3">
            “{{ testimonial.quote }}”
          </blockquote>

          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-100">
              {{ testimonial.author.name }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ testimonial.author.role }}<span v-if="testimonial.author.company"> · {{ testimonial.author.company }}</span>
            </p>
          </div>
        </UCard>
      </UMarquee>
  </UPageSection>
</template>
