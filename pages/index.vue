<template>
  <div class="index">
    <!-- <AppButton text="aaa" />
    <AppInput /> -->
    <p>{{ obj.name }}</p>
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
      return json;
    };

    fetch('./user.json')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
    // const fetchByPromise = () => {
    //   const res = fetch('https://jsonplaceholder.typicode.com/posts');
    // };

    const fetchByPromise = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          data2.value = json;
        });
    };

    const obj = ref({
      // name: 'TAKE',
      age: 24,
    });

    onMounted(() => {
      fetchData();
      fetchByPromise();
    });
    return { data1, data2, obj };
  },
});
</script>

<style lang="scss" scoped>
@import 'assets/scss/color';

.index-container {
  padding: 16px;
}
</style>
