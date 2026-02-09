<script setup lang="ts">
const content = useContent()
const { data: homepage } = await content.getHomepage()

if (homepage.value) {
  useSeo({
    seo: homepage.value.seo,
    stacks: homepage.value.stacks,
    experience: homepage.value.experience
  })
}
</script>

<template>
  <main v-if="homepage">
    <FrontpageHero :hero="homepage.hero" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageExperience :experience="homepage.experience" />
    <FrontpageAbout :about="homepage.about" />
    <FrontpageStatement :stacks="homepage.stacks" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageTestimonials :testimonials="homepage.testimonials" />
    <FrontpageThisSite :this-site="homepage.thisSite" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageBottomCta :cta="homepage.cta" @open-contact-modal="$emit('open-contact-modal')" />
  </main>
</template>
