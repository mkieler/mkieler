/**
 * Content types for the application.
 * These types define the structure of content fetched from the API.
 */

export interface Bulletpoint {
  title: string
  description: string
  icon: string
}

export interface HeroContent {
  name: string
  eyebrow: string
  headline: string
  supportingText: string
  bulletpoint: Bulletpoint[]
}

export interface ExperienceContent {
  name: string
  headline: string
  summary: string
  narrative: string
  primaryMetric: string
  focusArea: string[]
  skill: string[]
  quote: string[]
}

export interface TestimonialAuthor {
  name: string
  jobTitle: string
  image?: string
}

export interface TestimonialContent {
  quote: string
  author: TestimonialAuthor
}

export interface AboutContent {
  name: string
  headline: string
  title: string
  paragraph: string[]
  imageSrc: string
  imageAlt: string
}

export interface ThisSiteContent {
  name: string
  headline: string
  title: string
  description: string
  pagespeedUrl: string
}

export interface CtaContent {
  name: string
  title: string
  description: string
  buttonLabel: string
  buttonUrl: string
}

export interface SeoContent {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string
}

export interface SchemaOrgPerson {
  '@type': string
  name: string
  jobTitle: string
  email: string
  url: string
}

export interface SchemaOrgLocalBusiness {
  '@type': string
  name: string
  description: string
  url: string
  areaServed: string
  priceRange: string
}

export interface SchemaOrgWebSite {
  '@type': string
  name: string
  url: string
}

export interface SchemaOrgPage {
  '@type': string
  name: string
  description: string
  url: string
}

export interface SchemaOrgContent {
  global: {
    person: SchemaOrgPerson
    localBusiness: SchemaOrgLocalBusiness
    webSite: SchemaOrgWebSite
  }
  page: SchemaOrgPage
}

export interface SchemaOrgService {
  '@type': string
  name: string
  description: string
  url: string
  provider: {
    '@type': string
    name: string
  }
  areaServed?: {
    '@type': string
    name: string
  }
  serviceType?: string
}

export interface SchemaOrgBreadcrumb {
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export interface ServiceSchemaOrgContent {
  service: SchemaOrgService
  breadcrumb: SchemaOrgBreadcrumb
}

export interface AuthorContent {
  name: string
  jobTitle: string
  image: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceProcess {
  title: string
  description: string
}

export interface ServiceContent {
  slug: string
  title: string
  headline?: string
  description: string
  longDescription: string
  icon: string
  technologies?: string[]
  features?: string[]
  benefits?: string[]
  process?: ServiceProcess[]
  faq?: ServiceFaq[]
  relatedServices?: string[]
  useCases?: string[]
  seo?: SeoContent
  schemaOrg?: ServiceSchemaOrgContent
}

export interface ServicesPageContent {
  seo: SeoContent
  schemaOrg: SchemaOrgContent
  title: string
  headline: string
  description: string
}

export interface HomepageContent {
  seo: SeoContent
  schemaOrg: SchemaOrgContent
  author: AuthorContent
  hero: HeroContent
  experience: ExperienceContent
  about: AboutContent
  thisSite: ThisSiteContent
  cta: CtaContent
}
