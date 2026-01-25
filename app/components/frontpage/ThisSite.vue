<template>
    <UPageSection
        headline="Kan du lide denne side?"
        title="Denne side er bygget med Nuxt og Static Site Generation (SSG)"
        description="
            Det betyder, at siderne bliver genereret i ren HTML og CSS og cachet globalt for lav TTFB og stærke Core Web Vitals. 
            Google elsker hurtige sider hvorfor det er yderst vigtigt for SEO. Undersøgelser viser, at 53% af alle besøgende forlader et site, hvis det tager mere end 3 sekunder at indlæse.
            Det er også godt for miljøet, da statiske sider bruger langt mindre energi end dynamiske sider.
            Derudover er det også mere sikkert, da der ikke er nogen server-side kode, der kan blive kompromitteret."
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
                href="https://pagespeed.web.dev/analysis/https-mkieler-com/zeen17155o?form_factor=mobile"
            >
                Se PageSpeed rapport
            </UButton>
        </template>
        <img src="~/assets/img/pagespeed-scores.png" alt="PageSpeed Scores" class="h-full object-cover rounded-xl shadow-xl border border-gray-200 dark:border-gray-700" loading="lazy" decoding="async"/>
    </UPageSection>
</template>