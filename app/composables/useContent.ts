import type {
  AboutContent,
  CtaContent,
  ExperienceContent,
  HeroContent,
  SeoContent,
  StackContent,
  TestimonialContent,
  ThisSiteContent
} from '~/types/content'

/**
 * Composable for fetching content from the API.
 * Content is fetched at build time for SSG.
 */
export const useContent = () => ({
  getHero: () => useAsyncData('content-hero', () => $fetch<HeroContent>('/api/content/hero')),
  getStacks: () => useAsyncData('content-stacks', () => $fetch<StackContent[]>('/api/content/stacks')),
  getExperience: () => useAsyncData('content-experience', () => $fetch<ExperienceContent>('/api/content/experience')),
  getTestimonials: () => useAsyncData('content-testimonials', () => $fetch<TestimonialContent[]>('/api/content/testimonials')),
  getAbout: () => useAsyncData('content-about', () => $fetch<AboutContent>('/api/content/about')),
  getThisSite: () => useAsyncData('content-this-site', () => $fetch<ThisSiteContent>('/api/content/thisSite')),
  getCta: () => useAsyncData('content-cta', () => $fetch<CtaContent>('/api/content/cta')),
  getSeo: () => useAsyncData('content-seo', () => $fetch<SeoContent>('/api/content/seo'))
})
