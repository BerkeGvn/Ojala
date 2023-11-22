<template>
  <div class="about-showcase">
    <div class="about-showcase-img about-showcase-img-1">
      <img src="../../assets/images/about/about-showcase-1.jpg" alt="" srcset="" />
    </div>
    <div class="about-showcase-img about-showcase-img-2">
      <img src="../../assets/images/about/about-showcase-2.jpg" alt="" srcset="" />
    </div>
    <div class="about-showcase-img about-showcase-img-3">
      <img src="../../assets/images/about/about-showcase-3.jpg" alt="" srcset="" />
    </div>
    <div class="about-showcase-img about-showcase-img-4">
      <img src="../../assets/images/about/about-showcase-4.jpg" alt="" srcset="" />
    </div>
    <div class="about-showcase-img about-showcase-img-5">
      <img src="../../assets/images/about/about-showcase-5.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate } from '@/composables/useAnimationHandler'
animate.parallax('.about-showcase-img-1', '.about-showcase-img-1', 30, -20)
animate.parallax('.about-showcase-img-2', '.about-showcase-img-2', 80, -80)
animate.parallax('.about-showcase-img-4', '.about-showcase-img-4', 30, -30)
animate.parallax('.about-showcase-img-5', '.about-showcase-img-5', 60, -120)
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.about-showcase {
  height: 120vh;
  position: relative;
  margin-top: 2rem;

  &-img {
    position: absolute;
    bottom: 0;
    height: 30rem;

    & img {
      width: 30%;
    }
    &-1 {
      width: 50%;
      top: 2rem;
      left: 1rem;

      & img {
        width: 90%;
      }
    }
    &-2 {
      width: 50%;
      top: 12rem;
      right: -1rem;
      & img {
        width: 90%;
      }
    }
    &-3 {
      width: 100%;
      top: 35%;
      right: -2rem;
      & img {
        width: 90%;
      }
    }
    &-4 {
      width: 50%;
      bottom: 5%;
      left: 2rem;
      & img {
        width: 80%;
      }
    }
    &-5 {
      width: 50%;
      bottom: 0;
      right: -1rem;
      & img {
        width: 90%;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    &-img {
      &-1 {
        width: 25rem;
      }
      &-2 {
        width: 30rem;
      }
      &-3 {
        width: 50rem;
        left: 50%;
        transform: translateX(-45%);
      }
      &-4 {
        width: 25rem;
      }
      &-5 {
        width: 30rem;
      }
    }
  }
  @media only screen and (min-width: 850px) {
    &-img {
      &-1 {
        bottom: 2rem;
        right: 4rem;
      }
      &-5 {
        right: 4rem;
      }
    }
  }
  // tablets
  @media (max-width: 1000px) and (min-height: 900px) {
    height: 90rem;
    &-img {
      &-1 {
        bottom: 2rem;
        right: 4rem;
      }
      &-5 {
        right: 4rem;
        bottom: 4rem;
        width: 27rem;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    height: 90rem;
    &-img {
      &-1 {
        bottom: 2rem;
        right: 4rem;
      }
      &-5 {
        right: 4rem;
        bottom: 4rem;
        width: 27rem;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    &-img {
      &-1 {
        width: 30rem;
      }
      &-2 {
        width: 34rem;
      }
      &-4 {
        height: 30rem;
      }
      &-5 {
        width: 32rem;
      }
    }
  }
  @media only screen and (min-width: 1400px) {
    margin-bottom: 8rem;
    &-img {
      &-1 {
        width: 36rem;
      }
      &-2 {
        width: 36rem;
        right: 4rem;
      }
      &-3 {
        width: 70rem;
      }
      &-4 {
        width: 29rem;
        left: 12rem;
      }
      &-5 {
        width: 35rem;
        right: 0rem;
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    height: 110rem;
    &-img {
      &-2 {
        right: 16rem;
      }
      &-4 {
        width: 32rem;
        left: 18rem;
      }
    }
  }
}
</style>
