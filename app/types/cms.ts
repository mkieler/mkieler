export interface CmsTimestamps {
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface CmsLink {
  id: string
  label: string
  href: string
  target?: '_blank' | '_self'
  rel?: string
}

export interface CmsBadge {
  id: string
  label: string
}

export interface CmsHeroAttributes extends CmsTimestamps {
  slug: string
  eyebrow?: string
  headline: string
  lead: string
  supportingText: string
  primaryCta: CmsLink
  secondaryCta: CmsLink
  badges?: CmsBadge[]
}

export interface CmsHeroResponse {
  data: {
    id: number
    attributes: CmsHeroAttributes
  }
}

export interface CmsStackAttributes extends CmsTimestamps {
  slug: string
  name: string
  headline: string
  description: string
  bullets: string[]
  tags: string[]
}

export interface CmsStacksResponse {
  data: Array<{
    id: number
    attributes: CmsStackAttributes
  }>
}

export interface CmsExperienceAttributes extends CmsTimestamps {
  slug: string
  headline: string
  summary: string
  narrative: string
  primaryMetric: string
  focusAreas: string[]
  skills: string[]
  highlights: string[]
  performancePitch: {
    title: string
    paragraphs: string[]
    seoPoints: string[]
    verificationPrompt: string
  }
}

export interface CmsExperienceResponse {
  data: {
    id: number
    attributes: CmsExperienceAttributes
  }
}

export interface CmsProjectAttributes extends CmsTimestamps {
  slug: string
  title: string
  description: string
  role: string
  stack: string[]
  links: CmsLink[]
}

export interface CmsProjectsResponse {
  data: Array<{
    id: number
    attributes: CmsProjectAttributes
  }>
}

export interface CmsTestimonialAttributes extends CmsTimestamps {
  slug: string
  quote: string
  author: {
    name: string
    role: string
    company?: string
    avatarAlt?: string
  }
}

export interface CmsTestimonialsResponse {
  data: Array<{
    id: number
    attributes: CmsTestimonialAttributes
  }>
}

export interface CmsContactAttributes extends CmsTimestamps {
  slug: string
  headline: string
  description: string
  availability: string
  channels: Array<{
    id: string
    label: string
    href: string
    icon?: string
  }>
  form: {
    fields: Array<{
      id: string
      label: string
      name: string
      type: 'text' | 'email' | 'textarea'
      placeholder?: string
      required?: boolean
    }>
    submitLabel: string
  }
}

export interface CmsContactResponse {
  data: {
    id: number
    attributes: CmsContactAttributes
  }
}

export type CmsHeroContent = CmsHeroAttributes & { id: number }
export type CmsStackContent = CmsStackAttributes & { id: number }
export type CmsExperienceContent = CmsExperienceAttributes & { id: number }
export type CmsProjectContent = CmsProjectAttributes & { id: number }
export type CmsTestimonialContent = CmsTestimonialAttributes & { id: number }
export type CmsContactContent = CmsContactAttributes & { id: number }
