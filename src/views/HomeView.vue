<template>
  <main class="home">
    <HomepageHeader></HomepageHeader>
    <HomepageAbout></HomepageAbout>
    <HomepageTodaysProduct></HomepageTodaysProduct>
    <HomepageFeatured></HomepageFeatured>
    <HomepageCategories></HomepageCategories>
    <SubForm></SubForm>
    <BaseFooter></BaseFooter>
  </main>
</template>

<script setup lang="ts">
import HomepageHeader from '@/components/home/HomepageHeader.vue'
import HomepageAbout from '@/components/home/HomepageAbout.vue'
import HomepageTodaysProduct from '@/components/home/HomepageTodaysProduct.vue'
import HomepageFeatured from '@/components/home/HomepageFeatured.vue'
import HomepageCategories from '@/components/home/HomepageCategories.vue'
import SubForm from '@/components/ui/SubForm.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { inject } from 'vue'

// execute scroll to top when route changes
const scrollTop: () => void = inject('scrollTop') as () => void
onBeforeRouteLeave(() => {
  scrollTop()
})
</script>

<style scoped></style>
