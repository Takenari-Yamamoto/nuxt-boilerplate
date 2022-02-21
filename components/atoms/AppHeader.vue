<template>
  <header class="app-header">
    <NuxtLink :to="top.path" class="logo">{{ top.name }}</NuxtLink>
    <NuxtLink
      v-for="(path, index) in paths"
      :key="index"
      :to="path.path"
      class="item"
      >{{ path.name }}</NuxtLink
    >
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

interface PathType {
  name: string;
  path: string;
}

export default defineComponent({
  props: {
    top: {
      type: Object as PropType<PathType>,
      required: true,
    },
    paths: {
      type: Array as PropType<PathType[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
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
