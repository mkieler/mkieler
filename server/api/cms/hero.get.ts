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
        eyebrow: 'Fullstack-udvikling | Web & Software | Freelance & fuldtid',
        headline: 'Fra produktidé til robust og skalerbar web eller software-løsning',
        lead: 'Senior udvikler med forretningslogikken tæt ind til kroppen. Speciale i Laravel + Nuxt men en bred vifte af andre teknologi stacks som .NET C# og React eller Vue.',
        supportingText: 'Uanset om du har brug for en freelancepartner eller en senior udvikler, der kan eje et projekt fra ende til ende, leverer jeg produktionsklar software og webapplikationer, som er skalerbare og performante.',
        primaryCta: {
          id: 'cta-contact',
          label: 'Kontakt mig',
          href: '#contact'
        },
        secondaryCta: {
          id: 'cta-resume',
          label: 'Se CV',
          href: resumeUrl,
          target: '_blank'
        },
        badges: [
          { id: 'badge-laravel', label: 'Laravel + Nuxt' },
          { id: 'badge-ssg', label: 'Statisk-først levering' }
        ],
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
