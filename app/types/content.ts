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

