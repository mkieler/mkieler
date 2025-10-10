<script setup lang="ts">
const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>(), {
  align: 'left'
})
</script>

<template>
  <div :class="['space-y-3', props.align === 'center' ? 'text-center mx-auto max-w-2xl' : '']">
    <p
      v-if="props.eyebrow"
      class="text-sm font-semibold uppercase tracking-wide text-primary-500 dark:text-primary-400"
    >
      {{ props.eyebrow }}
    </p>

    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      {{ props.title }}
    </h2>

    <p v-if="props.description" class="text-lg text-gray-600 dark:text-gray-400">
      {{ props.description }}
    </p>
  </div>
</template>
