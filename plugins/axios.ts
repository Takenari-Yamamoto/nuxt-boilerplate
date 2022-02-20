import { Context } from '@nuxt/types';

export default function ({ $axios, route, redirect }: any) {
  $axios.onRequest((config: any) => {
    config.headers['Accept'] = 'application/json';
    // ログ確認
    console.log(`API url:${config.url}, method:${config.method}`);
    config.headers.common['Accept'] = 'application/json';
  });

  $axios.onError((error: any) => {
    if (!error.response) return;

    const code = error.response.status;
    if (code === 401 && route.name !== 'login') {
      console.error('authentication token is invalid');
      return redirect({ name: 'login' });
    }

    if (code === 404) console.log('404エラー');
  });
}
