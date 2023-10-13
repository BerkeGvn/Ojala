<template>
  <section class="shop">
    <ProductList></ProductList>
    <BaseFooter></BaseFooter>
  </section>
</template>

<script setup lang="ts">
import ProductList from '@/components/shop/ProductList.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { inject } from 'vue'

// execute scroll to top when route changes
const scrollTop: () => void = inject('scrollTop') as () => void
onBeforeRouteLeave(() => {
  scrollTop()
})
</script>

<style scoped>
.shop {
  margin-top: 4rem;
  padding: 0 2rem;
}
</style>
