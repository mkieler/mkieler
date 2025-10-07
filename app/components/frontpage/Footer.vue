<script setup lang="ts">
import { computed } from 'vue'

import type { CmsContactContent } from '~/types/cms'

const props = defineProps<{
  channels: CmsContactContent['channels']
  note: string
}>()

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <section id="site-footer" class="py-12">
    <UContainer>
      <div class="flex flex-col items-start justify-between gap-6 border-t border-gray-200 pt-10 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400 md:flex-row md:items-center">
        <div>
          <p>&copy; {{ year }} Matthias Kieler. All rights reserved.</p>
          <p class="mt-2 text-gray-500 dark:text-gray-500">
            {{ props.note }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            v-for="channel in props.channels"
            :key="channel.id"
            :label="channel.label"
            :to="channel.href"
            :target="channel.href.startsWith('http') ? '_blank' : undefined"
            variant="ghost"
            color="neutral"
            size="sm"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
