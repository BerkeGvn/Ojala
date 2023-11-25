<template>
  <div class="menu">
    <span class="menu-header">OJALA</span>
    <ul class="menu-list">
      <li class="menu-list-el">
        <Router-link to="/" @click="closeMenu"> Home</Router-link>
      </li>
      <li class="menu-list-el"><Router-link to="/shop" @click="closeMenu">Shop</Router-link></li>
      <li class="menu-list-el">
        <Router-link to="/about" @click="closeMenu">About us</Router-link>
      </li>
      <li class="menu-list-el">
        <Router-link to="/contact" @click="closeMenu">Contact</Router-link>
      </li>
    </ul>
    <div class="menu-socials">
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="#4a4a48"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
          />
        </svg>
      </a>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="#4a4a48"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
          />
        </svg>
      </a>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path
            fill="#4a4a48"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      </a>
      <a href="https://github.com/BerkeGvn" target="_blank" class="menu-socials-github">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="#4a4a48"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="menu-overlay" @click="closeMenu"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// with status this component detects menu click event
const props = defineProps(['status'])

const emit = defineEmits(['closeMenu'])

// to use animations outside the onMounted, i decleared tl here
let tl: any = null

onMounted(() => {
  const menu = document.querySelector('.menu')
  const links = document.querySelectorAll('.menu-list-el')
  const overlay = document.querySelector('.menu-overlay')
  const logos = document.querySelectorAll('.menu svg')
  tl = gsap.timeline({ paused: true })

  tl.to(
    overlay,
    {
      duration: 1,
      opacity: 1,
      height: '100vh', // change this to 100vh for full-height menu
      ease: 'expo.inOut',
      backdropFilter: 'blur(3px)'
    },
    'start'
  )
  tl.to(
    menu,
    {
      duration: 1,
      height: '80vh', // change this to 100vh for full-height menu
      ease: 'expo.inOut'
    },
    'start'
  )
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
  tl.from(
    logos,
    {
      duration: 0.5,
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

// if clicked overlay, menu closes
function closeMenu() {
  emit('closeMenu')
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.menu {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 0;
  background-color: var(--oj-background-color);
  overflow: hidden;
  margin-top: -1px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
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
    & a {
      transition: all 0.3s;
      &:hover {
        color: var(--oj-primary-1);
        font-size: 5.2rem;
      }
    }
  }

  &-overlay {
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: 0;
    background-color: rgba(27, 27, 27, 0.71);
  }
  &-socials {
    position: absolute;
    bottom: 0;
    padding: 0 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
  }
}
.router-link-active {
  color: var(--oj-primary);
}
</style>
