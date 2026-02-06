<script setup lang="ts">
const content = useContent()

const [
  { data: hero },
  { data: stacks },
  { data: experience },
  { data: testimonials },
  { data: about },
  { data: thisSite },
  { data: cta },
  { data: seo }
] = await Promise.all([
  content.getHero(),
  content.getStacks(),
  content.getExperience(),
  content.getTestimonials(),
  content.getAbout(),
  content.getThisSite(),
  content.getCta(),
  content.getSeo()
])

if (seo.value) {
  useSeo({
    seo: seo.value,
    stacks: stacks.value || undefined,
    experience: experience.value || undefined
  })
}
</script>

<template>
  <main>
    <FrontpageHero v-if="hero" :hero="hero" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageExperience v-if="experience" :experience="experience" />
    <FrontpageAbout v-if="about" :about="about" />
    <FrontpageStatement v-if="stacks?.length" :stacks="stacks" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageTestimonials v-if="testimonials" :testimonials="testimonials" />
    <FrontpageThisSite v-if="thisSite" :this-site="thisSite" @open-contact-modal="$emit('open-contact-modal')" />
    <FrontpageBottomCta v-if="cta" :cta="cta" @open-contact-modal="$emit('open-contact-modal')" />
  </main>
</template>
