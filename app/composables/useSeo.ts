import type { SeoContent, SchemaOrgContent } from '~/types/content'

interface UseSeoOptions {
  seo: SeoContent
  schemaOrg: SchemaOrgContent
}

/**
 * Composable for setting up SEO meta tags and structured data.
 */
export const useSeo = ({ seo, schemaOrg }: UseSeoOptions) => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl || 'https://mkieler.dev'
  const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/`
  const ogImage = `${siteUrl.replace(/\/$/, '')}${seo.ogImage}`

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogTitle: seo.ogTitle || seo.title,
    ogDescription: seo.ogDescription || seo.description,
    ogUrl: canonicalUrl,
    ogImage,
    twitterTitle: seo.ogTitle || seo.title,
    twitterDescription: seo.ogDescription || seo.description,
    twitterImage: ogImage,
    twitterCard: 'summary_large_image'
  })

  const sameAsLinks = [
    runtimeConfig.public.linkedinUrl,
    runtimeConfig.public.githubUrl
  ].filter(Boolean)

  // Build Person schema from API data
  const personSchema = {
    '@context': 'https://schema.org',
    ...schemaOrg.global.person,
    url: canonicalUrl,
    sameAs: sameAsLinks
  }

  // Build LocalBusiness schema from API data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    ...schemaOrg.global.localBusiness,
    url: canonicalUrl
  }

  // Build WebPage schema from API data
  const webPageSchema = {
    '@context': 'https://schema.org',
    ...schemaOrg.page,
    url: canonicalUrl
  }

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta: [{ name: 'robots', content: 'index,follow' }],
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(webPageSchema) }
    ]
  })
}
