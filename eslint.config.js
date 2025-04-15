import js from '@eslint/js';
import globals from 'globals';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactRecommended, prettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2017,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      prettier: eslintPluginPrettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // React specific rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Prettier integration
      'prettier/prettier': ['error', { bracketSpacing: true }],

      // Curly braces
      'object-curly-spacing': ['error', 'always'],

      // Import sorting rules:
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // 1. Built-in Node.js modules
            ['^node:', '^path', '^fs'],
            // 2. External packages (`react`, `vite` etc)
            ['^@?\\w'],
            // 3. Internal aliases (`@/`)
            ['^@/', '^@debts/'],
            // 4. Parent imports
            ['^\\.\\.'],
            // 5. Sibling imports
            ['^\\.'],
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);

