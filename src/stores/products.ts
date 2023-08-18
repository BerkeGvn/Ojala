import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { AllProducts } from '../types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<AllProducts>({
    chairs: [
      {
        name: 'Duva Chair',
        price: 154.0,
        id: 'c1',
        images: [
          '/src/assets/images/products/chairs/duva-chair-1-small.png',
          '/src/assets/images/products/chairs/duva-chair-1-small.png'
        ]
      },
      {
        name: 'Dolden Chair',
        price: 132.0,
        id: 'c2',
        images: ['/src/assets/images/products/chairs/dolden-chair-1-small.png', 'sf']
      },
      {
        name: 'Tuscan Chair',
        price: 114.0,
        id: 'c2',
        images: ['/src/assets/images/products/chairs/tuscan-chair-1-small.png', 'sf']
      }
    ],
    tables: [],
    sofas: [],
    cabinets: []
  })

  const TodaysProduct = computed(() => {
    return products.value.chairs[0]
  })

  return { products, TodaysProduct }
})
