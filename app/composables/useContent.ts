import type {
  AboutContent,
  CtaContent,
  ExperienceContent,
  HeroContent,
  StackContent,
  TestimonialContent,
  ThisSiteContent
} from '~/types/content'

/**
 * Composable for fetching content from the API.
 * Content is fetched at build time for SSG.
 */
export const useContent = () => {
  const fetcher = <T>(key: string, endpoint: string) => {
    return useAsyncData<T>(key, () => $fetch<T>(endpoint))
  }

  return {
    getHero: () => fetcher<HeroContent>('content-hero', '/api/content/hero'),
    getStacks: () => fetcher<StackContent[]>('content-stacks', '/api/content/stacks'),
    getExperience: () => fetcher<ExperienceContent>('content-experience', '/api/content/experience'),
    getTestimonials: () => fetcher<TestimonialContent[]>('content-testimonials', '/api/content/testimonials'),
    getAbout: () => fetcher<AboutContent>('content-about', '/api/content/about'),
    getThisSite: () => fetcher<ThisSiteContent>('content-this-site', '/api/content/thisSite'),
    getCta: () => fetcher<CtaContent>('content-cta', '/api/content/cta')
  }
}
