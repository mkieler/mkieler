import type { TestimonialContent } from '~/types/content'

export default defineEventHandler((): TestimonialContent[] => [
  {
    id: 1,
    quote: 'Mattias leverede produktionsklare features hver sprint og holdt vores performance-budgetter på plads. Nuxt SSG-tilgangen betød, at marketing kunne starte kampagner uden at vente på udviklingsteamet.',
    author: {
      name: 'Jonas Schmidt',
      role: 'CTO',
      company: 'Northwind Analytics'
    }
  },
  {
    id: 2,
    quote: 'Fra API-design til lancering er Mattias en del af vores bureauhold og løfter barren. Kunderne mærker både detaljegraden og hastigheden i den færdige oplevelse.',
    author: {
      name: 'Sofie Larsen',
      role: 'Managing Partner',
      company: 'Studio Lambda'
    }
  },
  {
    id: 3,
    quote: 'Vi havde brug for en udvikler, der kunne tage ejerskab over hele stakken. Mattias leverede en skalerbar løsning, der stadig kører fejlfrit to år senere.',
    author: {
      name: 'Mikkel Andersen',
      role: 'Produktchef',
      company: 'Streamline Logistics'
    }
  },
  {
    id: 4,
    quote: 'Mattias forstår forretningen bag koden. Han stillede de rigtige spørgsmål og byggede præcis det, vi havde brug for – uden overkomplicering.',
    author: {
      name: 'Line Vestergaard',
      role: 'CEO',
      company: 'GreenTech Solutions'
    }
  },
  {
    id: 5,
    quote: 'Vores legacy-system var en flaskehals. Mattias migrerede det til Laravel på rekordtid, og nu kan vi shippe features ugentligt i stedet for kvartalsvis.',
    author: {
      name: 'Henrik Mølgaard',
      role: 'Lead Developer',
      company: 'FinanceFlow'
    }
  },
  {
    id: 6,
    quote: 'Samarbejdet med Mattias føltes som at have en in-house senior udvikler. Han var proaktiv, kommunikerede tydeligt og leverede altid til tiden.',
    author: {
      name: 'Camilla Kjær',
      role: 'Digital Director',
      company: 'Nordic Media Group'
    }
  },
  {
    id: 7,
    quote: 'Mattias hjalp os med at bygge en partnerportal med Azure AD-integration. Sikkerhed og brugeroplevelse gik hånd i hånd fra dag ét.',
    author: {
      name: 'Thomas Riis',
      role: 'IT-chef',
      company: 'BuildCorp Danmark'
    }
  },
  {
    id: 8,
    quote: 'Vi gik fra idé til MVP på seks uger. Mattias\' erfaring med Laravel og Nuxt betød, at vi kunne validere vores koncept hurtigere end forventet.',
    author: {
      name: 'Maria Bech',
      role: 'Founder',
      company: 'HealthTrack'
    }
  },
  {
    id: 9,
    quote: 'Performance var kritisk for vores e-commerce platform. Mattias optimerede vores Nuxt-setup, og vi så en 40% forbedring i Core Web Vitals.',
    author: {
      name: 'Peter Skov',
      role: 'E-commerce Manager',
      company: 'Nordic Retail'
    }
  },
  {
    id: 10,
    quote: 'Mattias er den sjældne udvikler, der både kan dykke ned i kompleks backend-logik og levere en poleret frontend. En sand fullstack-profil.',
    author: {
      name: 'Anne-Mette Holm',
      role: 'VP Engineering',
      company: 'TechScale'
    }
  }
])
