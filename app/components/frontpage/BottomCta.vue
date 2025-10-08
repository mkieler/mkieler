<script setup lang="ts">
const links = [
    {
        to: '/kontakt',
        label: 'Kontakt mig',
        color: 'primary' as 'primary',
        variant: 'solid' as 'solid',
        size: 'xl' as 'xl',

    },
    {
        to: '/om-mig',
        label: 'Om mig',
        color: 'neutral' as 'neutral',
        variant: 'outline' as 'outline',
        size: 'xl' as 'xl',
    }
]
</script>


<template>
    <UContainer class="py-20">
        <UPageCTA
            title="Klar til at tage dit projekt til næste niveau?"
            description="Uanset om du har brug for en freelancepartner eller en senior udvikler, der kan eje et projekt fra ende til ende, leverer jeg produktionsklar software og webapplikationer, som er skalerbare og performante."
            :links="links"
            :ui="{
                root: 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-slate-800 dark:to-slate-700 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-900/10 dark:shadow-slate-900/20',
            }"
        />
    </UContainer>
</template>