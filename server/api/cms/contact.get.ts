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
        headline: 'Let’s build something reliable together',
        description: 'Tell me about your product, the outcomes you need, and any deadlines. I reply within two business days with next steps and availability.',
        availability: 'Currently scheduling freelance engagements and open to senior product engineering roles.',
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
              label: 'Name',
              name: 'name',
              type: 'text',
              placeholder: 'Your name',
              required: true
            },
            {
              id: 'email',
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'you@company.com',
              required: true
            },
            {
              id: 'message',
              label: 'Project details',
              name: 'message',
              type: 'textarea',
              placeholder: 'Tell me about your goals, timelines, and stack considerations.',
              required: true
            }
          ],
          submitLabel: 'Send message'
        },
        createdAt: now,
        updatedAt: now,
        publishedAt: now
      }
    }
  }

  return data
})
