import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      'react/prop-types': 0,
    },
  },

  (module.exports = {
    extends: ['prettier'],
  }),
]);
