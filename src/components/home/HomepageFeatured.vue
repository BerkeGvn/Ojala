<template>
  <section class="featured-products">
    <h3 class="featured-products-header">FEATURED PRODUCTS</h3>
    <div class="featured-products-list-container">
      <ul class="featured-products-list">
        <li class="featured-products-list-item" v-for="item in featuredProducts" :key="item.id">
          <ProductCard :product="item"></ProductCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { animate } from '@/composables/useAnimationHandler'
const store = useProductsStore()
const featuredProducts = store.featuredProducts

animate.moveCards('.featured-products-list-item', '.featured-products-list')
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.featured-products {
  padding: 2rem;
  overflow: hidden;
  &-header {
    font-size: var(--oj-h4-size);
  }
}

ul {
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 30rem;
}
li {
  height: 30rem;
  min-width: 30rem;
}
</style>
