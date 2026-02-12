<script setup lang="ts">
import type { AboutContent } from '~/types/content'

const props = defineProps<{
  about: AboutContent
}>()
</script>

<template>
    <UPageSection
        :ui="{
            headline: 'justify-start',
            description: 'text-left',
            title: 'text-left lg:text-4xl',
            root: 'bg-gray-100 dark:bg-gray-800/50 border-t border-b border-primary-200 dark:border-primary-400/30',
            container: 'lg:flex-col flex-col-reverse'
        }"
        :headline="props.about.headline"
        :title="props.about.title"
        orientation="horizontal"
        reverse
        id="about"
    >
        <template #description>
            <div class="flex flex-col gap-3">
                <p v-for="(paragraph, index) in props.about.paragraph" :key="index">
                    {{ paragraph }}
                </p>
            </div>
        </template>
        <img
            src="~/assets/img/mig.png"
            :alt="props.about.imageAlt"
            class="rounded-xl object-cover shadow-xl shadow-gray-900/50 dark:shadow-slate-900/70 lg:max-h-170 max-h-100 w-full sm:max-w-100 lg:max-w-full"
            loading="lazy"
            decoding="async"
        />
    </UPageSection>
</template>
