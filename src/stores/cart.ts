import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types/types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product>({ name: 'Ojala Chair', price: 99.0, id: 'c2', images: ['asd', 'sf'] })

  return { cart }
})
