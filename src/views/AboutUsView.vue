<template>
  <section class="about">
    <h3 class="about-header">About Us</h3>
    <AboutInfo></AboutInfo>
    <AboutShowcase></AboutShowcase>
  </section>
</template>

<script setup lang="ts">
import AboutInfo from '@/components/about/AboutInfo.vue'
import AboutShowcase from '@/components/about/AboutShowcase.vue'
</script>

<style scoped lang="scss">
.about {
  margin-top: 2rem;
  padding: 2rem;
  &-header {
    text-transform: uppercase;
    font-size: var(--oj-h4-size);
  }
}
</style>
