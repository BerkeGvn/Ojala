<template>
  <div class="cart">
    <div class="cart-header">
      <span class="cart-header-text">Order Summary</span>
      <button class="cart-header-cancel" @click="closeCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
          <path
            fill="#4a4a48"
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83l1.41 1.41z"
          />
        </svg>
      </button>
    </div>

    <div class="cart-main">
      <li class="cart-main-list">
        <CartCards
          class="cart-main-list-item"
          v-for="(product, index) in products"
          :key="product.id + index"
          :product="product"
          @routeToLink="closeCart"
        >
        </CartCards>
      </li>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-total">
        <span class="cart-footer-total-tax">TOTAL INC. TAX</span>
        <span class="cart-footer-total-price"> ${{ store.totalPrice.toFixed(2) }} </span>
      </div>
      <div class="cart-footer-button">
        <button>PROCEED TO CHECK OUT</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import CartCards from './CartCards.vue'
const store = useCartStore()
const emit = defineEmits(['closeCart'])
const products = computed(() => {
  return store.getAllProducts
})

function closeCart() {
  emit('closeCart')
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.cart {
  position: fixed;
  top: 0;
  z-index: 123;
  width: 100vw;
  height: 95vh;
  background-color: var(--oj-background-color);
  overflow-x: scroll;
  transition: 0.5s;
  &-header {
    font-size: var(--oj-h8-size);
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: sticky;
    padding-left: 1rem;
    top: 0;
    z-index: 42;
    width: 100%;
    height: 6rem;
    background-color: inherit;
    &-text {
      display: block;
      flex: 1;
    }
    &-cancel {
      background-color: inherit;
      border: none;
      margin-right: 2rem;
    }
  }
  &-main {
    padding: 0 1rem;
    transition: 0.5s;
    &-list {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  &-footer {
    background-color: inherit;
    display: flex;
    position: sticky;
    z-index: 10;
    bottom: 0;
    height: 12%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    &-total {
      text-align: center;
      & span {
        display: block;
      }
      &-tax {
        font-size: var(--oj-p4-size);
        font-weight: 500;
      }
      &-price {
        font-size: var(--oj-p0-size);
        font-weight: 600;
      }
    }
    &-button {
      & button {
        border: none;
        font-size: var(--oj-p4-size);
        color: var(--oj-text-color-0);
        background-color: var(--oj-primary);
        border-radius: 1rem;
        padding: 2rem 2rem;
      }
    }
  }
}
</style>
