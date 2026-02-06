<script setup lang="ts">
import type { ThisSiteContent } from '~/types/content'

const props = defineProps<{
  thisSite: ThisSiteContent
}>()
</script>

<template>
    <UPageSection
        :headline="props.thisSite.headline"
        :title="props.thisSite.title"
        :description="props.thisSite.description"
        :ui="{
            headline: 'justify-start',
            description: 'text-left',
            title: 'text-left lg:text-4xl',
        }"
        orientation="horizontal"
        class="py-20"
    >
        <template #links>
            <UButton
                variant="solid"
                color="primary"
                size="xl"
                class="p-4"
                @click="$emit('open-contact-modal')"
            >
                Kontakt mig for at høre mere
            </UButton>

            <UButton
                variant="outline"
                color="primary"
                size="xl"
                class="p-4"
                :href="props.thisSite.pagespeedUrl"
            >
                Se PageSpeed rapport
            </UButton>
        </template>
        <img src="~/assets/img/pagespeed-scores.png" alt="PageSpeed Scores" class="h-full object-cover rounded-xl shadow-xl border border-gray-200 dark:border-gray-700" loading="lazy" decoding="async"/>
    </UPageSection>
</template>
