module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-rscss', // RSCSS用
    'stylelint-config-recommended-vue',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'unicode-bom': 'never',
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['include', 'media'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'if', 'for', 'include'] },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-blockless'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    // 'scale-unlimited/declaration-strict-value': [
    //   ['/color$/', 'background-color', 'border-color'],
    //   { expandShorthand: true, ignoreValues: 'transparent' },
    // ],
  },
  ignoreFiles: ['**/app.scss', '**/color.scss', '**/reset.scss'],
}
