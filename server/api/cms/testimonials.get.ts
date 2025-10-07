import type { CmsTestimonialsResponse } from '~/types/cms'

export default defineEventHandler((): CmsTestimonialsResponse => {
  const now = new Date().toISOString()

  const data: CmsTestimonialsResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'cto-testimonial',
          quote: 'Matthias delivered production-ready features every sprint and kept our performance budgets honest. The Nuxt SSG approach meant marketing could launch campaigns without waiting on engineering.',
          author: {
            name: 'Jonas Schmidt',
            role: 'CTO, B2B SaaS scale-up',
            company: 'Northwind Analytics',
            avatarAlt: 'Portrait of Jonas Schmidt'
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
          quote: 'From API design to launch readiness, Matthias joins our agency teams and raises the bar. Clients notice the attention to detail and the speed of the final experience.',
          author: {
            name: 'Sofie Larsen',
            role: 'Managing Partner',
            company: 'Studio Lambda',
            avatarAlt: 'Portrait of Sofie Larsen'
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
