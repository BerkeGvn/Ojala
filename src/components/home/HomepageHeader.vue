<template>
  <header class="header">
    <video autoplay loop muted :src="videoSource"></video>
    <h1 class="header-h1">OJALA</h1>
    <div class="header-sub">
      <h2 class="header-sub-h2">CREATING COMFORT, UNITING STYLE: YOUR HOME, ELEVATED.</h2>
      <div class="header-sub-button">
        <BaseButton
          :route="{
            name: 'shop',
            query: {
              query: 'all'
            }
          }"
          >Explore now!</BaseButton
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoSource = ref('/video/mobile-video.mp4')

const checkViewportWidth = () => {
  if (window.innerWidth > 1100) {
    videoSource.value = '/video/desktop-video.mp4'
  } else {
    videoSource.value = '/video/mobile-video.mp4'
  }
}

onMounted(() => {
  checkViewportWidth()
  window.addEventListener('resize', checkViewportWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkViewportWidth)
})
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.header {
  position: relative;
  height: 95vh;
  color: var(--oj-text-color-0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2rem;
  user-select: none;
  &-h1 {
    text-transform: uppercase;
    font-size: var(--oj-h0-size);
    align-self: center;
  }
  &-sub {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 8rem;
    &-h2 {
      text-transform: uppercase;
      font-size: var(--oj-h8-size);
      width: 80%;
    }
    &-button {
      align-self: center;
    }
  }
  @media only screen and (min-width: 700px) {
    &-h1 {
      font-size: calc(var(--oj-h0-size) + 2rem);
    }
    &-sub {
      &-h2 {
        font-size: var(--oj-h6-size);
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    &-sub {
      &-h2 {
        width: 60%;
        text-shadow: 0 1px 2px var(--oj-text-color);
      }
    }
  }
  @media only screen and (min-width: 1500px) {
    &-h1 {
      font-size: calc(var(--oj-h0-size) * 2);
      margin-top: -4rem;
    }
    &-sub {
      &-h2 {
        width: 48%;
      }
    }
  }
  @media only screen and (min-width: 1800px) {
    &-sub {
      &-h2 {
        width: 40%;
      }
    }
  }
}
video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  aspect-ratio: 16 / 9;
}
</style>
