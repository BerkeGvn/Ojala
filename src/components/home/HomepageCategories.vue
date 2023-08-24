<template>
  <section class="categories-section">
    <div class="categories">
      <div class="categories-container">
        <div class="categories-container-img">
          <img src="../../assets/images/home-chair-shop.png" alt="" />
        </div>
        <div class="categories-container-text categories-container-text-right">
          <h3>Chairs</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 50 50">
            <path
              fill=" #4A4A48"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path fill=" #4A4A48" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill=" #4A4A48" d="M16 24h17v2H16z" />
          </svg>
        </div>
      </div>
      <div class="categories-container">
        <div class="categories-container-img">
          <img src="../../assets/images/home-table-shop.png" alt="" />
        </div>
        <div class="categories-container-text categories-container-text-right">
          <h3>Tables</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 50 50">
            <path
              fill=" #4A4A48"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path fill=" #4A4A48" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill=" #4A4A48" d="M16 24h17v2H16z" />
          </svg>
        </div>
      </div>
      <div class="categories-container">
        <div class="categories-container-img">
          <img src="../../assets/images/home-sofa-shop.png" alt="" />
        </div>
        <div class="categories-container-text categories-container-text-left">
          <h3>Sofas</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 50 50">
            <path
              fill=" #4A4A48"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path fill=" #4A4A48" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill=" #4A4A48" d="M16 24h17v2H16z" />
          </svg>
        </div>
      </div>
      <div class="categories-container">
        <div class="categories-container-img">
          <img src="../../assets/images/home-cabinet-shop.png" alt="" />
        </div>
        <div class="categories-container-text categories-container-text-left">
          <h3>Cabinets</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 50 50">
            <path
              fill=" #4A4A48"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path fill=" #4A4A48" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill=" #4A4A48" d="M16 24h17v2H16z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../../assets/style/variables.scss';

.categories-section {
  max-width: 40rem;
  margin: 0 auto;
}
.categories {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  &-container {
    position: relative;
    width: 100%;
    height: 40rem;

    &-img {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      & img {
        width: 100%;
        height: 110%;
        object-fit: contain;
        border-radius: 5px;
      }
    }

    &-text {
      color: var(--oj-text-color);
      font-size: var(--oj-h5-size);
      text-transform: uppercase;
      position: absolute;
      top: 10%;
      display: flex;
      flex-direction: column;
      margin: 1rem;
      & svg {
        align-self: flex-end;
      }
      &-right {
        left: 45%;
      }
    }
  }
}
</style>
