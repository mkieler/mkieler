<script setup lang="ts">
import { computed } from 'vue'

import type { CmsTestimonialContent } from '~/types/cms'

const props = defineProps<{
  testimonials: CmsTestimonialContent[]
}>()

const hasTestimonials = computed(() => props.testimonials.length > 0)
</script>

<template>
  <section id="testimonials" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Udtalelser"
        title="Ikke kun tag mit ord for det"
        description="Samarbejdspartnere og kolleger deler deres oplevelser om samarbejdet."
      />

      <div v-if="hasTestimonials">
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
          class="mt-10"
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
      </div>

      <div v-else class="rounded-2xl border border-gray-200 bg-white/60 p-6 text-center text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300">
        <p>Ingen offentlige udtalelser endnu—jeg deler gerne referencer på forespørgsel.</p>
      </div>
    </UContainer>
  </section>
</template>
