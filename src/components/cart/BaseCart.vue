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
      <ul class="cart-main-list">
        <li
          class="cart-main-list-item"
          v-for="(product, index) in products"
          :key="product.id + index"
        >
          <CartCards :product="product" @routeToLink="closeCart"></CartCards>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-total">
        <span class="cart-footer-total-tax">TOTAL INC. TAX</span>
        <span class="cart-footer-total-price"> ${{ store.totalPrice }} </span>
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
  height: 100vh;
  background-color: var(--oj-background-color);
  padding: 2rem;
  overflow-x: scroll;
  &-header {
    font-size: var(--oj-h8-size);
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 96%;
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
    // footer is fixed so with this margin last product doesn't stay behind footer,
    margin: 5rem 0;
    &-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  &-footer {
    background-color: inherit;
    display: flex;
    position: fixed;
    bottom: 0;
    height: 10%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
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
