<template>
    <UPageSection
        :ui="{ 
            headline: 'justify-start', 
            description: 'text-left', 
            title: 'text-left lg:text-4xl', 
            root: 'bg-gray-100 dark:bg-gray-800/50 border-t border-b border-primary-200 dark:border-primary-400/30',
        }"
        headline="MEN.. HVEM ER JEG?"
        title="Jeg hedder Mattias, jeg er en familiefar med passion for udvikling."
        orientation="horizontal"
        reverse
        id="about"
    >
        <template #description>
            <div class="flex flex-col gap-3">
                <p>
                    Med en dyb passion for at analysere komplekse forretningsprocesser arbejder jeg på at finde innovative måder at optimere dem gennem skræddersyede softwareløsninger. Rejsen inden for udvikling startede som en nysgerrighed og har udviklet sig til en livslang dedikation til at skabe værdi gennem teknologi.
                </p>
                <p>
                    Jeg tror på, at teknologi skal gøre hverdagen lettere ved at løse selv de mindste problemer man står overfor hver dag. Når jeg ikke sidder foran computeren, bruger jeg tid sammen med mine to børn og partner, eller dyrker sport for at nulstille hvorefter der er plads til at reflektere over nye idéer.
                </p>
                <p>
                    Jeg er drevet af en konstant søgen efter at forstå, hvordan ting fungerer, og hvordan de kan gøres bedre. Det, der motiverer mig mest, er at skabe løsninger, der ikke kun forbedrer arbejdet for andre, men også gør det sjovere og mere tilfredsstillende for dem at løse de opgaver, de står overfor.
                </p>
            </div>
        </template>
        <img src="~/assets/img/mig.png" alt="Mattias Kieler" class="rounded-xl h-full object-cover shadow-xl shadow-gray-900/50 dark:shadow-slate-900/70"/>
    </UPageSection>
</template>