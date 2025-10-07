<script setup lang="ts">
const cms = useCMS()
const runtimeConfig = useRuntimeConfig()

const [heroData, stacksData, experienceData, projectsData, testimonialsData, contactData] = await Promise.all([
  cms.getHero(),
  cms.getStacks(),
  cms.getExperience(),
  cms.getProjects(),
  cms.getTestimonials(),
  cms.getContact()
])

const hero = heroData.data
const stacks = stacksData.data
const experience = experienceData.data
const projects = projectsData.data
const testimonials = testimonialsData.data
const contact = contactData.data

const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/`
const ogImage = `${siteUrl.replace(/\/$/, '')}/og-image.jpg`

const pageTitle = 'Matthias Kieler | Laravel + Nuxt specialist for performant web products'
const pageDescription = 'Marketing sites, SaaS platforms, and internal tools that feel instant thanks to Nuxt static generation, strong Laravel backends, and pragmatic engineering.'

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
  name: 'Matthias Kieler',
  url: canonicalUrl,
  jobTitle: hero.value.headline || 'Fractional CTO & Senior Full-Stack Developer',
  description: pageDescription,
  email: `mailto:${runtimeConfig.public.contactEmail}`,
  sameAs: sameAsLinks,
  knowsAbout: stacks.value.map((stackItem) => stackItem.name)
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Matthias Kieler Consulting',
  url: canonicalUrl,
  areaServed: 'Remote',
  serviceType: 'Freelance full-stack web development',
  provider: {
    '@type': 'Person',
    name: 'Matthias Kieler'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engagement options',
    itemListElement: experience.value.focusAreas.map((area) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: area
      }
    }))
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

const footerNote = 'This site is statically generated with Nuxt, so pages are pre-built and cached globally for low TTFB and strong Core Web Vitals.'
const footerChannels = computed(() => contact.value?.channels ?? [])
</script>

<template>
  <main>
    <FrontpageHero v-if="hero" :hero="hero" />
    <FrontpageStatement v-if="stacks?.length" :stacks="stacks" />
    <FrontpageExperience v-if="experience" :experience="experience" />
    <FrontpageProjects v-if="projects?.length" :projects="projects" />
    <FrontpageWhyMe v-if="experience?.performancePitch" :pitch="experience.performancePitch" />
    <FrontpageTestimonials :testimonials="testimonials" />
    <FrontpageContact v-if="contact" :contact="contact" />
    <FrontpageFooter :channels="footerChannels" :note="footerNote" />
  </main>
</template>
