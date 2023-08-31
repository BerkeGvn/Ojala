<template>
  <div class="menu">
    <span class="menu-header">OJALA</span>
    <ul class="menu-list">
      <li class="menu-list-el">Home</li>
      <li class="menu-list-el">Shop</li>
      <li class="menu-list-el">About us</li>
      <li class="menu-list-el">Contact</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { watch, onMounted } from 'vue'

// with status this component detects menu click event
const props = defineProps(['status'])

// to use animations outside the onMounted, i decleared tl here
let tl: any = null

onMounted(() => {
  const menu = document.querySelector('.menu')
  const links = document.querySelectorAll('.menu-list-el')
  tl = gsap.timeline({ paused: true })

  tl.to(menu, {
    duration: 1,
    opacity: 1,
    position: 'fixed',
    height: '100vh', // change this to 100vh for full-height menu
    ease: 'expo.inOut'
  })
  tl.from(
    links,
    {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut'
    },
    '-=0.5'
  )
  tl.reverse()
})

// with watch, component plays animation according menu toggle click.
watch(props, () => {
  tl.reversed(!tl.reversed())
})
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.menu {
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: 0;
  background-color: var(--oj-background-color);
  overflow: hidden;
  margin-top: -1rem;
  &-header {
    margin-top: 3rem;
    display: block;
    color: var(--oj-text-color-2);
    font-size: var(--oj-h0-size);
    text-align: center;
    font-weight: 700;
  }
  &-list {
    color: var(--oj-text-color);
    font-size: var(--oj-h4-size);
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
