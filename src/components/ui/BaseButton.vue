<template>
  <button :class="props.color" v-if="props.type === 'button'">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50">
      <path
        :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'"
        d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
      />
      <path
        :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'"
        d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
      />
      <path :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'" d="M16 24h17v2H16z" />
    </svg>
  </button>

  <RouterLink :to="props.route" :class="props.color" v-else>
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50">
      <path
        :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'"
        d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
      />
      <path
        :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'"
        d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
      />
      <path :fill="props.color === 'green' ? '#fafafa' : '#2b2a22'" d="M16 24h17v2H16z" />
    </svg>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  type: {
    type: String,
    default: 'link'
  },
  route: {
    type: [String, Object],
    required: true
  },
  color: {
    type: String,
    default: 'green'
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

a,
button {
  border: none;
  padding: 0.6rem 4rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: var(--oj-p3-size);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  & svg {
    transition: all 0.5s;
  }
  &:hover {
    cursor: pointer;
    scale: 1.05;
    & svg {
      transform: translateX(10px);
    }
  }
  &:active {
    transition: all 0.2s;
    scale: 1;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.green {
  background-color: var(--oj-primary);
  color: var(--oj-text-color-0);
  &:hover {
    background-color: #4b4533;
  }
}
.white {
  background-color: var(--oj-background-color);
  color: var(--oj-text-color-2);
  font-weight: 500;
  &:hover {
    background-color: #ebe8e8;
  }
}
</style>
