<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-800">
    <UContainer class="py-3">
      <UBreadcrumb :items="items" />
    </UContainer>
  </div>
</template>
