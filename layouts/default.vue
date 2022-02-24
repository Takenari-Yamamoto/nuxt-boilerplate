<template>
  <div>
    <AppHeader :top="tabList.top" :paths="tabList.list" />
    <div class="default-container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { tabList } from '../services/tabList';

export default defineComponent({
  setup() {
    return { tabList };
  },
});
</script>
