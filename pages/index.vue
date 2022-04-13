<template>
  <div class="index">
    <AppButton text="aaa" />
    <AppInput />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    // 一番よく使うやつ
    const data1 = ref();
    const data2 = ref();
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await res.json();
      data1.value = json;
    };

    // const fetchByPromise = () => {
    //   const res = fetch('https://jsonplaceholder.typicode.com/posts');
    // };

    // const fetchByPromise = (): Promise<void> => {
    //   // let res: Response;
    //   const res = fetch('https://jsonplaceholder.typicode.com/posts');
    //   return new Promise(() => {
    //     // new Promsie(res);
    //   }).then((res) => {
    //     console.log(res);
    //     data2.value = res;
    //   });
    // };

    onMounted(() => {
      fetchData();
      // fetchByPromise();
    });
    return { data1, data2 };
  },
});
</script>

<style lang="scss" scoped>
@import 'assets/scss/color';

.index-container {
  padding: 16px;
}
</style>
