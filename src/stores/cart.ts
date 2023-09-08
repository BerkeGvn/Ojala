import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types/types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])

  const getAllProducts = computed(() => {
    return cart.value
  })

  const numberOfProductsInCart = computed(() => {
    return cart.value.length
  })

  function addToCart(product: Product) {
    cart.value.push(product)
    console.log(cart.value)
  }

  return { cart, numberOfProductsInCart, getAllProducts, addToCart }
})
