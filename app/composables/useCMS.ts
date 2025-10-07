import type { AsyncData } from 'nuxt/app'

import type {
  CmsContactContent,
  CmsContactResponse,
  CmsExperienceContent,
  CmsExperienceResponse,
  CmsHeroContent,
  CmsHeroResponse,
  CmsProjectContent,
  CmsProjectsResponse,
  CmsStackContent,
  CmsStacksResponse,
  CmsTestimonialContent,
  CmsTestimonialsResponse
} from '~/types/cms'

const mapHero = (response: CmsHeroResponse): CmsHeroContent => ({
  id: response.data.id,
  ...response.data.attributes
})

const mapStacks = (response: CmsStacksResponse): CmsStackContent[] =>
  response.data.map((item) => ({ id: item.id, ...item.attributes }))

const mapExperience = (response: CmsExperienceResponse): CmsExperienceContent => ({
  id: response.data.id,
  ...response.data.attributes
})

const mapProjects = (response: CmsProjectsResponse): CmsProjectContent[] =>
  response.data.map((item) => ({ id: item.id, ...item.attributes }))

const mapTestimonials = (response: CmsTestimonialsResponse): CmsTestimonialContent[] =>
  response.data.map((item) => ({ id: item.id, ...item.attributes }))

const mapContact = (response: CmsContactResponse): CmsContactContent => ({
  id: response.data.id,
  ...response.data.attributes
})

const createEmptyHero = (): CmsHeroContent => ({
  id: 0,
  slug: '',
  eyebrow: '',
  headline: '',
  lead: '',
  supportingText: '',
  primaryCta: { id: '', label: '', href: '' },
  secondaryCta: { id: '', label: '', href: '' },
  badges: [],
  createdAt: '',
  updatedAt: '',
  publishedAt: ''
})

const createEmptyExperience = (): CmsExperienceContent => ({
  id: 0,
  slug: '',
  headline: '',
  summary: '',
  narrative: '',
  primaryMetric: '',
  focusAreas: [],
  skills: [],
  highlights: [],
  performancePitch: {
    title: '',
    paragraphs: [],
    seoPoints: [],
    verificationPrompt: ''
  },
  createdAt: '',
  updatedAt: '',
  publishedAt: ''
})

const createEmptyContact = (): CmsContactContent => ({
  id: 0,
  slug: '',
  headline: '',
  description: '',
  availability: '',
  channels: [],
  form: {
    fields: [],
    submitLabel: ''
  },
  createdAt: '',
  updatedAt: '',
  publishedAt: ''
})

const fetcher = <TResponse, TMapped>(
  key: string,
  endpoint: string,
  mapResponse: (response: TResponse) => TMapped,
  defaultValue: TMapped
) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.cmsBaseUrl

  return useAsyncData<TMapped, Error | null>(
    key,
    async () => {
      const response = await $fetch<TResponse>(endpoint, { baseURL })
      return mapResponse(response as TResponse)
    },
    {
      default: () => defaultValue
    }
  )
}

export const useCMS = () => ({
  getHero: () => fetcher<CmsHeroResponse, CmsHeroContent>('cms-hero', '/api/cms/hero', mapHero, createEmptyHero()),
  getStacks: () => fetcher<CmsStacksResponse, CmsStackContent[]>('cms-stacks', '/api/cms/stacks', mapStacks, []),
  getExperience: () =>
    fetcher<CmsExperienceResponse, CmsExperienceContent>(
      'cms-experience',
      '/api/cms/experience',
      mapExperience,
      createEmptyExperience()
    ),
  getProjects: () =>
    fetcher<CmsProjectsResponse, CmsProjectContent[]>(
      'cms-projects',
      '/api/cms/projects',
      mapProjects,
      []
    ),
  getTestimonials: () =>
    fetcher<CmsTestimonialsResponse, CmsTestimonialContent[]>(
      'cms-testimonials',
      '/api/cms/testimonials',
      mapTestimonials,
      []
    ),
  getContact: () =>
    fetcher<CmsContactResponse, CmsContactContent>('cms-contact', '/api/cms/contact', mapContact, createEmptyContact())
})
