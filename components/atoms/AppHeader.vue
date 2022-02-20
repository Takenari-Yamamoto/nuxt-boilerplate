<template>
  <header class="app-header">
    <NuxtLink to="/" class="logo">Nuxt</NuxtLink>
    <NuxtLink to="/" class="item">Top</NuxtLink>
    <NuxtLink to="/" class="item">Post</NuxtLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/scss/color';

.app-header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: $white;

  > .logo {
    margin-right: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  > .item {
    margin-left: 1rem;
    font-weight: bold;
    text-decoration: none;
  }

  > .logout {
    margin-left: auto;
  }
}
</style>
