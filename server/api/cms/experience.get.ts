import type { CmsExperienceResponse } from '~/types/cms'

export default defineEventHandler((): CmsExperienceResponse => {
  const now = new Date().toISOString()

  const data: CmsExperienceResponse = {
    data: {
      id: 1,
      attributes: {
        slug: 'experience-overview',
        headline: 'Dybdegående fullstack udviklings-erfaring, med fokus på forretningslogik og skalerbare løsninger',
        summary: '10+ års udvikler erfaring, både frontend og backend, med komplekse integrationer og data-tunge dashboards for både startups og enterprise-organisationer.',
        narrative: 'Jeg har arbejdet med mange forskellige virksomheder, fra små startups til store enterprise-organisationer. Min styrke ligger i at forstå forretningslogikken og omsætte den til skalerbare, vedligeholdelsesvenlige løsninger, der leverer værdi hurtigt.',
        primaryMetric: '10+ år med produktionsklar software',
        focusAreas: [
          'Anvendelse af "best practice code patterns" for vedligeholdelsesvenlig kode',
          'Arkitekturer der passer virksomhedens behov',
          'Modulær tilgang for gøre kodebasen let og skalerbar',
          'Automatiserede tests og CI/CD for pålidelig levering',
          'Performance-optimering og Core Web Vitals',
          'Sikkerhed og databeskyttelse som standard',
          'Solide backends med førende frameworks som Laravel og .NET',
          'Brugervenlige UI/UX-designs med reaktive frameworks',
          'Integration med tredjeparts services og APIer'
        ],
        skills: [
          'Laravel',
          'PHP',
          '.NET',
          'C#',
          'Nuxt.js',
          'Vue.js',
          'React.js',
          'Next.js',
          'Flutter',
          'Dart',
          'JavaScript',
          'TypeScript',
          'Tailwind CSS',
          'Docker',
          'CI/CD',
          'Ploi',
          'Azure AD / SSO',
          'Symfony',
          'Doctrine ORM',
          'Og meget mere...'
        ],
        highlights: [
          'Skalede en Laravel + Nuxt SaaS til tusindvis af daglige brugere med svartider under ét sekund.',
          'Leverede en sikker partnerportal med integration til Azure AD, Salesforce og interne APIer.',
          'Migrerede en legacy PHP-monolit til modulære Laravel-tjenester med automatiserede deployments.'
        ],
        performancePitch: {
          title: 'Hvorfor Nuxt SSG holder din forretning hurtig og synlig',
          paragraphs: [
            'Hver side på dette site er forudrenderet med Nuxt statisk generering. Det betyder, at indholdet bygges på forhånd og leveres fra edge, så besøgende ser siden næsten øjeblikkeligt—uden at vente på svar fra backend.',
            'Statisk-først levering holder også infrastrukturen enkel. Der er mindre at vedligeholde, og vi hydrerer stadig frontenden, når der er brug for interaktivitet. Resultatet er sikre Core Web Vitals-scorer og en robust oplevelse under trafikspidser.'
          ],
          seoPoints: [
            'Ren HTML med forudsigelig metadata for hver route',
            'Automatisk sitemap og robots-direktiver klar til søgemaskiner',
            'Strukturerede data og Open Graph-tags, der styrker deling og synlighed',
            'Indbyggede performance-budgetter, så billeder og scripts holdes slanke'
          ],
          verificationPrompt: 'Nysgerrig? Kør sitet gennem PageSpeed Insights—statisk genererede sider fra Nuxt scorer typisk grønt uden ekstra tuning.'
        },
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
