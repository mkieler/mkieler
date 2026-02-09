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
export const useContent = () => ({
  // Homepage
  getHomepage: () => useAsyncData('content-homepage', () => $fetch<HomepageContent>('/api/content/homepage')),

  // Services
  getServices: () => useAsyncData('content-services', () => $fetch<ServiceContent[]>('/api/content/services')),
  getService: (slug: string) => useAsyncData(`content-service-${slug}`, () => $fetch<ServiceContent | null>(`/api/content/services/${slug}`)),
  getServicesPage: () => useAsyncData('content-services-page', () => $fetch<ServicesPageContent>('/api/content/services/page')),

  // Locations
  getLocations: () => useAsyncData('content-locations', () => $fetch<LocationContent[]>('/api/content/locations')),
  getLocation: (slug: string) => useAsyncData(`content-location-${slug}`, () => $fetch<LocationContent | null>(`/api/content/locations/${slug}`))
})
