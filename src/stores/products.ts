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
          '/src/assets/images/products/chairs/duva-chair-2-medium.png'
        ]
      },
      {
        name: 'Dolden Chair',
        price: 132.0,
        id: 'c2',
        images: [
          '/src/assets/images/products/chairs/dolden-chair-1-small.png',
          '/src/assets/images/products/chairs/dolden-chair-2-medium.png'
        ]
      },
      {
        name: 'Tuscan Chair',
        price: 114.0,
        id: 'c3',
        images: [
          '/src/assets/images/products/chairs/tuscan-chair-1-small.png',
          '/src/assets/images/products/chairs/tuscan-chair-2-medium.png'
        ]
      },
      {
        name: 'Baer Chair',
        price: 102.0,
        id: 'c4',
        images: [
          '/src/assets/images/products/chairs/baer-chair-1-small.png',
          '/src/assets/images/products/chairs/baer-chair-2-medium.png'
        ]
      },
      {
        name: 'Folka Chair',
        price: 121.0,
        id: 'c4',
        images: [
          '/src/assets/images/products/chairs/folka-chair-1-small.png',
          '/src/assets/images/products/chairs/folka-chair-2-medium.png'
        ]
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
