import type { CmsStacksResponse } from '~/types/cms'

export default defineEventHandler((): CmsStacksResponse => {
  const now = new Date().toISOString()

  const data: CmsStacksResponse = {
    data: [
      {
        id: 1,
        attributes: {
          slug: 'laravel-nuxt',
          name: 'Web Applikation',
          headline: 'Web applikationer er ideelle til SaaS-platforme og komplekse dashboards med tunge integrationer.',
          description: '',
          bullets: [
            'Perfekt til SaaS-platforme, sikre portaler, dashboards og produkter med tunge integrationer.',
            'Hurtig prototyping med Laravel Breeze eller skræddersyede APIer og derefter produktionsklare Nuxt SSG- og SSR-sider.'
          ],
          tags: ['Laravel', '.NET', 'Nuxt 3', 'TypeScript', 'Tailwind CSS'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 2,
        attributes: {
          slug: 'dotnet-modern-frontend',
          name: 'Cross Platform Apps',
          headline: 'Applikationer der kan køre på tværs af platforme som Windows, Linux, macOS, iOS og Android.',
          description: 'Bygget med .NET (MAUI eller Blazor), Flutter eller React Native.',
          bullets: [
            'Ideel til applikationer der skal køre på tværs af platforme.',
            'Anbefalet til internt værktøj i større virksomheder.'
          ],
          tags: ['.NET', 'MAUI', 'Blazor', 'Azure', 'Flutter', 'Dart', 'React Native'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        }
      },
      {
        id: 3,
        attributes: {
          slug: 'flutter-react-native',
          name: 'Mobil Applikationer',
          headline: 'Mobil applikationer udviklet med Flutter eller React Native for enestående ydeevne og brugeroplevelse.',
          description: 'Flutter, udviklet af Google, og React Native, udviklet af Meta, er ideelle til at bygge moderne mobilapps.',
          bullets: [
            'Perfekt til applikationer, der kræver høj ydeevne og native-lignende brugeroplevelse.',
            'Bygget én gang og deployer til både iOS og Android med minimal indsats.'
          ],
          tags: ['Flutter', 'React Native', 'Android', 'iOS'],
          createdAt: now,
          updatedAt: now,
          publishedAt: now
        },
      },
      {
          id: 4,
            attributes: {
            slug: 'websites-ssg',
            name: 'Websites',
            headline: 'Websites udviklet med SSG-teknologier for hurtig indlæsning og bedre SEO.',
            description: 'Bygget med Next.js eller Nuxt.js for at udnytte statisk site-generering.',
            bullets: [
              'Perfekt til marketinglandingssider, blogs og dokumentation.',
              'Bygget én gang og deployer til både iOS og Android med minimal indsats.'
            ],
            tags: ['Next.js', 'Nuxt.js', 'Gatsby', 'SSG'],
            createdAt: now,
            updatedAt: now,
            publishedAt: now
          }
      }
    ]
  }

  return data
})
