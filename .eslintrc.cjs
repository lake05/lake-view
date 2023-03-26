module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-empty-function': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'vue/multi-word-component-names': 'off',
    'vue/one-component-per-file': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },
  globals: {
    defineOptions: true,
  },
}
