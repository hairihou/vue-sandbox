import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'public'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, ...vue.configs['flat/recommended'], prettier],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  }
);
