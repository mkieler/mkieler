<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <USeparator :avatar="{ alt: 'Mattias Kieler', size: 'sm', ui: { root: 'w-10 h-10 bg-primary', fallback: '!text-inverted' } }" />

  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        &copy; {{ year }} Mattias Kieler &bull; Alle rettigheder forbeholdes.
      </p>
    </template>

    <template #right>
      <SocialIcons />
    </template>
  </UFooter>
</template>
