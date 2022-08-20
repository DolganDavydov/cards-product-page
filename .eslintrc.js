module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue2-recommended',
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@javascript-eslint/parser',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['vue', '@javascript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/script-setup-uses-vars': 'warn',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    semi: [1, 'always'],
  },
};
