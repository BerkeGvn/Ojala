<template>
  <section class="featured-products">
    <h3 class="featured-products-header">TODAY’S PRODUCT</h3>
    <div class="featured-products-list-container">
      <ul class="featured-products-list">
        <li
          class="featured-products-list-item"
          v-for="(item, index) in store.products.chairs"
          :key="index"
        >
          <ProductCard :product="item"></ProductCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.featured-products {
  padding: 2rem;
  &-header {
    font-size: var(--oj-h4-size);
  }
}
</style>
