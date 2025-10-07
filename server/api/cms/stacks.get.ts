import type { CmsStacksResponse } from '~/types/cms'

export default defineEventHandler((): CmsStacksResponse => {
  const now = new Date().toISOString()

  const data: CmsStacksResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'laravel-nuxt',
          name: 'Laravel backend + Nuxt frontend',
          headline: 'My go-to stack for product teams that need speed and long-term maintainability.',
          description: 'Laravel handles the domain logic, Nuxt delivers fast, SEO-friendly user experiences, and the two deploy cleanly together.',
          bullets: [
            'Best fit for SaaS platforms, secure portals, dashboards, and integrations-heavy products.',
            'Rapid prototyping with Laravel Breeze or custom APIs, then production-ready Nuxt SSG and SSR pages.'
          ],
          tags: ['Laravel', 'Nuxt 3', 'TypeScript', 'Tailwind CSS'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 2,
        attributes: {
          slug: 'dotnet-modern-frontend',
          name: '.NET backend + modern JavaScript frontend',
          headline: 'Ideal when your organisation runs on Microsoft ecosystems and needs a modern UX.',
          description: 'I integrate Nuxt, React, or Vue frontends with existing .NET APIs, Azure AD/SSO, and enterprise data sources.',
          bullets: [
            'Works well for internal tooling, B2B portals, and hybrid cloud deployments.',
            'Keeps the .NET investment while letting the frontend evolve quickly.'
          ],
          tags: ['.NET', 'Azure', 'Nuxt', 'Modern JS'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 3,
        attributes: {
          slug: 'fullstack-typescript',
          name: 'Modern JavaScript & TypeScript stacks',
          headline: 'When teams want a lean setup with shared language across frontend and backend.',
          description: 'Nuxt can power the UI while Node, Supabase, or serverless APIs handle data. Static-first delivery keeps costs low.',
          bullets: [
            'Great for marketing sites, documentation hubs, and MVPs that need to iterate quickly.',
            'Simple hosting on edge platforms with CI that compiles and deploys in minutes.'
          ],
          tags: ['Nuxt', 'Supabase', 'Node.js', 'Serverless'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      }
    ]
  }

  return data
})
