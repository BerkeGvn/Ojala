<template>
  <div class="cart">
    <span class="cart-header">Order Summary</span>
    <div class="cart-main">
      <ul class="cart-main-list">
        <li class="cart-main-list-item" v-for="product in products" :key="product.id">
          <CartCards :product="product"></CartCards>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="cart-footer-total">
        <span class="cart-footer-total-tax">TOTAL INC. TAX</span>
        <span class="cart-footer-total-price">$534.00</span>
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

const products = computed(() => {
  return store.getAllProducts
})
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
  }
  &-main {
    // footer is fixed so with this margin last product doesn't stay behind footer,
    margin-bottom: 30%;
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
