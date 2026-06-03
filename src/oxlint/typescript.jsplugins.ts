import type { OxlintConfig } from 'oxlint';

const config = {
	jsPlugins: [
		{
			name: '@neon/eslint-import-x',
			specifier: 'eslint-plugin-import-x',
		},
		{
			name: '@neon/eslint-sonarjs',
			specifier: 'eslint-plugin-sonarjs',
		},
		{
			name: '@neon/eslint-stylistic',
			specifier: '@stylistic/eslint-plugin',
		},
		{
			name: '@neon/eslint-tsdoc',
			specifier: 'eslint-plugin-tsdoc',
		},
		{
			name: '@neon/eslint-typescript-sort-keys',
			specifier: 'eslint-plugin-typescript-sort-keys',
		},
	],
	overrides: [
		{
			files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
			rules: {
				'@neon/eslint-sonarjs/elseif-without-else': 0,
				'@neon/eslint-sonarjs/max-switch-cases': 0,
				'@neon/eslint-sonarjs/no-all-duplicated-branches': 2,
				'@neon/eslint-sonarjs/no-collapsible-if': 2,
				'@neon/eslint-sonarjs/no-collection-size-mischeck': 2,
				'@neon/eslint-sonarjs/no-duplicate-string': 0,
				'@neon/eslint-sonarjs/no-duplicated-branches': 2,
				'@neon/eslint-sonarjs/no-element-overwrite': 2,
				'@neon/eslint-sonarjs/no-empty-collection': 2,
				'@neon/eslint-sonarjs/no-extra-arguments': 2,
				'@neon/eslint-sonarjs/no-gratuitous-expressions': 2,
				'@neon/eslint-sonarjs/no-identical-conditions': 2,
				'@neon/eslint-sonarjs/no-identical-expressions': 2,
				'@neon/eslint-sonarjs/no-identical-functions': 2,
				'@neon/eslint-sonarjs/no-ignored-return': 2,
				'@neon/eslint-sonarjs/no-inverted-boolean-check': 2,
				'@neon/eslint-sonarjs/no-nested-switch': 2,
				'@neon/eslint-sonarjs/no-nested-template-literals': 0,
				'@neon/eslint-sonarjs/no-redundant-boolean': 2,
				'@neon/eslint-sonarjs/no-redundant-jump': 2,
				'@neon/eslint-sonarjs/no-same-line-conditional': 2,
				'@neon/eslint-sonarjs/no-small-switch': 0,
				'@neon/eslint-sonarjs/no-unused-collection': 2,
				'@neon/eslint-sonarjs/no-use-of-empty-return-value': 2,
				'@neon/eslint-sonarjs/no-useless-catch': 0,
				'@neon/eslint-sonarjs/non-existent-operator': 2,
				'@neon/eslint-sonarjs/prefer-immediate-return': 2,
				'@neon/eslint-sonarjs/prefer-object-literal': 2,
				'@neon/eslint-sonarjs/prefer-single-boolean-return': 2,
				'@neon/eslint-sonarjs/prefer-while': 2,
				'@neon/eslint-stylistic/brace-style': [
					2,
					'1tbs',
					{
						allowSingleLine: false,
					},
				],
				'@neon/eslint-stylistic/comma-dangle': [
					2,
					{
						arrays: 'always-multiline',
						exports: 'always-multiline',
						functions: 'always-multiline',
						imports: 'always-multiline',
						objects: 'always-multiline',
						enums: 'always-multiline',
						generics: 'never',
						tuples: 'never',
					},
				],
				'@neon/eslint-stylistic/comma-spacing': [
					2,
					{
						after: true,
						before: false,
					},
				],
				'@neon/eslint-stylistic/function-call-spacing': [2, 'never'],
				'@neon/eslint-stylistic/indent': [2, 'tab'],
				'@neon/eslint-stylistic/keyword-spacing': [
					2,
					{
						after: true,
						before: true,
					},
				],
				'@neon/eslint-stylistic/lines-between-class-members': [2, 'always'],
				'@neon/eslint-stylistic/member-delimiter-style': [
					2,
					{
						multiline: {
							delimiter: 'semi',
							requireLast: true,
						},
						overrides: {
							interface: {
								multiline: {
									delimiter: 'semi',
									requireLast: true,
								},
							},
						},
						singleline: {
							delimiter: 'semi',
							requireLast: true,
						},
					},
				],
				'@neon/eslint-stylistic/no-extra-parens': 2,
				'@neon/eslint-stylistic/no-extra-semi': 2,
				'@neon/eslint-stylistic/object-curly-spacing': [2, 'always'],
				'@neon/eslint-stylistic/padding-line-between-statements': [
					2,
					{
						blankLine: 'always',
						next: '*',
						prev: 'multiline-block-like',
					},
				],
				'@neon/eslint-stylistic/quotes': [2, 'double'],
				'@neon/eslint-stylistic/semi': [2, 'always'],
				'@neon/eslint-stylistic/space-before-blocks': [2, 'always'],
				'@neon/eslint-stylistic/space-before-function-paren': [
					2,
					{
						anonymous: 'always',
						named: 'never',
						asyncArrow: 'always',
					},
				],
				'@neon/eslint-stylistic/space-infix-ops': [
					2,
					{
						int32Hint: true,
					},
				],
				'@neon/eslint-stylistic/type-annotation-spacing': 2,
			},
		},
		{
			files: ['**/*.{ts,tsx,cts,mts}'],
			rules: {
				'@neon/eslint-tsdoc/syntax': 1,
				'@neon/eslint-typescript-sort-keys/interface': 2,
				'@neon/eslint-typescript-sort-keys/string-enum': 2,
			},
		},
		{
			files: ['**/*.oxlint-disabled'],
			rules: {
				'@neon/eslint-import-x/no-unresolved': 0,
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
