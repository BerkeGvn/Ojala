<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-list-el navbar-list-el-menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <path
            fill="#4a4a48"
            d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 5.032a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2H3Z"
          />
        </svg>
      </li>
      <li class="navbar-list-el navbar-list-el-ojala">
        <RouterLink to="/" class="categories-container" @click="menuStatus ? closeMenu() : null"
          >ojala</RouterLink
        >
      </li>
      <li class="navbar-list-el navbar-list-el-cart" v-if="!menuStatus" @click="toggleCart">
        <a class="navbar-list-el-cart-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
            <path
              fill="#4a4a48"
              d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z"
            />
          </svg>
          Carts({{ store.numberOfProductsInCart }})
        </a>
      </li>
      <li class="navbar-list-el navbar-list-el-close" v-else @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
          <path
            fill="#4a4a48"
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83l1.41 1.41z"
          />
        </svg>
        <span>Close</span>
      </li>
    </ul>
    <BaseMenu :status="menuStatus" @closeMenu="closeMenu"></BaseMenu>
    <!-- Cart animation is not complicated so i used vue transition -->
    <Transition name="cart">
      <div v-if="cartStatus" class="navbar-cart-overlay">
        <BaseCart class="base-cart" @closeCart="closeCart"></BaseCart>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import BaseMenu from '../ui/BaseMenu.vue'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import BaseCart from '../cart/BaseCart.vue'

const menuStatus = ref(false)
const cartStatus = ref(false)

// to display how many products in the cart
const store = useCartStore()

function toggleMenu() {
  menuStatus.value = !menuStatus.value
}
function toggleCart() {
  cartStatus.value = !cartStatus.value
}

function closeMenu() {
  menuStatus.value = false
}
function closeCart() {
  cartStatus.value = false
}
</script>

<style lang="scss">
@import '../../assets/style/variables.scss';

.navbar {
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background-color: var(--oj-background-color);
  padding: 0.5rem 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  &-list {
    display: flex;
    margin: 0;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;

    &-el {
      &-menu {
        display: flex;
        flex: 1;
        min-width: -webkit-min-content;
      }
      &-ojala {
        font-size: var(--oj-p1-size);
        font-weight: bold;
        text-transform: uppercase;
      }
      &-cart {
        display: flex;
        flex: 1;
        min-width: -webkit-min-content;
        justify-content: flex-end;
        &-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--oj-p5-size);
          text-transform: uppercase;
        }
      }
      &-close {
        font-size: var(--oj-p5-size);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        min-width: -webkit-min-content;
        gap: 0.2rem;
        text-transform: uppercase;
      }
    }
  }

  &-cart-overlay {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.185);
    backdrop-filter: blur(3px);
  }
}

.cart-enter-active,
.cart-leave-active {
  transition: all 0.5s ease-in-out;
}
.cart-leave-active {
  transition-delay: 0.25s;
}

.cart-enter-from,
.cart-leave-to {
  opacity: 0;
}

.cart-enter-active .base-cart,
.cart-leave-active .base-cart {
  transition: all 0.3s ease;
}
.cart-enter-active .base-cart {
  transition-delay: 0.5s;
}

.cart-enter-from .base-cart,
.cart-leave-to .base-cart {
  transform: scale(0.5);
  opacity: 0;
}
</style>
