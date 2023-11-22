<template>
  <section class="today-product">
    <h3 class="today-product-header">TODAY’S PRODUCT</h3>
    <div class="today-product-container">
      <div class="today-product-container-background-img">
        <picture>
          <source
            srcset="../../assets/images/home-today-background.jpg"
            media="(min-width:900px)"
          />
          <img
            src="../../assets/images/home-today-background.jpg"
            alt="picture of a black chair for a background image"
          />
        </picture>
      </div>
      <div class="today-product-container-sale">
        <div class="today-product-container-sale-div">
          <div class="today-product-container-sale-text">
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull;;
          </div>
        </div>
      </div>
      <div class="today-product-container-item">
        <ProductCard :product="todaysProduct"></ProductCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { animate } from '@/composables/useAnimationHandler'

const store = useProductsStore()
const todaysProduct = store.todaysProduct

animate.backgroundImage(
  '.today-product-container-background-img',
  '.today-product-container-background-img',
  -180,
  1.2
)
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.today-product {
  margin: 4rem 2rem;
  &-header {
    font-size: var(--oj-h4-size);
  }

  &-container {
    height: 80vh;
    position: relative;
    overflow: hidden;
    //need to add width something like 70% in wide screen and margin auto
    &-background-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      overflow: hidden;
      height: 120%;
      width: 100%;
      & img {
        display: block;
        height: 110%;
        // to center the image in container
        position: absolute;
        z-index: -2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &-sale {
      &-text {
        display: inline-block;
        color: var(--oj-background-color);
        font-size: var(--oj-h2-size);
        font-weight: 600;
      }
    }
    &-item {
      width: 30rem;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }

  @media only screen and (min-width: 700px) {
    .today-product-container-item {
      margin-top: 8rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    &-header {
      text-align: center;
    }
  }
}

// SALE ANIMATION
.today-product-container-sale {
  position: relative;
  min-height: 82px;
  overflow: hidden;
  & * {
    overflow: hidden;
  }
  &-div {
    position: absolute;
    animation: move-right-to-left linear 60s infinite;
  }
  &-text {
    white-space: nowrap;
  }
}

@keyframes move-right-to-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
