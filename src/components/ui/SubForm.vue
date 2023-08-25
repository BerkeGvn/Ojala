<template>
  <section class="sub-section">
    <form class="sub" @submit.prevent="submitForm">
      <p class="sub-header">$50 OFF YOUR FIRST PURCHASE</p>
      <p class="sub-text">
        Signup for the latest deals and you’ll get $50 OFF your first purchase!*
      </p>
      <div class="sub-form">
        <label for="name"></label>
        <input id="name" type="text" placeholder="Name" />
        <label for="email"></label>
        <input id="email" type="email" placeholder="Email" />
        <div class="sub-form-btn">
          <BaseButton :color="'white'" :type="'button'" :route="'/'">subscribe</BaseButton>
        </div>
      </div>
      <div class="sub-rules">
        <span class="sub-rules">*On orders over $200 (excl. delivery)</span>
        <span class="sub-rules">*Only one coupon per cart.</span>
      </div>
      <div class="sub-terms">
        <span class="sub-conditional"
          >By signing up you agree to our <a href="">Terms and Conditions</a> and
          <a href="">Privacy Policy</a>.
        </span>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
function submitForm() {
  console.log("it's just a demo :)")
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.sub-section {
  margin: 2rem;
}
.sub {
  background-color: var(--oj-primary);
  color: var(--oj-text-color-0);
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 80rem;
  & p {
    text-align: center;
  }
  &-header {
    font-size: var(--oj-h8-size);
    font-weight: 600;
    text-transform: uppercase;
  }
  &-text {
    font-size: var(--oj-p3-size);
  }

  &-form {
    & input {
      width: 100%;
      border-radius: 1rem;
      background-color: var(--oj-background-color-0);
      height: 4rem;
      padding-left: 1rem;
      font-family: inherit;
      font-size: var(--oj-p3-size);
      color: var(--oj-text-color-2);
      border: 2px solid var(--oj-background-color);
      transition: 0.5s;
      outline: none;
      &::placeholder {
        color: var(--oj-text-color-1);
      }
      // giving the last input margin
      &:last-of-type {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      &:focus {
        border: 2px solid var(--oj-text-color-2);
      }
    }
    &-btn {
      display: flex;
      justify-content: center;
    }
  }

  &-rules {
    & span {
      display: block;
      font-size: var(--oj-p5-size);
    }
  }
  &-terms {
    font-size: var(--oj-p5-size);
    text-align: center;
    & a {
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
