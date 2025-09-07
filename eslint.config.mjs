import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'off',
			'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
			'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'block-like', next: 'block-like' }],
		},
	},
])
