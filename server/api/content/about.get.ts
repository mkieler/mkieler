import type { AboutContent } from '~/types/content'

export default defineEventHandler((): AboutContent => ({
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
}))
