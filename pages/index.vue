<template>
  <div class="index">
    text1
    <input v-model="text1" type="text" />
    text2
    <input v-model="text2" type="text" />
    <Child :dataFromParent="{ id: 1, name: 'take' }" />
    <div v-for="n of 8">ああ</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  unref,
  watch,
} from '@nuxtjs/composition-api';
import Child from '@/components/atoms/Child.vue';

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const text1 = ref('');
    const text2 = ref();

    watch([text1, text2], () => {
      alert('refObjが変更されました');
    });

    return { text1, text2 };
  },
});
</script>
