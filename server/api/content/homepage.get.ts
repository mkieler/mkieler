import type { HomepageContent } from '~/types/content'

export default defineEventHandler((): HomepageContent => {
  const config = useRuntimeConfig()

  return {
    seo: {
      title: 'Mattias Kieler | Laravel + Nuxt-specialist til ydeevnestærke webprodukter',
      description: 'Marketingsider, SaaS-platforme og interne værktøjer, der føles øjeblikkelige takket være Nuxt statisk generering, solide Laravel-backends og pragmatisk ingeniørarbejde.',
      ogImage: '/og-image.jpg',
      person: {
        name: 'Mattias Kieler',
        jobTitle: 'Fractional CTO og senior fullstack-udvikler',
        email: config.public.contactEmail || 'hello@mkieler.dev'
      },
      service: {
        name: 'Mattias Kieler Konsulentydelser',
        areaServed: 'Fjernarbejde',
        serviceType: 'Freelance fullstack-webudvikling'
      }
    },
    hero: {
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
    },
    experience: {
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
      ideaToSystem: [
        'Alt starter med en idé. Mit arbejde er at gøre den til virkelighed – på en måde, der holder.',
        'Mellem forretning og teknologi finder jeg balancen, hvor arkitektur bliver til værdi.',
        'Når alt fungerer gnidningsfrit, mærker man det ikke. Og det er præcis sådan, det skal være.'
      ]
    },
    about: {
      headline: 'MEN.. HVEM ER JEG?',
      title: 'Jeg hedder Mattias, jeg er en familiefar med passion for udvikling.',
      paragraphs: [
        'Med en dyb passion for at analysere komplekse forretningsprocesser arbejder jeg på at finde innovative måder at optimere dem gennem skræddersyede softwareløsninger. Rejsen inden for udvikling startede som en nysgerrighed og har udviklet sig til en livslang dedikation til at skabe værdi gennem teknologi.',
        'Jeg tror på, at teknologi skal gøre hverdagen lettere ved at løse selv de mindste problemer man står overfor hver dag. Når jeg ikke sidder foran computeren, bruger jeg tid sammen med mine to børn og partner, eller dyrker sport for at nulstille hvorefter der er plads til at reflektere over nye idéer.',
        'Jeg er drevet af en konstant søgen efter at forstå, hvordan ting fungerer, og hvordan de kan gøres bedre. Det, der motiverer mig mest, er at skabe løsninger, der ikke kun forbedrer arbejdet for andre, men også gør det sjovere og mere tilfredsstillende for dem at løse de opgaver, de står overfor.'
      ],
      image: {
        src: '~/assets/img/mig.png',
        alt: 'Mattias Kieler'
      }
    },
    stacks: [
      {
        id: 1,
        slug: 'laravel-nuxt',
        name: 'Web Applikation',
        headline: 'Web applikationer er ideelle til SaaS-platforme og komplekse dashboards med tunge integrationer.',
        description: '',
        bullets: [
          'Perfekt til SaaS-platforme, sikre portaler, dashboards og produkter med tunge integrationer.',
          'Hurtig prototyping med Laravel Breeze eller skræddersyede APIer og derefter produktionsklare Nuxt SSG- og SSR-sider.'
        ],
        tags: ['Laravel', '.NET', 'Nuxt 3', 'TypeScript', 'Tailwind CSS']
      },
      {
        id: 2,
        slug: 'dotnet-modern-frontend',
        name: 'Cross Platform Apps',
        headline: 'Applikationer der kan køre på tværs af platforme som Windows, Linux, macOS, iOS og Android.',
        description: 'Bygget med .NET (MAUI eller Blazor), Flutter eller React Native.',
        bullets: [
          'Ideel til applikationer der skal køre på tværs af platforme.',
          'Anbefalet til internt værktøj i større virksomheder.'
        ],
        tags: ['.NET', 'MAUI', 'Blazor', 'Azure', 'Flutter', 'Dart', 'React Native']
      },
      {
        id: 3,
        slug: 'flutter-react-native',
        name: 'Mobil Applikationer',
        headline: 'Mobil applikationer udviklet med Flutter eller React Native for enestående ydeevne og brugeroplevelse.',
        description: 'Flutter, udviklet af Google, og React Native, udviklet af Meta, er ideelle til at bygge moderne mobilapps.',
        bullets: [
          'Perfekt til applikationer, der kræver høj ydeevne og native-lignende brugeroplevelse.',
          'Bygget én gang og deployer til både iOS og Android med minimal indsats.'
        ],
        tags: ['Flutter', 'React Native', 'Android', 'iOS']
      },
      {
        id: 4,
        slug: 'websites-ssg',
        name: 'Websites',
        headline: 'Websites udviklet med SSG-teknologier for hurtig indlæsning og bedre SEO.',
        description: 'Bygget med Next.js eller Nuxt.js for at udnytte statisk site-generering.',
        bullets: [
          'Perfekt til marketinglandingssider, blogs og dokumentation.',
          'Bygget én gang og deployer til både iOS og Android med minimal indsats.'
        ],
        tags: ['Next.js', 'Nuxt.js', 'Gatsby', 'SSG']
      }
    ],
    testimonials: [
      {
        id: 1,
        quote: 'Mattias leverede produktionsklare features hver sprint og holdt vores performance-budgetter på plads. Nuxt SSG-tilgangen betød, at marketing kunne starte kampagner uden at vente på udviklingsteamet.',
        author: { name: 'Jonas Schmidt', role: 'CTO', company: 'Northwind Analytics' }
      },
      {
        id: 2,
        quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
        author: { name: 'Sofie Larsen', role: 'Managing Partner', company: 'Studio Lambda' }
      },
      {
        id: 3,
        quote: 'Vi havde brug for en udvikler, der kunne tage ejerskab over hele stakken. Mattias leverede en skalerbar løsning, der stadig kører fejlfrit to år senere.',
        author: { name: 'Mikkel Andersen', role: 'Produktchef', company: 'Streamline Logistics' }
      },
      {
        id: 4,
        quote: 'Mattias forstår forretningen bag koden. Han stillede de rigtige spørgsmål og byggede præcis det, vi havde brug for – uden overkomplicering.',
        author: { name: 'Line Vestergaard', role: 'CEO', company: 'GreenTech Solutions' }
      },
      {
        id: 5,
        quote: 'Vores legacy-system var en flaskehals. Mattias migrerede det til Laravel på rekordtid, og nu kan vi shippe features ugentligt i stedet for kvartalsvis.',
        author: { name: 'Henrik Mølgaard', role: 'Lead Developer', company: 'FinanceFlow' }
      },
      {
        id: 6,
        quote: 'Samarbejdet med Mattias føltes som at have en in-house senior udvikler. Han var proaktiv, kommunikerede tydeligt og leverede altid til tiden.',
        author: { name: 'Camilla Kjær', role: 'Digital Director', company: 'Nordic Media Group' }
      },
      {
        id: 7,
        quote: 'Mattias hjalp os med at bygge en partnerportal med Azure AD-integration. Sikkerhed og brugeroplevelse gik hånd i hånd fra dag ét.',
        author: { name: 'Thomas Riis', role: 'IT-chef', company: 'BuildCorp Danmark' }
      },
      {
        id: 8,
        quote: 'Vi gik fra idé til MVP på seks uger. Mattias\' erfaring med Laravel og Nuxt betød, at vi kunne validere vores koncept hurtigere end forventet.',
        author: { name: 'Maria Bech', role: 'Founder', company: 'HealthTrack' }
      },
      {
        id: 9,
        quote: 'Performance var kritisk for vores e-commerce platform. Mattias optimerede vores Nuxt-setup, og vi så en 40% forbedring i Core Web Vitals.',
        author: { name: 'Peter Skov', role: 'E-commerce Manager', company: 'Nordic Retail' }
      },
      {
        id: 10,
        quote: 'Mattias er den sjældne udvikler, der både kan dykke ned i kompleks backend-logik og levere en poleret frontend. En sand fullstack-profil.',
        author: { name: 'Anne-Mette Holm', role: 'VP Engineering', company: 'TechScale' }
      }
    ],
    thisSite: {
      headline: 'Kan du lide denne side?',
      title: 'Denne side er bygget med Nuxt og Static Site Generation (SSG)',
      description: 'Det betyder, at siderne bliver genereret i ren HTML og CSS og cachet globalt for lav TTFB og stærke Core Web Vitals. Google elsker hurtige sider hvorfor det er yderst vigtigt for SEO. Undersøgelser viser, at 53% af alle besøgende forlader et site, hvis det tager mere end 3 sekunder at indlæse. Det er også godt for miljøet, da statiske sider bruger langt mindre energi end dynamiske sider. Derudover er det også mere sikkert, da der ikke er nogen server-side kode, der kan blive kompromitteret.',
      pagespeedUrl: 'https://pagespeed.web.dev/analysis/https-mkieler-com/zeen17155o?form_factor=mobile'
    },
    cta: {
      title: 'Klar til at tage dit projekt til næste niveau?',
      description: 'Uanset om du har brug for en freelancepartner eller en senior udvikler, der kan eje et projekt fra ende til ende, leverer jeg produktionsklar software og webapplikationer, som er skalerbare og performante.'
    }
  }
})
