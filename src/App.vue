<template>
  <BaseNavbar></BaseNavbar>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
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
</script>

<style scoped></style>
