import type { CmsProjectsResponse } from '~/types/cms'

export default defineEventHandler((): CmsProjectsResponse => {
  const now = new Date().toISOString()

  const data: CmsProjectsResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'usage-analytics-saas',
          title: 'Usage analytics SaaS',
          description: 'Multi-tenant analytics dashboards with role-based access, audit trails, and live cohort filters.',
          role: 'Lead developer & architect',
          stack: ['Laravel', 'Nuxt 3', 'PostgreSQL', 'Tailwind CSS'],
          links: [
            {
              id: 'case-study-usage-analytics',
              label: 'Request case study',
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
          title: 'Field service platform',
          description: 'Offline-ready mobile experience backed by a Laravel API and Nuxt-admin portal for scheduling and reporting.',
          role: 'Fractional CTO & delivery lead',
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
          title: 'Enterprise marketing microsites',
          description: 'Dozens of localized landing pages generated statically with Nuxt, integrated with HubSpot forms and analytics.',
          role: 'Senior front-end engineer',
          stack: ['Nuxt SSG', 'HubSpot', 'Netlify'],
          links: [
            {
              id: 'pagespeed-proof',
              label: 'See PageSpeed results',
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
