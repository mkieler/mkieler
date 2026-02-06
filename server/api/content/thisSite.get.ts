import type { ThisSiteContent } from '~/types/content'

export default defineEventHandler((): ThisSiteContent => ({
  headline: 'Kan du lide denne side?',
  title: 'Denne side er bygget med Nuxt og Static Site Generation (SSG)',
  description: 'Det betyder, at siderne bliver genereret i ren HTML og CSS og cachet globalt for lav TTFB og stærke Core Web Vitals. Google elsker hurtige sider hvorfor det er yderst vigtigt for SEO. Undersøgelser viser, at 53% af alle besøgende forlader et site, hvis det tager mere end 3 sekunder at indlæse. Det er også godt for miljøet, da statiske sider bruger langt mindre energi end dynamiske sider. Derudover er det også mere sikkert, da der ikke er nogen server-side kode, der kan blive kompromitteret.',
  pagespeedUrl: 'https://pagespeed.web.dev/analysis/https-mkieler-com/zeen17155o?form_factor=mobile'
}))
