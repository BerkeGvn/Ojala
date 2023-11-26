<template>
  <div class="about-info">
    <div class="about-info-1">
      <div class="about-info-img-container about-info-img-container-1">
        <div class="about-info-img about-info-img-1">
          <img
            src="/public/images/about/about-info-1.jpg"
            alt="picture of a cabinet that has painting and flowers top of it"
          />
        </div>
      </div>
      <div class="about-info-container about-info-container-1">
        <span class="about-info-heading about-info-heading-1"
          >Welcome to OJALA, where timeless elegance meets sustainable craftsmanship.</span
        >
        <p class="about-info-paragraph about-info-paragraph-1">
          With a deep respect for the environment, we source materials responsibly, using reclaimed
          wood and sustainable fabrics to craft each piece with care. Our commitment to ethical
          practices extends to supporting local artisans, ensuring that every creation reflects the
          essence of traditional craftsmanship with a modern twist.
        </p>
      </div>
    </div>
    <div class="about-info-2">
      <div class="about-info-img-container about-info-img-container-2">
        <div class="about-info-img about-info-img-2">
          <img src="/public/images/about/about-info-2.jpg" alt="a orange sofa" />
        </div>
      </div>
      <div class="about-info-container about-info-container-2">
        <span class="about-info-heading about-info-heading-2"
          >Enrich Your Home, Embrace Nature: OJALA.</span
        >
        <p class="about-info-paragraph about-info-paragraph-2">
          From our humble beginnings to becoming a leading name in the industry, OJALA has earned a
          reputation for delivering exquisite designs that bring the splendor of nature into your
          home. Join us in this remarkable journey of sustainable luxury, as we continue to inspire
          spaces that resonate with your heart and soul.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate } from '@/composables/useAnimationHandler'
animate.parallaxAndScale('.about-info-img-1', '.about-info-img-container-1', 40, -50)
animate.parallaxAndScale('.about-info-img-2', '.about-info-img-container-2', 20, -50)
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.about-info {
  padding: 0 2rem;
  &-img-container {
    overflow: hidden;
    margin: 0 -2rem;
  }
  &-img {
    & img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  &-container {
    margin-bottom: 2rem;
    &-2 {
      margin: -1rem -2rem;
      padding: 2rem;
      padding-bottom: 4rem;
      background-color: var(--oj-primary);
      color: var(--oj-text-color-0);
    }
  }
  &-heading {
    font-size: var(--oj-h9-size);
    font-weight: 700;
    display: block;
    margin-bottom: 0.5rem;
  }
  &-paragraph {
    font-size: var(--oj-p4-size);
  }

  @media only screen and (min-width: 850px) {
    &-img {
      height: 100%;
    }
    &-container {
      margin: 0;
      &-1 {
        padding: 2rem;
      }
    }
    &-img-container {
      min-width: 50vw;
    }
    &-1 {
      display: flex;
      height: 75vh;
      align-items: center;
      overflow: hidden;
      margin: 0 -2rem;
    }
    &-img-container-1 {
      margin: 0;
      margin-left: -2rem;
    }
    &-2 {
      display: flex;
      flex-direction: row-reverse;
      height: 75vh;
      background-color: var(--oj-primary);
      align-items: center;
      margin: 0 -2rem;
      overflow: hidden;
    }

    &-img-container-2 {
      margin: 0;
    }
    &-paragraph {
      width: 80%;
    }
  }
}
</style>
