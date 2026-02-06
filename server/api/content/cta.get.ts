import type { CtaContent } from '~/types/content'

export default defineEventHandler((): CtaContent => ({
  title: 'Klar til at tage dit projekt til næste niveau?',
  description: 'Uanset om du har brug for en freelancepartner eller en senior udvikler, der kan eje et projekt fra ende til ende, leverer jeg produktionsklar software og webapplikationer, som er skalerbare og performante.'
}))
