<template>
  <header class="header">
    <h1 class="header-h1">OJALA</h1>
    <div class="header-sub">
      <h2 class="header-sub-h2">CREATING COMFORT, UNITING STYLE: YOUR HOME, ELEVATED.</h2>
      <div class="header-sub-button">
        <BaseButton :route="'/AboutUs'">Explore now!</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.header {
  background-image: url(../../assets/images/home-header-small.jpg);
  background-position: center;
  background-size: cover;
  height: 90vh;
  color: var(--oj-text-color-0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2rem;
  &-h1 {
    text-transform: uppercase;
    font-size: var(--oj-h0-size);
    align-self: center;
  }
  &-sub {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 8rem;
    &-h2 {
      text-transform: uppercase;
      font-size: var(--oj-h8-size);
      width: 80%;
    }
    &-button {
      align-self: center;
    }
  }
}
</style>
