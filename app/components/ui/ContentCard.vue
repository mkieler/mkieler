<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: undefined,
  description: undefined
})
</script>

<template>
  <UCard :ui="{ body: 'space-y-3 p-6' }">
    <div class="space-y-2">
      <h3 v-if="title" class="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {{ title }}
      </h3>

      <p v-if="description" class="text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>

      <slot />
    </div>
  </UCard>
</template>
