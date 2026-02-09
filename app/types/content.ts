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
  eyebrow: string
  headline: string
  supportingText: string
  bulletpoints: Bulletpoint[]
}

export interface StackContent {
  id: number
  slug: string
  name: string
  headline: string
  description: string
  bullets: string[]
  tags: string[]
}

export interface ExperienceContent {
  headline: string
  summary: string
  narrative: string
  primaryMetric: string
  focusAreas: string[]
  skills: string[]
  ideaToSystem: string[]
}

export interface TestimonialAuthor {
  name: string
  role: string
  company?: string
}

export interface TestimonialContent {
  id: number
  quote: string
  author: TestimonialAuthor
}

export interface AboutContent {
  headline: string
  title: string
  paragraphs: string[]
  image: {
    src: string
    alt: string
  }
}

export interface ThisSiteContent {
  headline: string
  title: string
  description: string
  pagespeedUrl: string
}

export interface CtaContent {
  title: string
  description: string
}

export interface SeoContent {
  title: string
  description: string
  ogImage: string
  person: {
    name: string
    jobTitle: string
    email: string
  }
  service: {
    name: string
    areaServed: string
    serviceType: string
  }
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface ServiceContent {
  slug: string
  title: string
  headline: string
  description: string
  longDescription: string
  features: string[]
  technologies: string[]
  benefits: string[]
  icon: string
  relatedServices?: string[]
  process?: ServiceProcess[]
  useCases?: string[]
  faq?: ServiceFaq[]
  seo?: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
}

export interface LocationContent {
  slug: string
  city: string
  suffix: string
  headline: string
  description: string
  longDescription?: string
  nearbyAreas?: string[]
  seo?: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
}

export interface ServicesPageContent {
  title: string
  headline: string
  description: string
  seo: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  cta: {
    text: string
    buttonLabel: string
  }
}

export interface HomepageContent {
  seo: SeoContent
  hero: HeroContent
  experience: ExperienceContent
  about: AboutContent
  stacks: StackContent[]
  testimonials: TestimonialContent[]
  thisSite: ThisSiteContent
  cta: CtaContent
}

