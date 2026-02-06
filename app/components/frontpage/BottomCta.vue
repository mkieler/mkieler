<script setup lang="ts">
import type { CtaContent } from '~/types/content'

const props = defineProps<{
  cta: CtaContent
}>()
</script>

<template>
    <UContainer class="py-20">
        <UPageCTA
            :title="props.cta.title"
            :description="props.cta.description"
            :ui="{
                root: 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-slate-800 dark:to-slate-700 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-900/10 dark:shadow-slate-900/20',
            }"
        >

            <template #links>
                <UButton
                    label="Kontakt mig"
                    color="primary"
                    variant="solid"
                    size="xl"
                    class="px-40 py-5"
                    @click="$emit('open-contact-modal')"
                    icon="i-lucide-message-circle"
                    :ui="{ leadingIcon: 'mr-3' }"
                />
            </template>
        </UPageCTA>
    </UContainer>
</template>
