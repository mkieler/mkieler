import type { SeoContent, StackContent, ExperienceContent } from '~/types/content'

interface UseSeoOptions {
  seo: SeoContent
  stacks?: StackContent[]
  experience?: ExperienceContent
}

/**
 * Composable for setting up SEO meta tags and structured data.
 */
export const useSeo = ({ seo, stacks, experience }: UseSeoOptions) => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
  const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/`
  const ogImage = `${siteUrl.replace(/\/$/, '')}${seo.ogImage}`

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogUrl: canonicalUrl,
    ogImage,
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: ogImage,
    twitterCard: 'summary_large_image'
  })

  const sameAsLinks = [
    runtimeConfig.public.linkedinUrl,
    runtimeConfig.public.githubUrl
  ].filter(Boolean)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seo.person.name,
    url: canonicalUrl,
    jobTitle: seo.person.jobTitle,
    description: seo.description,
    email: `mailto:${seo.person.email}`,
    sameAs: sameAsLinks,
    knowsAbout: stacks?.map((s) => s.name) || []
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: seo.service.name,
    url: canonicalUrl,
    areaServed: seo.service.areaServed,
    serviceType: seo.service.serviceType,
    provider: {
      '@type': 'Person',
      name: seo.person.name
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Samarbejdsmodeller',
      itemListElement: experience?.focusAreas.map((area) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: area
        }
      })) || []
    }
  }

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta: [{ name: 'robots', content: 'index,follow' }],
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(serviceSchema) }
    ]
  })
}
