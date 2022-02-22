<template>
  <div class="index">
    <AppButton text="aaa" />
    <AppInput />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const text1 = ref('');
    const text2 = ref();

    watch([text1, text2], () => {});

    return { text1, text2 };
  },
});
</script>
