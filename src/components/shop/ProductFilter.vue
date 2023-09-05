<template>
  <div class="product-filter">
    <span class="product-filter-header">Filters</span>

    <div class="product-filter-container">
      <div class="product-filter-button">
        <input
          class="product-filter-button-input"
          type="radio"
          id="all"
          name="product"
          value="all"
          v-model="filter"
          @change="updateProducts"
        />
        <label class="product-filter-button-label" for="all">All</label>
      </div>
      <div class="product-filter-button">
        <input
          class="product-filter-button-input"
          type="radio"
          id="chairs"
          name="product"
          value="chairs"
          v-model="filter"
          @change="updateProducts"
        />
        <label class="product-filter-button-label" for="chairs">Chairs</label>
      </div>
      <div class="product-filter-button">
        <input
          class="product-filter-button-input"
          type="radio"
          id="tables"
          name="product"
          value="tables"
          v-model="filter"
          @change="updateProducts"
        />
        <label class="product-filter-button-label" for="tables">Tables</label>
      </div>
      <div class="product-filter-button">
        <input
          class="product-filter-button-input"
          type="radio"
          id="sofas"
          name="product"
          value="sofas"
          v-model="filter"
          @change="updateProducts"
        />
        <label class="product-filter-button-label" for="sofas">Sofas</label>
      </div>
      <div class="product-filter-button">
        <input
          class="product-filter-button-input"
          type="radio"
          id="cabinets"
          name="product"
          value="cabinets"
          v-model="filter"
          @change="updateProducts"
        />
        <label class="product-filter-button-label" for="cabinets">Cabinets</label>
      </div>
    </div>
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
  &-container {
    display: flex;
    font-size: var(--oj-p4-size);
    justify-content: space-between;
  }
  &-button {
    position: relative;
    &-label {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.5rem 1rem;
      border: 1px solid var(--oj-primary);
      border-radius: 1rem;
      transition: all 0.5s;
    }
    &-input {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
      &:checked + label {
        background-color: var(--oj-primary);
        color: var(--oj-text-color-0);
        font-weight: 500;
      }
    }
  }
}
</style>
