<template>
  <section class="products">
    <ProductFilter :query="queryType" @update-product="updateProduct"></ProductFilter>
    <span class="products-type-header">
      {{ queryType }} <span class="products-type-header-count">{{ listedProducts.length }}</span>
    </span>
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

function updateProduct(type: 'chairs' | 'tables' | 'sofas' | 'cabinets' | 'all') {
  listedProducts.value = store.filteredProducts(type)
  queryType.value = type
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.products {
  margin-bottom: 2rem;
  &-type-header {
    display: block;
    font-size: var(--oj-h6-size);
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
    &-count {
      border-radius: 50%;
      font-size: var(--oj-p3-size);
      background-color: var(--oj-primary);
      color: var(--oj-text-color-0);
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
