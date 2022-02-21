<template>
  <textarea class="app-textarea" />
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
.app-textarea {
  border: 1px solid black;
}
</style>
