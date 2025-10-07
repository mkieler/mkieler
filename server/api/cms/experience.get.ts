import type { CmsExperienceResponse } from '~/types/cms'

export default defineEventHandler((): CmsExperienceResponse => {
  const now = new Date().toISOString()

  const data: CmsExperienceResponse = {
    data: {
      id: 1,
      attributes: {
        slug: 'experience-overview',
        headline: 'Senior full-stack experience, in the trenches with product teams',
        summary: '11+ years delivering SaaS platforms, complex integrations, and data-heavy dashboards for startups and enterprises.',
        narrative: 'I partner with founders, agencies, and internal teams to architect robust backends, craft modern frontends, and automate delivery pipelines. From greenfield ideas to legacy rescue work, I focus on shipping value without compromising quality.',
        primaryMetric: '11+ years building production software',
        focusAreas: [
          'SaaS platforms and subscription products',
          'API design and third-party integrations',
          'Internal tooling and data visualisation',
          'Edge-ready static delivery with Nuxt SSG'
        ],
        skills: [
          'Laravel',
          'Livewire',
          'Sanctum',
          'Nuxt 3',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Table',
          'Docker',
          'Ploi',
          'Azure AD / SSO',
          'Symfony',
          'Doctrine ORM'
        ],
        highlights: [
          'Scaled a Laravel + Nuxt SaaS to thousands of daily active users with sub-second load times.',
          'Delivered a secure partner portal integrating Azure AD, Salesforce, and internal APIs.',
          'Migrated legacy PHP monolith to modular Laravel services with automated deployments.'
        ],
        performancePitch: {
          title: 'Why Nuxt SSG keeps your business fast and discoverable',
          paragraphs: [
            'Every page on this site is pre-rendered with Nuxt\'s static generation. That means content is built ahead of time and served from the edge, so visitors see the page almost instantly—no waiting on backend responses.',
            'Static-first delivery also keeps the infrastructure simple. There is less to maintain, and we still hydrate the frontend when interactivity is needed. The result is confident Core Web Vitals scores and a resilient experience under traffic spikes.'
          ],
          seoPoints: [
            'Clean HTML with predictable metadata for every route',
            'Automatic sitemap and robots directives ready for search engines',
            'Structured data and Open Graph tags to boost sharing and discovery',
            'Built-in performance budgets to keep images and scripts lean'
          ],
          verificationPrompt: 'Curious? Run the site through PageSpeed Insights—static pages from Nuxt typically score in the green without extra tuning.'
        },
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
