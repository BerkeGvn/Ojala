<template>
  <div class="product">
    {{ product?.name }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/types'
const route = useRoute()
const store = useProductsStore()
const router = useRouter()

const productRoute = route.params.productName
const product = ref<Product>()

onMounted(() => {
  if (typeof productRoute === 'string') {
    product.value = store.findSpecificProduct(productRoute)
  }
  if (typeof product.value === 'undefined') {
    router.replace('/shop')
  }
})
</script>

<style scoped lang="scss">
.product {
  margin-top: 2rem;
  font-size: 12rem;
}
</style>
