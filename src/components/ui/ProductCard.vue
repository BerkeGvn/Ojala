<template>
  <RouterLink
    :to="{
      name: 'product',
      params: { productName: formatRouteParam(props.product.name) }
    }"
    class="product-card"
  >
    <div class="product-card-img">
      <img :src="props.product.images[0]" alt="" draggable="false" />
    </div>
    <div class="product-card-details">
      <div class="product-card-details-container">
        <p class="product-card-details-name">{{ props.product.name }}</p>
        <p class="product-card-details-price">${{ props.product.price.toFixed(2) }}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50">
        <path
          fill=" #4A4A48"
          d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
        />
        <path fill=" #4A4A48" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
        <path fill=" #4A4A48" d="M16 24h17v2H16z" />
      </svg>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PropType } from 'vue'
import type { Product } from '@/types/types'

const props = defineProps({
  product: {
    required: true,
    type: Object as PropType<Product>
  }
})

function formatRouteParam(name: string) {
  return name.toLowerCase().replace(/ /g, '-')
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.product-card {
  background-color: var(--oj-background-color-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  &-img {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      // rewrite with screen size
      width: 20rem;
      height: 20rem;
      object-fit: contain;
    }
  }
  &-details {
    display: flex;
    font-size: var(--oj-p3-size);
    font-weight: 500;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
