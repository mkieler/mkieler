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
        eyebrow="Testimonials"
        title="People I collaborate with"
        description="Partners notice the calm delivery, clear communication, and the performance mindset baked into every engagement."
      />

      <div v-if="hasTestimonials" class="grid gap-6 md:grid-cols-2">
        <UCard
          v-for="testimonial in props.testimonials"
          :key="testimonial.id"
          :ui="{ body: 'space-y-4 p-6' }"
        >
          <blockquote class="text-lg italic text-gray-700 dark:text-gray-300">
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
      </div>

      <div v-else class="rounded-2xl border border-gray-200 bg-white/60 p-6 text-center text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300">
        <p>No public testimonials yet—happy to supply references on request.</p>
      </div>
    </UContainer>
  </section>
</template>
