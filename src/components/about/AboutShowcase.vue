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

<script setup lang="ts"></script>

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
      top: 40%;
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
}
</style>
