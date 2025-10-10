import type { CmsContactResponse } from '~/types/cms'

export default defineEventHandler((): CmsContactResponse => {
  const now = new Date().toISOString()
  const config = useRuntimeConfig()
  const email = config.public.contactEmail || 'hello@mkieler.dev'
  const linkedin = config.public.linkedinUrl || 'https://www.linkedin.com/in/mattiaskieler'

  const data: CmsContactResponse = {
    data: {
      id: 1,
      attributes: {
        slug: 'contact-preferences',
        headline: 'Lad os bygge noget driftssikkert sammen',
        description: 'Fortæl mig om dit produkt, de resultater du skal opnå, og eventuelle deadlines. Jeg svarer inden for to hverdage med næste skridt og tilgængelighed.',
        availability: 'Planlægger i øjeblikket freelanceopgaver og er åben for seniorroller inden for produktudvikling.',
        channels: [
          {
            id: 'email',
            label: email,
            href: `mailto:${email}`,
            icon: 'i-lucide-mail'
          },
          {
            id: 'linkedin',
            label: 'LinkedIn',
            href: linkedin,
            icon: 'i-simple-icons-linkedin'
          }
        ],
        form: {
          fields: [
            {
              id: 'name',
              label: 'Navn',
              name: 'name',
              type: 'text',
              placeholder: 'Dit navn',
              required: true
            },
            {
              id: 'email',
              label: 'E-mail',
              name: 'email',
              type: 'email',
              placeholder: 'dig@virksomhed.com',
              required: true
            },
            {
              id: 'message',
              label: 'Projektdetaljer',
              name: 'message',
              type: 'textarea',
              placeholder: 'Fortæl om jeres mål, tidsplaner og teknologistak.',
              required: true
            }
          ],
          submitLabel: 'Send besked'
        },
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
