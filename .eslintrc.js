module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'eslint-config-prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
};
