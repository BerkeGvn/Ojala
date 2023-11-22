<template>
  <span class="product-filter-header">Filters</span>
  <div class="product-filter">
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
    <div class="product-filter-search">
      <label for="search"></label>
      <input type="text" id="search" placeholder="Search" v-model="search" @input="searchItem" />
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
        <g transform="rotate(90 256 256)">
          <path
            fill="none"
            stroke="#4a4a48"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
          />
          <path
            fill="none"
            stroke="#4a4a48"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['updateProduct', 'searchItem'])

const props = defineProps(['query'])
const router = useRouter()
const filter = ref(props.query)
const search = ref('')

function updateProducts() {
  router.replace({ query: { query: filter.value } })
  emit('updateProduct', filter.value)
}

function searchItem() {
  emit('searchItem', search.value)
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
  &-search {
    margin: 1rem 0;
    position: relative;
    width: 80%;
    & input {
      border-radius: 1rem;
      background-color: var(--oj-background-color-1);
      height: 4rem;
      width: 100%;
      padding-left: 1rem;
      font-family: inherit;
      font-size: var(--oj-p4-size);
      color: var(--oj-text-color);
      border: 2px solid var(--oj-background-color);
      transition: 0.5s;
      outline: none;
      &::placeholder {
        color: var(--oj-text-color-1);
      }
      &:focus {
        border: 2px solid var(--oj-text-color-2);
      }
    }
    & svg {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media only screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    &-container {
      gap: 1rem;
    }
    &-search {
      margin: 0;
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 1000px) {
    &-container {
      flex: 2;
      justify-content: flex-start;
    }
    &-search {
      flex: 1;
    }
  }
}
</style>
