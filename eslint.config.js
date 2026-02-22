import js from '@eslint/js';
import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';
import eslintReact from '@eslint-react/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Test files
  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.test.{js,jsx}'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: { ...globals.jest },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },

  // Source files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ...eslintReact.configs.recommended,
    languageOptions: {
      ...eslintReact.configs.recommended.languageOptions,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    settings: {
      'react-x': {
        version: '19',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,

      // --- AirBnB-style rules ---

      // Variables
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' }],

      // Functions
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'arrow-body-style': ['error', 'as-needed'],

      // Objects & Arrays
      'object-shorthand': ['error', 'always'],
      'prefer-destructuring': ['warn', { object: true, array: false }],

      // Strings
      'prefer-template': 'error',
      'no-useless-concat': 'error',

      // Comparisons
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-else-return': ['error', { allowElseIf: false }],

      // Best practices
      'no-console': 'warn',
      'no-param-reassign': ['error', { props: false }],
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-shadow': 'error',

      // ES Modules
      'no-duplicate-imports': 'error',

      // React (override @eslint-react defaults)
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-array-index-key': 'warn',
    },
  },

  globalIgnores(['**/coverage/**', '**/dist/**', '**/node_modules/**']),
]);
