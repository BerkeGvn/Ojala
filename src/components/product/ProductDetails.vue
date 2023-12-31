<template>
  <div class="product">
    <ProductImgSlider :images="product?.images"></ProductImgSlider>
    <div class="product-details">
      <div class="product-details-header">
        <p class="product-details-name">{{ product?.name }}</p>
        <p class="product-details-name">${{ product?.price.toFixed(2) }}</p>
      </div>
      <div class="product-details-main">
        Where sophistication meets comfort in perfect harmony. This sleek and contemporary chair
        boasts a minimalist design, accentuated by its gracefully curved lines and premium
        upholstery.
      </div>
      <div class="product-details-functions">
        <div class="product-details-functions-numbers">
          <button class="product-details-functions-numbers-buttons" @click="decreaseProdNum">
            -
          </button>
          <span class="product-details-functions-numbers-screen">
            {{ prodNum }}
          </span>
          <button class="product-details-functions-numbers-buttons" @click="increaseProdNum">
            +
          </button>
        </div>
        <BaseButton @click="addProductToCart" :type="'button'" :route="'/'">Add to card</BaseButton>
      </div>
      <span class="product-details-notification">{{
        (prodNum > 1 ? prodNum + ' items' : 'An item') + ' has been added to the cart'
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/types'
import ProductImgSlider from './ProductImgSlider.vue'
import BaseButton from '../ui/BaseButton.vue'
const route = useRoute()
const router = useRouter()
const productStore = useProductsStore()
const cartStore = useCartStore()

const productRoute = route.params.productName
const product = ref<Product>()
const prodNum = ref(1)

onMounted(() => {
  if (typeof productRoute === 'string') {
    product.value = productStore.findSpecificProduct(productRoute)
  }
  if (typeof product.value === 'undefined') {
    router.replace('/shop')
  }
})
function increaseProdNum() {
  prodNum.value += 1
}
function decreaseProdNum() {
  if (prodNum.value <= 1) {
    prodNum.value = 1
  } else {
    prodNum.value -= 1
  }
}

function addProductToCart() {
  if (product.value) {
    // when item is added to cart a notification shows up and disables buttons for 3 sec.
    const notification = document.querySelector('.product-details-notification')
    const buttons = document.querySelectorAll(
      '.product-details-functions button'
    ) as NodeListOf<HTMLButtonElement>
    buttons.forEach((button) => (button.disabled = true))
    notification?.classList.add('visibile')
    setTimeout(() => {
      notification?.classList.remove('visibile')
      buttons.forEach((button) => (button.disabled = false))
    }, 3000)
    for (let i = 0; i < prodNum.value; i++) {
      cartStore.addToCart(product.value)
    }
  } else {
    console.error('An error occured while adding item to cart. :(')
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/variables.scss';
.product {
  margin-top: 2rem;
  margin-bottom: 8rem;
  &-details {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    &-header {
      font-size: var(--oj-h8-size);
      font-weight: 600;
    }
    &-main {
      margin: 4rem 0;
      font-size: var(--oj-p3-size);
    }
    &-functions {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      &-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        &-buttons {
          cursor: pointer;
          border: none;
          font-size: var(--oj-h7-size);
          background-color: inherit;
          color: inherit;
        }
        &-screen {
          text-align: center;
          font-size: var(--oj-h8-size);
          font-weight: 600;
          background-color: var(--oj-background-color-0);
          width: 4rem;
          border-radius: 1rem;
        }
      }
    }
    &-notification {
      opacity: 0;
      font-size: var(--oj-p4-size);
      font-weight: 600;
      text-align: center;
      margin-top: 2rem;
      transition: all 0.5s;
    }
  }
  .visibile {
    opacity: 1;
  }
  @media only screen and (min-width: 700px) {
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: space-around;
    margin-top: 4rem;
    &-details {
      width: 40rem;
      &-functions {
        gap: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1000px) {
    &-details {
      width: 80rem;
      &-functions {
        justify-content: flex-start;
      }
      &-notification {
        text-align: start;
      }
    }
  }
  @media only screen and (min-width: 1400px) {
    justify-content: flex-start;
  }
}
</style>
