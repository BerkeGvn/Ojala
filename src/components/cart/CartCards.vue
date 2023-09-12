<template>
  <div class="cart-card-container">
    <RouterLink
      :to="{
        name: 'product',
        params: { productName: formatRouteParam(props.product?.name) }
      }"
      class="cart-card"
      @click="routeToLink"
    >
      <div class="cart-card-img">
        <img :src="props.product?.images[0]" alt="" />
      </div>
      <div class="cart-card-main">
        <span class="cart-card-main-name">
          {{ props.product?.name }}
        </span>
        <span class="cart-card-main-price"> ${{ props.product?.price }} </span>
      </div>
    </RouterLink>
    <button class="cart-card-delete" @click="store.deleteProduct(props.product.id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
        <path
          fill="#4a4a48"
          d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83l1.41 1.41z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import type { PropType } from 'vue'
import { useCartStore } from '@/stores/cart'

const emit = defineEmits(['routeToLink'])
const props = defineProps({
  product: {
    required: true,
    type: Object as PropType<Product>
  }
})
const store = useCartStore()

function formatRouteParam(name: string) {
  return name.toLowerCase().replace(/ /g, '-')
}

function routeToLink() {
  emit('routeToLink')
}
</script>

<style scoped lang="scss">
@import '../../assets/style/variables.scss';

.cart-card-container {
  position: relative;
}
.cart-card {
  display: flex;
  position: relative;
  background-color: var(--oj-background-color-1);
  padding: 1rem 2rem;
  border-radius: 1rem;
  &-img {
    width: 10rem;
    height: 10rem;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-name {
      font-size: var(--oj-p3-size);
      font-weight: 500;
    }
    &-price {
      font-size: var(--oj-p4-size);
      font-weight: 500;
    }
  }
  &-delete {
    border: none;
    background-color: inherit;
    position: absolute;
    right: 5%;
    top: 1rem;
    z-index: 99;
  }
}
</style>
