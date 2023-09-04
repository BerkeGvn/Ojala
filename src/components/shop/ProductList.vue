<template>
  <section class="products">
    <ProductFilter :query="queryType" @update-product="updateProduct"></ProductFilter>
    <span> {{ queryType }} </span>
    <ul class="products-list">
      <li class="products-list-el" v-for="product in listedProducts" :key="product.id">
        <ProductCard :product="product"></ProductCard>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import ProductFilter from './ProductFilter.vue'

const store = useProductsStore()
const route = useRoute()

let queryType = ref()
let listedProducts = ref()

if (
  route.query.query === 'chairs' ||
  route.query.query === 'tables' ||
  route.query.query === 'sofas' ||
  route.query.query === 'cabinets'
) {
  queryType.value = route.query.query
} else {
  queryType.value = 'all'
}

listedProducts.value = store.filteredProducts(queryType.value)
/* let queryType = ref(route.query.query)
let listedProducts = ref()

if (
  queryType.value === 'chairs' ||
  queryType.value === 'tables' ||
  queryType.value === 'sofas' ||
  queryType.value === 'cabinets' ||
  queryType.value === 'all'
) {
  listedProducts.value = store.filteredProducts(queryType.value)
} else {
  listedProducts.value = store.filteredProducts('all')
}
 */
function updateProduct(type: 'chairs' | 'tables' | 'sofas' | 'cabinets' | 'all') {
  listedProducts.value = store.filteredProducts(type)
  queryType.value = type
}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 2rem;
  &-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
