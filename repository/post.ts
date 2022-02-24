import { ref, useContext } from '@nuxtjs/composition-api';

export interface Post {}

export const usePost = () => {
  const loading = ref(false);
  const { $axios } = useContext();
  const error = ref('');
  const postList = ref();
  const post = ref();

  const fetchPosts = async () => {
    postList.value = [];
    loading.value = true;
    try {
      loading.value = true;
      const res = await $axios.get('/');
      postList.value = res;
    } catch (err) {
      console.log('API error', error);
    }
    loading.value = false;
  };

  const fetchPostDetail = async (id: string) => {
    postList.value = [];
    loading.value = true;
    try {
      loading.value = true;
      const res = await $axios.get(`post/${id}`);
      postList.value = res;
    } catch (err) {
      console.log('API error', error);
    }
    loading.value = false;
  };

  return {
    loading,
    error,
    fetchPosts,
    post,
    postList,
    fetchPostDetail,
  };
};
