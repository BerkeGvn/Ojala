<template>
  <BaseNavbar></BaseNavbar>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseNavbar from './components/nav/BaseNavbar.vue'
</script>

<style scoped></style>
