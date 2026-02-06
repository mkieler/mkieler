<script setup lang="ts">
const content = useContent()
const runtimeConfig = useRuntimeConfig()

const [
  heroData,
  stacksData,
  experienceData,
  testimonialsData,
  aboutData,
  thisSiteData,
  ctaData
] = await Promise.all([
  content.getHero(),
  content.getStacks(),
  content.getExperience(),
  content.getTestimonials(),
  content.getAbout(),
  content.getThisSite(),
  content.getCta()
])

const hero = heroData.data
const stacks = stacksData.data
const experience = experienceData.data
const testimonials = testimonialsData.data
const about = aboutData.data
const thisSite = thisSiteData.data
const cta = ctaData.data

const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/`
const ogImage = `${siteUrl.replace(/\/$/, '')}/og-image.jpg`

const pageTitle = 'Mattias Kieler | Laravel + Nuxt-specialist til ydeevnestærke webprodukter'
const pageDescription = 'Marketingsider, SaaS-platforme og interne værktøjer, der føles øjeblikkelige takket være Nuxt statisk generering, solide Laravel-backends og pragmatisk ingeniørarbejde.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: canonicalUrl,
  ogImage,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})

const sameAsLinks = [runtimeConfig.public.linkedinUrl, runtimeConfig.public.githubUrl].filter(Boolean)

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mattias Kieler',
  url: canonicalUrl,
  jobTitle: hero.value?.headline || 'Fractional CTO og senior fullstack-udvikler',
  description: pageDescription,
  email: `mailto:${runtimeConfig.public.contactEmail}`,
  sameAs: sameAsLinks,
  knowsAbout: stacks.value?.map((stackItem) => stackItem.name) || []
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mattias Kieler Konsulentydelser',
  url: canonicalUrl,
  areaServed: 'Fjernarbejde',
  serviceType: 'Freelance fullstack-webudvikling',
  provider: {
    '@type': 'Person',
    name: 'Mattias Kieler'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Samarbejdsmodeller',
    itemListElement: experience.value?.focusAreas.map((area) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: area
      }
    })) || []
  }
}

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  meta: [
    { name: 'robots', content: 'index,follow' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(serviceSchema)
    }
  ]
})
</script>

<template>
  <main>
    <FrontpageHero v-if="hero" :hero="hero" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageExperience v-if="experience" :experience="experience" />
    <FrontpageAbout v-if="about" :about="about" />
    <FrontpageStatement v-if="stacks?.length" :stacks="stacks" @open-contact-modal="$emit('open-contact-modal')"/>
    <FrontpageTestimonials v-if="testimonials" :testimonials="testimonials" />
    <FrontpageThisSite v-if="thisSite" :this-site="thisSite" @open-contact-modal="$emit('open-contact-modal')"/>
    <FrontpageBottomCta v-if="cta" :cta="cta" @open-contact-modal="$emit('open-contact-modal')"/>
  </main>
</template>
