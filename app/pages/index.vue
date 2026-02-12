<script setup lang="ts">
const content = useContent()
const { data: homepage } = await content.getHomepage()
const { data: testimonials } = await content.getTestimonials()
const { data: featuredServices } = await content.getFeaturedServices()

if (homepage.value) {
  useSeo({
    seo: homepage.value.seo,
    schemaOrg: homepage.value.schemaOrg
  })
}
</script>

<template>
  <main v-if="homepage">
    <FrontpageHero :hero="homepage.hero" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageExperience :experience="homepage.experience" />
    <FrontpageAbout :about="homepage.about" />
    <FrontpageStatement v-if="featuredServices" :services="featuredServices" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageTestimonials v-if="testimonials" :testimonials="testimonials" />
    <FrontpageThisSite :this-site="homepage.thisSite" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageBottomCta :cta="homepage.cta" @open-contact-modal="$emit('open-contact-modal')" />
  </main>
</template>
