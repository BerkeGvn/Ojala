<template>
  <BaseNavbar></BaseNavbar>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, provide } from 'vue'
import { RouterView } from 'vue-router'
import BaseNavbar from './components/nav/BaseNavbar.vue'
import Lenis from '@studio-freight/lenis'

let lenis: any

onMounted(() => {
  lenis = new Lenis({
    smoothWheel: true
    /*     smoothTouch: true,
    touchMultiplier: 1 */
  })

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

// with this function when route changes,it always scrolls top of the page
function scrollTop() {
  return lenis.scrollTo(0, { immediate: true })
}
// providing this function in view components
provide('scrollTop', scrollTop)
</script>

<style scoped></style>
