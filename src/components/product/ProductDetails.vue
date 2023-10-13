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
  &-details {
    padding: 2rem;

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
      &-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        &-buttons {
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
  }
}
</style>
