import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types/types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([
    {
      name: 'Duva Chair',
      price: 154,
      id: 'C35342',
      images: [
        '/src/assets/images/products/chairs/duva-chair-1-small.png',
        '/src/assets/images/products/chairs/duva-chair-2-medium.jpg'
      ]
    },
    {
      name: 'Dolden Chair',
      price: 132,
      id: 'C25422',
      images: [
        '/src/assets/images/products/chairs/dolden-chair-1-small.png',
        '/src/assets/images/products/chairs/dolden-chair-2-medium.jpg'
      ]
    },
    {
      name: 'Tuscan Chair',
      price: 114,
      id: 'C35624',
      images: [
        '/src/assets/images/products/chairs/tuscan-chair-1-small.png',
        '/src/assets/images/products/chairs/tuscan-chair-2-medium.jpg'
      ]
    },
    {
      name: 'Baer Chair',
      price: 102,
      id: 'C48565',
      images: [
        '/src/assets/images/products/chairs/baer-chair-1-small.png',
        '/src/assets/images/products/chairs/baer-chair-2-medium.jpg'
      ]
    },
    {
      name: 'Folka Chair',
      price: 121.58,
      id: 'C55876',
      images: [
        '/src/assets/images/products/chairs/folka-chair-1-small.png',
        '/src/assets/images/products/chairs/folka-chair-2-medium.jpg'
      ]
    }
  ])

  const getAllProducts = computed(() => {
    return cart.value
  })

  const numberOfProductsInCart = computed(() => {
    return cart.value.length
  })

  const totalPrice = computed(() => {
    let totalPrice = 0
    cart.value.forEach((product) => {
      totalPrice += product.price
    })
    return totalPrice
  })

  function addToCart(product: Product) {
    cart.value.push(product)
  }
  function deleteProduct(productID: string) {
    const selectedProduct = cart.value.findIndex((product) => product.id === productID)
    cart.value.splice(selectedProduct, 1)
  }
  return { cart, numberOfProductsInCart, getAllProducts, totalPrice, addToCart, deleteProduct }
})
