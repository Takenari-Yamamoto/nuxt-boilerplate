<template>
  <input class="app-input" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  border: 1px solid black;
}
</style>
