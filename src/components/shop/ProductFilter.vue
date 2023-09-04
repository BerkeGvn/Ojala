<template>
  <div class="product-filter">
    <span class="product-filter-header">Filters</span>

    <label class="product-filter-label" for="all">All</label>
    <input
      class="product-filter-input"
      type="radio"
      id="all"
      name="product"
      value="all"
      v-model="filter"
      @change="updateProducts"
    />

    <label class="product-filter-label" for="chairs">Chairs</label>
    <input
      class="product-filter-input"
      type="radio"
      id="chairs"
      name="product"
      value="chairs"
      v-model="filter"
      @change="updateProducts"
    />

    <label class="product-filter-label" for="tables">Tables</label>
    <input
      class="product-filter-input"
      type="radio"
      id="tables"
      name="product"
      value="tables"
      v-model="filter"
      @change="updateProducts"
    />

    <label class="product-filter-label" for="sofas">Sofas</label>
    <input
      class="product-filter-input"
      type="radio"
      id="sofas"
      name="product"
      value="sofas"
      v-model="filter"
      @change="updateProducts"
    />

    <label class="product-filter-label" for="cabinets">Cabinets</label>
    <input
      class="product-filter-input"
      type="radio"
      id="cabinets"
      name="product"
      value="cabinets"
      v-model="filter"
      @change="updateProducts"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['query'])

const router = useRouter()

const emit = defineEmits(['updateProduct'])
const filter = ref(props.query)

function updateProducts() {
  router.replace({ query: { query: filter.value } })
  emit('updateProduct', filter.value)
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.product-filter {
  &-header {
    font-size: var(--oj-p3-size);
    display: block;
  }
}
</style>
