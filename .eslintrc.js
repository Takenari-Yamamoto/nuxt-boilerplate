module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'eslint-config-prettier',
    'eslint-plugin-nuxt',
    'eslint-plugin-vue',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
};
