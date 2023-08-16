<template>
  <section class="today-product">
    <h3 class="today-product-header">TODAY’S PRODUCT</h3>
    <div class="today-product-container">
      <div class="today-product-container-background-img">
        <img src="../../assets/images/home-today-background.jpg" alt="" />
      </div>
      <div class="today-product-container-sale">
        <div class="today-product-container-sale-div">
          <div class="today-product-container-sale-text">
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull; SALE
            &bull; SALE &bull; SALE &bull; SALE &bull; SALE &bull;;
          </div>
        </div>
      </div>
      <div class="today-product-container-item"></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.today-product {
  margin: 4rem 2rem;
  &-header {
    font-size: var(--oj-h4-size);
  }

  &-container {
    height: 80vh;
    position: relative;
    overflow: hidden;
    &-background-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      overflow: hidden;
      height: 100%;
      width: 100%;
      & img {
        display: block;
        height: 110%;
        // to center the image in container
        margin-left: -30%;
      }
    }
    &-sale {
      &-text {
        display: inline-block;
        color: var(--oj-background-color);
        font-size: var(--oj-h2-size);
        font-weight: 600;
      }
    }
    &-item {
      height: 10rem;
      width: 10rem;
      background-color: var(--oj-background-color-1);
    }
  }
}

// SALE ANIMATION
.today-product-container-sale {
  position: relative;
  min-height: 82px;
  overflow: hidden;
  & * {
    overflow: hidden;
  }
  &-div {
    position: absolute;
    animation: move-right-to-left linear 60s infinite;
  }
  &-text {
    white-space: nowrap;
  }
}

/* use this one to move from right to left direction */
@keyframes move-right-to-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
