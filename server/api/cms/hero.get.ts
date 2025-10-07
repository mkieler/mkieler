import type { CmsHeroResponse } from '~/types/cms'

export default defineEventHandler((): CmsHeroResponse => {
  const now = new Date().toISOString()
  const config = useRuntimeConfig()
  const resumeUrl = config.public.resumeUrl || '/resume.pdf'

  const data: CmsHeroResponse = {
    data: {
      id: 1,
      attributes: {
        slug: 'homepage-hero',
        eyebrow: 'Fractional CTO & Senior Full-Stack Developer',
        headline: 'I turn product ideas into fast, resilient web experiences',
        lead: 'Laravel + Nuxt specialist helping teams launch performant SaaS and internal tools faster.',
        supportingText: 'Whether you need a freelance partner or a senior engineer who can own a project end-to-end, I deliver production-ready software that is easy to maintain and performs well under load.',
        primaryCta: {
          id: 'cta-contact',
          label: 'Get in touch',
          href: '#contact'
        },
        secondaryCta: {
          id: 'cta-resume',
          label: 'View resume / CV',
          href: resumeUrl,
          target: '_blank'
        },
        badges: [
          { id: 'badge-laravel', label: 'Laravel + Nuxt' },
          { id: 'badge-ssg', label: 'Static-first delivery' }
        ],
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
