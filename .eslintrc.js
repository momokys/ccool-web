module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 'no-tabs': ['error', { allowIndentationTabs: true }]
    'vue/multi-word-component-names': ['error', {
      ignores: ['Layout']
    }]
  },
  globals: {
    defineProps: 'readonly',
    defineExpose: 'readonly',
    defineEmits: 'readonly'
  }
}
