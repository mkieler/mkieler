import type { SeoContent } from '~/types/content'

export default defineEventHandler((): SeoContent => {
  const config = useRuntimeConfig()

  return {
    title: 'Mattias Kieler | Laravel + Nuxt-specialist til ydeevnestærke webprodukter',
    description: 'Marketingsider, SaaS-platforme og interne værktøjer, der føles øjeblikkelige takket være Nuxt statisk generering, solide Laravel-backends og pragmatisk ingeniørarbejde.',
    ogImage: '/og-image.jpg',
    person: {
      name: 'Mattias Kieler',
      jobTitle: 'Fractional CTO og senior fullstack-udvikler',
      email: config.public.contactEmail || 'hello@mkieler.dev'
    },
    service: {
      name: 'Mattias Kieler Konsulentydelser',
      areaServed: 'Fjernarbejde',
      serviceType: 'Freelance fullstack-webudvikling'
    }
  }
})
