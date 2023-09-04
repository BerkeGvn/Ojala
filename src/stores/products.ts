import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { AllProducts, Product } from '../types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<AllProducts>({
    chairs: [
      {
        name: 'Duva Chair',
        price: 154.0,
        id: 'c1',
        images: [
          '/src/assets/images/products/chairs/duva-chair-1-small.png',
          '/src/assets/images/products/chairs/duva-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Dolden Chair',
        price: 132.0,
        id: 'c2',
        images: [
          '/src/assets/images/products/chairs/dolden-chair-1-small.png',
          '/src/assets/images/products/chairs/dolden-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Tuscan Chair',
        price: 114.0,
        id: 'c3',
        images: [
          '/src/assets/images/products/chairs/tuscan-chair-1-small.png',
          '/src/assets/images/products/chairs/tuscan-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Baer Chair',
        price: 102.0,
        id: 'c4',
        images: [
          '/src/assets/images/products/chairs/baer-chair-1-small.png',
          '/src/assets/images/products/chairs/baer-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Folka Chair',
        price: 121.0,
        id: 'c5',
        images: [
          '/src/assets/images/products/chairs/folka-chair-1-small.png',
          '/src/assets/images/products/chairs/folka-chair-2-medium.jpg'
        ]
      }
    ],
    tables: [
      {
        name: 'Jeko Table',
        price: 265.0,
        id: 't1',
        images: [
          '/src/assets/images/products/tables/jeko-table-1-small.png',
          '/src/assets/images/products/tables/jeko-table-2-medium.jpg'
        ]
      },
      {
        name: 'Kosu Table',
        price: 328.0,
        id: 't2',
        images: [
          '/src/assets/images/products/tables/kosu-table-1-small.png',
          '/src/assets/images/products/tables/kosu-table-2-medium.jpg'
        ]
      }
    ],
    sofas: [
      {
        name: 'Bora Sofa',
        price: 396.0,
        id: 's1',
        images: [
          '/src/assets/images/products/sofas/bora-sofa-1-small.png',
          '/src/assets/images/products/sofas/bora-sofa-2-medium.jpg'
        ]
      },
      {
        name: 'Forn Sofa',
        price: 426.0,
        id: 's2',
        images: [
          '/src/assets/images/products/sofas/forn-sofa-1-small.png',
          '/src/assets/images/products/sofas/forn-sofa-2-medium.jpg'
        ]
      },
      {
        name: 'Mori Sofa',
        price: 451.0,
        id: 's3',
        images: [
          '/src/assets/images/products/sofas/mori-sofa-1-small.png',
          '/src/assets/images/products/sofas/mori-sofa-2-medium.jpg'
        ]
      }
    ],
    cabinets: [
      {
        name: 'Aris Cabinet',
        price: 204.0,
        id: 'ca1',
        images: [
          '/src/assets/images/products/cabinets/aris-cabinet-1-small.png',
          '/src/assets/images/products/cabinets/aris-cabinet-2-medium.jpg'
        ]
      },
      {
        name: 'Dolap Cabinet',
        price: 274.0,
        id: 'ca2',
        images: [
          '/src/assets/images/products/cabinets/dolap-cabinet-1-small.png',
          '/src/assets/images/products/cabinets/dolap-cabinet-2-medium.jpg'
        ]
      },
      {
        name: 'Kora Cabinet',
        price: 196.0,
        id: 'ca3',
        images: [
          '/src/assets/images/products/cabinets/kora-cabinet-1-small.png',
          '/src/assets/images/products/cabinets/kora-cabinet-2-medium.jpg'
        ]
      }
    ]
  })

  const todaysProduct = computed(() => {
    return products.value.chairs[0]
  })

  const featuredProducts = computed(() => {
    const featuredProductsArr: Product[] = []
    featuredProductsArr.push(
      products.value.chairs[2],
      products.value.chairs[3],
      products.value.tables[1],
      products.value.cabinets[0],
      products.value.cabinets[1],
      products.value.sofas[0],
      products.value.sofas[2]
    )
    return featuredProductsArr
  })

  const allProducts = computed(() => {
    const allProductsArr: Product[] = []
    let product: keyof AllProducts
    for (product in products.value) {
      products.value[product].map((i: Product) => allProductsArr.push(i))
    }
    return allProductsArr
  })

  function filteredProducts(type: 'chairs' | 'tables' | 'sofas' | 'cabinets' | 'all') {
    if (type === 'all' || type === undefined) {
      return allProducts.value
    } else {
      return products.value[type]
    }
  }

  return { products, todaysProduct, featuredProducts, allProducts, filteredProducts }
})
