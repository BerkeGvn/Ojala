<template>
  <Carousel :wrap-around="true">
    <Slide v-for="image in props.images" :key="image">
      <div class="carousel__item">
        <img :src="image" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps(['images'])
console.log(props.images)
</script>

<style>
.carousel__item {
  height: 100%;
  width: 100%;
  background-color: inherit;
  color: inherit;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  height: 30rem;
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>
