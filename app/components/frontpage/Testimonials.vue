<script setup lang="ts">
import { computed } from 'vue'

import type { TestimonialContent } from '~/types/content'

const props = defineProps<{
  testimonials: TestimonialContent[]
}>()

const firstHalf = computed(() => props.testimonials.slice(0, Math.ceil(props.testimonials.length / 2)))
const secondHalf = computed(() => props.testimonials.slice(Math.ceil(props.testimonials.length / 2)))
</script>

<template>
  <UPageSection
    id="testimonials"
    headline="UDTALELSER"
    title="Hvad samarbejdspartnere og kollegaer siger"
    description="Jeg værdsætter altid feedback og stræber efter at levere løsninger, der overstiger forventningerne."
    :ui="{
      container: 'max-w-full',
    }"
    >
      <UMarquee
        pause-on-hover
      >
        <UCard
          v-for="testimonial in firstHalf"
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
          v-for="testimonial in secondHalf"
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
