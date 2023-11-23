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
      <div class="product-card-icon">
        <span class="product-card-icon-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 256 256">
            <path
              fill="#4a4a48"
              d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 256 256">
            <path
              fill="#4a4a48"
              d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
            />
          </svg>
        </span>
      </div>
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
    font-weight: 600;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
  }
  &-icon {
    border: 2px solid #4a4a48;
    border-radius: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    justify-content: flex-end;
    width: 3.2rem;
    height: 3.2rem;
    transition: all 2s;
    &-svg {
      position: absolute;
      display: flex;
      top: 0;
      right: 0;
      height: 100%;
    }
  }
  &:hover {
    .product-card-icon-svg {
      transition: all 0.5s;
      transform: translateX(50%);
    }
  }
  @media only screen and (min-width: 700px) {
    padding: 2rem 4rem;
  }
}
</style>
