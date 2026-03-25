import nextConfig from 'eslint-config-next'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      'dist/**',
      '.vscode/**',
      '**/package.json',
      '**/package-lock.json',
    ],
  },
  ...nextConfig,
  prettierConfig,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2022,
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'no-empty-function': 'off',
      'no-param-reassign': 'off',
      'import/no-named-as-default': 'off',
      'import/prefer-default-export': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          arrowParens: 'avoid',
          printWidth: 120,
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/require-default-props': 'off',
    },
  },
]

export default config
