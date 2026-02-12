import type {
  HomepageContent,
  ServiceContent,
  ServicesPageContent,
  TestimonialContent
} from '~/types/content'

/**
 * API response wrapper type for list endpoints.
 */
interface ApiListResponse<T> {
  data: T[]
}

/**
 * Page API response structure.
 */
interface PageResponse {
  slug: string
  name: string
  author: HomepageContent['author']
  seo: HomepageContent['seo']
  schemaOrg: HomepageContent['schemaOrg']
  components: Record<string, unknown>
}

/**
 * Composable for fetching content from the API.
 * Content is fetched at build time for SSG.
 */
export const useContent = () => {
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.apiUrl}/v1`

  return {
    // Pages
    getHomepage: () => useAsyncData('content-homepage', async () => {
      const response = await $fetch<PageResponse>(`${baseUrl}/pages/home`)
      const components = response.components

      return {
        seo: response.seo,
        schemaOrg: response.schemaOrg,
        author: response.author,
        hero: components.FrontpageHero,
        experience: components.FrontpageExperience,
        about: components.FrontpageAbout,
        thisSite: components.FrontpageThisSite,
        cta: components.FrontpageCta
      } as HomepageContent
    }),

    // Services
    getServices: () => useAsyncData('content-services', async () => {
      const response = await $fetch<ApiListResponse<ServiceContent>>(`${baseUrl}/services`)
      return response.data
    }),
    getFeaturedServices: () => useAsyncData('content-services-featured', async () => {
      const response = await $fetch<ApiListResponse<ServiceContent>>(`${baseUrl}/services/featured`)
      return response.data
    }),
    getService: (slug: string) => useAsyncData(`content-service-${slug}`, async () => {
      return await $fetch<ServiceContent>(`${baseUrl}/services/${slug}`)
    }),
    getServicesPage: () => useAsyncData('content-services-page', async () => {
      const response = await $fetch<PageResponse>(`${baseUrl}/pages/services`)
      const components = response.components
      const intro = components.ServicesPageIntro as { headline?: string; description?: string; title?: string }

      return {
        seo: response.seo,
        schemaOrg: response.schemaOrg,
        title: intro?.title || response.name,
        headline: intro?.headline,
        description: intro?.description
      } as ServicesPageContent
    }),

    // Testimonials
    getTestimonials: () => useAsyncData('content-testimonials', async () => {
      const response = await $fetch<ApiListResponse<TestimonialContent>>(`${baseUrl}/testimonials`)
      return response.data
    })
  }
}
