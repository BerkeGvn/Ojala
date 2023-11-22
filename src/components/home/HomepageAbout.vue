<template>
  <section class="home-about">
    <div class="home-about-images">
      <div class="home-about-images-img-1">
        <picture>
          <source srcset="" />
          <img
            src="../../assets/images/home-about-small-1.jpg"
            alt="a picture of a chair insside a room"
            class="test"
          />
        </picture>
      </div>
      <div class="home-about-images-img-2">
        <picture>
          <source srcset="" />
          <img
            src="../../assets/images/home-about-small-2.jpg"
            alt="a picture of chairs and table inside a kitchen"
          />
        </picture>
      </div>
    </div>
    <div class="home-about-text">
      <h3 class="home-about-text-header">CRAFTING HOME COMFORT: WHERE STYLE MEETS SERENITY.</h3>
      <p class="home-about-text-para">
        At Ojala, we blend style and comfort to curate the perfect furniture pieces for your home.
        Our mission is to create timeless designs that elevate your living spaces.
      </p>
      <div class="home-about-text-button">
        <BaseButton :route="'/about'">About Us</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animate } from '@/composables/useAnimationHandler'

animate.parallax('.home-about-images-img-1', '.home-about-images-img-1', 10, -50)
animate.parallax('.home-about-images-img-2', '.home-about-images-img-2', 80, -50)
</script>

<style scoped lang="scss">
@import '../../assets/style/variables.scss';
.home-about {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 2rem;
  gap: 8rem;
  &-images {
    position: relative;
    &-img-1 {
      width: 60vw;
    }
    &-img-2 {
      width: 40vw;
      position: absolute;
      bottom: -15%;
      right: 5%;
    }
    & img {
      width: 100%;
      height: 100%;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &-header {
      font-size: var(--oj-h8-size);
      text-transform: uppercase;
    }
    &-para {
      font-size: var(--oj-p3-size);
    }
    &-button {
      align-self: flex-end;
      margin-top: 2rem;
    }
  }

  @media only screen and (min-width: 700px) {
    margin: 10rem 0;
    flex-direction: row;
    align-items: center;
    &-images {
      &-img-1 {
        width: 35vw;
      }
      &-img-2 {
        width: 25vw;
        bottom: -10%;
        right: -20%;
      }
    }
    &-text {
      gap: 3rem;
    }
  }
  @media only screen and (min-width: 1000px) {
    margin: 10rem 0;
    gap: 6rem;
    &-images {
      width: 100%;
      &-img-1 {
        width: 40rem;
      }
      &-img-2 {
        width: 25rem;
        left: 50%;
      }
    }
  }
  @media only screen and (min-width: 1300px) {
    gap: 2rem;
    &-images {
      width: 70%;
    }
    &-text {
      padding-right: 8rem;
      &-para {
        font-size: var(--oj-p3-size);
      }
      &-button {
        margin-right: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1700px) {
    justify-content: center;
    &-images {
      width: 40%;
      &-img-1 {
        margin-left: 8rem;
        width: 40rem;
      }
      &-img-2 {
        left: 60%;
      }
    }
    &-text {
      padding-right: 8rem;
      width: 50%;
      &-para {
        font-size: var(--oj-p3-size);
      }
      &-button {
        margin-right: 2rem;
      }
    }
  }
}
</style>
