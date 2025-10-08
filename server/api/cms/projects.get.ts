import type { CmsProjectsResponse } from '~/types/cms'

export default defineEventHandler((): CmsProjectsResponse => {
  const now = new Date().toISOString()

  const data: CmsProjectsResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'usage-analytics-saas',
          title: 'SaaS til brugsanalyse',
          description: 'Multi-tenant analyse-dashboards med rollebaseret adgang, revisionsspor og live-filtre på kohorter.',
          role: 'Lead-udvikler og arkitekt',
          stack: ['Laravel', 'Nuxt 3', 'PostgreSQL', 'Tailwind CSS'],
          links: [
            {
              id: 'case-study-usage-analytics',
              label: 'Anmod om case',
              href: '#contact'
            }
          ],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 2,
        attributes: {
          slug: 'field-service-platform',
          title: 'Field service-platform',
          description: 'Offline-klar mobiloplevelse understøttet af et Laravel-API og en Nuxt-adminportal til planlægning og rapportering.',
          role: 'Fractional CTO og leveranceansvarlig',
          stack: ['Laravel', 'Nuxt', 'Capacitor', 'Azure AD'],
          links: [],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 3,
        attributes: {
          slug: 'enterprise-ssg-marketing',
          title: 'Enterprise marketing-microsites',
          description: 'Dusinvis af lokaliserede landing pages genereret statisk med Nuxt og integreret med HubSpot-formularer og analytics.',
          role: 'Senior frontend-ingeniør',
          stack: ['Nuxt SSG', 'HubSpot', 'Netlify'],
          links: [
            {
              id: 'pagespeed-proof',
              label: 'Se PageSpeed-resultater',
              href: 'https://pagespeed.web.dev/'
            }
          ],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      }
    ]
  }

  return data
})
