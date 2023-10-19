<template>
  <section class="about">
    <h3 class="about-header">About Us</h3>
    <AboutInfo></AboutInfo>
    <AboutShowcase></AboutShowcase>
    <SubForm class="asd"></SubForm>
    <BaseFooter></BaseFooter>
  </section>
</template>

<script setup lang="ts">
import AboutInfo from '@/components/about/AboutInfo.vue'
import AboutShowcase from '@/components/about/AboutShowcase.vue'
import SubForm from '@/components/ui/SubForm.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { inject } from 'vue'

// execute scroll to top when route changes
const scrollTop: () => void = inject('scrollTop') as () => void
onBeforeRouteLeave(() => {
  scrollTop()
})
</script>

<style scoped lang="scss">
.about {
  margin-top: 2rem;
  &-header {
    margin-left: 2rem;
    text-transform: uppercase;
    font-size: var(--oj-h4-size);
  }
}
</style>
