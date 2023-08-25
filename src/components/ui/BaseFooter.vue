<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-el"><a href="/">Home</a></li>
      <li class="footer-el"><a href="/">Shop</a></li>
      <li class="footer-el"><a href="/">About Us</a></li>
      <li class="footer-el"><a href="/">Contact Us</a></li>
      <li class="footer-el"><a href="/">F.A.Q</a></li>
      <li class="footer-el"><a href="/">Terms & Conditions</a></li>
      <li class="footer-el"><a href="/">Refund Policy</a></li>
      <li class="footer-el"><a href="/">Socials</a></li>
    </ul>
    <span class="footer-logo">Ojala</span>
    <div class="footer-sub-text">
      <span>©2023</span>
      <span>Made By: <a href="https://github.com/BerkeGvn">Berke Güven</a></span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.footer {
  border-top: 1px solid var(--oj-background-color-1);
  padding: 2rem;

  &-list {
    font-size: var(--oj-p4-size);
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: start;
    justify-content: center;
    column-gap: 25%;
    & li {
      width: 100%;
    }
    & a {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &-logo {
    display: block;
    color: var(--oj-text-color-2);
    font-size: var(--oj-h0-size);
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin: -2rem 0;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &-sub-text {
    display: flex;
    justify-content: space-between;
    & a {
      text-decoration: underline;
    }
  }
}
</style>
