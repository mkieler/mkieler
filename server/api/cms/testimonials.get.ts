import type { CmsTestimonialsResponse } from '~/types/cms'

export default defineEventHandler((): CmsTestimonialsResponse => {
  const now = new Date().toISOString()

  const data: CmsTestimonialsResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'cto-testimonial',
          quote: 'Mattias leverede produktionsklare features hver sprint og holdt vores performance-budgetter på plads. Nuxt SSG-tilgangen betød, at marketing kunne starte kampagner uden at vente på udviklingsteamet.',
          author: {
            name: 'Jonas Schmidt',
            role: 'CTO, B2B SaaS-scaleup',
            company: 'Northwind Analytics',
            avatarAlt: 'Portræt af Jonas Schmidt'
          },
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 2,
        attributes: {
          slug: 'agency-partner-testimonial',
          quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
          author: {
            name: 'Sofie Larsen',
            role: 'Managing Partner',
            company: 'Studio Lambda',
            avatarAlt: 'Portræt af Sofie Larsen'
          },
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 3,
        attributes: {
          slug: 'agency-partner-testimonial',
          quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
          author: {
            name: 'Sofie Larsen',
            role: 'Managing Partner',
            company: 'Studio Lambda',
            avatarAlt: 'Portræt af Sofie Larsen'
          },
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 4,
        attributes: {
          slug: 'agency-partner-testimonial',
          quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
          author: {
            name: 'Sofie Larsen',
            role: 'Managing Partner',
            company: 'Studio Lambda',
            avatarAlt: 'Portræt af Sofie Larsen'
          },
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 5,
        attributes: {
          slug: 'agency-partner-testimonial',
          quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
          author: {
            name: 'Sofie Larsen',
            role: 'Managing Partner',
            company: 'Studio Lambda',
            avatarAlt: 'Portræt af Sofie Larsen'
          },
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      }
    ]
  }

  return data
})
