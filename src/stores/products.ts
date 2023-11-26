import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { AllProducts, Product } from '../types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<AllProducts>({
    chairs: [
      {
        name: 'Duva Chair',
        price: 154,
        id: 'C35342',
        images: [
          '/public/images/products/chairs/baer-chair-1-small.png',
          '/public/images/products/chairs/duva-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Dolden Chair',
        price: 132,
        id: 'C25422',
        images: [
          '/public/images/products/chairs/dolden-chair-1-small.png',
          '/public/images/products/chairs/dolden-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Tuscan Chair',
        price: 114,
        id: 'C35624',
        images: [
          '/public/images/products/chairs/tuscan-chair-1-small.png',
          '/public/images/products/chairs/tuscan-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Baer Chair',
        price: 102,
        id: 'C48565',
        images: [
          '/public/images/products/chairs/baer-chair-1-small.png',
          '/public/images/products/chairs/baer-chair-2-medium.jpg'
        ]
      },
      {
        name: 'Folka Chair',
        price: 121.58,
        id: 'C55876',
        images: [
          '/public/images/products/chairs/folka-chair-1-small.png',
          '/public/images/products/chairs/folka-chair-2-medium.jpg'
        ]
      }
    ],
    tables: [
      {
        name: 'Jeko Table',
        price: 265.58,
        id: 'T11464',
        images: [
          '/public/images/products/tables/jeko-table-1-small.png',
          '/public/images/products/tables/jeko-table-2-medium.jpg'
        ]
      },
      {
        name: 'Kosu Table',
        price: 328.58,
        id: 'T24354',
        images: [
          '/public/images/products/tables/kosu-table-1-small.png',
          '/public/images/products/tables/kosu-table-2-medium.jpg'
        ]
      },
      {
        name: 'Olak Table',
        price: 328.58,
        id: 'T37960',
        images: [
          '/public/images/products/tables/olak-table-1-small.png',
          '/public/images/products/tables/olak-table-2-medium.jpg'
        ]
      }
    ],
    sofas: [
      {
        name: 'Bora Sofa',
        price: 396.58,
        id: 'S16758',
        images: [
          '/public/images/products/sofas/bora-sofa-1-small.png',
          '/public/images/products/sofas/bora-sofa-2-medium.jpg'
        ]
      },
      {
        name: 'Forn Sofa',
        price: 426.58,
        id: 'S22576',
        images: [
          '/public/images/products/sofas/forn-sofa-1-small.png',
          '/public/images/products/sofas/forn-sofa-2-medium.jpg'
        ]
      },
      {
        name: 'Mori Sofa',
        price: 451.58,
        id: 'S36454',
        images: [
          '/public/images/products/sofas/mori-sofa-1-small.png',
          '/public/images/products/sofas/mori-sofa-2-medium.jpg'
        ]
      }
    ],
    cabinets: [
      {
        name: 'Aris Cabinet',
        price: 204.58,
        id: 'CA3231',
        images: [
          '/public/images/products/cabinets/aris-cabinet-1-small.png',
          '/public/images/products/cabinets/aris-cabinet-2-medium.jpg'
        ]
      },
      {
        name: 'Dolap Cabinet',
        price: 274.99,
        id: 'CA6456',
        images: [
          '/public/images/products/cabinets/dolap-cabinet-1-small.png',
          '/public/images/products/cabinets/dolap-cabinet-2-medium.jpg'
        ]
      },
      {
        name: 'Kora Cabinet',
        price: 196.58,
        id: 'CA3543',
        images: [
          '/public/images/products/cabinets/kora-cabinet-1-small.png',
          '/public/images/products/cabinets/kora-cabinet-2-medium.jpg'
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

  function findSpecificProduct(name: string) {
    const product = allProducts.value.find((product) => {
      return product.name.toLowerCase().replace(/ /g, '-') === name
    })
    return product
  }

  return {
    products,
    todaysProduct,
    featuredProducts,
    allProducts,
    filteredProducts,
    findSpecificProduct
  }
})
