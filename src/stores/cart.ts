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
        '/images/products/chairs/baer-chair-1-small.png',
        '/images/products/chairs/duva-chair-2-medium.jpg'
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
