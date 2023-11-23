<template>
  <div class="not-found">
    <div class="not-found-card">
      <h1 class="not-found-header">404</h1>
      <div class="not-found-details">
        <p class="not-found-details-text">Uh, sorry we cant find the page you are looking for.</p>
        <RouterLink to="/" class="not-found-details-link"
          >Click here to turn back home page!</RouterLink
        >
      </div>
    </div>
  </div>
  <BaseFooter class="not-found-footer"></BaseFooter>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
.not-found {
  background-image: url(../assets/images/about/about-info-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  user-select: none;
  height: 65vh;
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: var(--oj-p2-size);
  position: relative;
  &-card {
    text-align: center;
    background-color: #e2dfdfbe;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1rem;
    padding: 8rem 2rem;
    height: 50vh;
  }
  &-header {
    text-transform: uppercase;
    font-size: var(--oj-h0-size);
    align-self: center;
  }
  &-details {
    &-link {
      margin-top: 2rem;
      font-weight: 700;
      &:hover {
        color: var(--oj-primary);
      }
    }
  }
  &-footer {
    width: 100%;
  }
}
</style>
