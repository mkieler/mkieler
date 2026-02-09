import type {
  HomepageContent,
  LocationContent,
  ServiceContent,
  ServicesPageContent
} from '~/types/content'

/**
 * Composable for fetching content from the API.
 * Content is fetched at build time for SSG.
 */
export const useContent = () => {
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.apiUrl}/v1`

  return {
    // Homepage
    getHomepage: () => useAsyncData('content-homepage', () => $fetch<HomepageContent>(`${baseUrl}/homepage`)),

    // Services
    getServices: () => useAsyncData('content-services', () => $fetch<ServiceContent[]>(`${baseUrl}/services`)),
    getService: (slug: string) => useAsyncData(`content-service-${slug}`, () => $fetch<ServiceContent | null>(`${baseUrl}/services/${slug}`)),
    getServicesPage: () => useAsyncData('content-services-page', () => $fetch<ServicesPageContent>(`${baseUrl}/services/page`)),

    // Locations
    getLocations: () => useAsyncData('content-locations', () => $fetch<LocationContent[]>(`${baseUrl}/locations`)),
    getLocation: (slug: string) => useAsyncData(`content-location-${slug}`, () => $fetch<LocationContent | null>(`${baseUrl}/locations/${slug}`))
  }
}
