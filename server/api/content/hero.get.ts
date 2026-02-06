import type { HeroContent } from '~/types/content'

export default defineEventHandler((): HeroContent => ({
  eyebrow: 'Fullstack-udvikling | Web & Software | Freelance & fuldtid',
  headline: 'Fra produktidé til robust og skalerbar web eller software-løsning',
  supportingText: 'Uanset om du har brug for en freelancepartner eller en senior udvikler, der kan eje et projekt fra ende til ende, leverer jeg produktionsklar software og webapplikationer, som er skalerbare og performante.',
  bulletpoints: [
    {
      title: 'End to end ansvar',
      description: 'Fra problemidentifikation til deployment',
      icon: 'i-lucide-rocket'
    },
    {
      title: 'Performance',
      description: 'Performance-budgetter indarbejdet i hvert build og release.',
      icon: 'i-lucide-gauge'
    },
    {
      title: 'Sikkerhed',
      description: 'Sikre fundamenter med autentifikation, audits og observability.',
      icon: 'i-lucide-shield-check'
    }
  ]
}))
