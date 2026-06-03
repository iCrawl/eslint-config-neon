import type { OxlintConfig } from 'oxlint';

const config = {
	jsPlugins: [
		{
			name: '@neon/eslint-import-x',
			specifier: 'eslint-plugin-import-x',
		},
		{
			name: '@neon/eslint-stylistic',
			specifier: '@stylistic/eslint-plugin',
		},
		{
			name: '@neon/eslint-unicorn',
			specifier: 'eslint-plugin-unicorn',
		},
	],
	overrides: [
		{
			files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
			rules: {
				'@neon/eslint-stylistic/array-bracket-newline': [
					2,
					{
						multiline: true,
					},
				],
				'@neon/eslint-stylistic/array-bracket-spacing': [2, 'never'],
				'@neon/eslint-stylistic/array-element-newline': [
					2,
					{
						multiline: true,
					},
				],
				'@neon/eslint-stylistic/arrow-parens': [2, 'always'],
				'@neon/eslint-stylistic/arrow-spacing': [
					2,
					{
						after: true,
						before: true,
					},
				],
				'@neon/eslint-stylistic/block-spacing': [2, 'always'],
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
					},
				],
				'@neon/eslint-stylistic/comma-spacing': [
					2,
					{
						after: true,
						before: false,
					},
				],
				'@neon/eslint-stylistic/comma-style': [2, 'last'],
				'@neon/eslint-stylistic/computed-property-spacing': [2, 'never'],
				'@neon/eslint-stylistic/dot-location': [2, 'property'],
				'@neon/eslint-stylistic/eol-last': 2,
				'@neon/eslint-stylistic/function-call-argument-newline': [2, 'consistent'],
				'@neon/eslint-stylistic/function-call-spacing': [2, 'never'],
				'@neon/eslint-stylistic/function-paren-newline': [2, 'consistent'],
				'@neon/eslint-stylistic/generator-star-spacing': [
					2,
					{
						after: false,
						before: true,
					},
				],
				'@neon/eslint-stylistic/implicit-arrow-linebreak': [2, 'beside'],
				'@neon/eslint-stylistic/indent': [2, 'tab'],
				'@neon/eslint-stylistic/jsx-quotes': [2, 'prefer-single'],
				'@neon/eslint-stylistic/key-spacing': [
					2,
					{
						afterColon: true,
						beforeColon: false,
					},
				],
				'@neon/eslint-stylistic/keyword-spacing': [
					2,
					{
						after: true,
						before: true,
					},
				],
				'@neon/eslint-stylistic/line-comment-position': [
					2,
					{
						position: 'above',
					},
				],
				'@neon/eslint-stylistic/linebreak-style': [2, 'unix'],
				'@neon/eslint-stylistic/lines-around-comment': 0,
				'@neon/eslint-stylistic/lines-between-class-members': [2, 'always'],
				'@neon/eslint-stylistic/max-len': 0,
				'@neon/eslint-stylistic/max-statements-per-line': [
					2,
					{
						max: 1,
					},
				],
				'@neon/eslint-stylistic/multiline-comment-style': 0,
				'@neon/eslint-stylistic/multiline-ternary': 0,
				'@neon/eslint-stylistic/new-parens': 2,
				'@neon/eslint-stylistic/newline-per-chained-call': 0,
				'@neon/eslint-stylistic/no-confusing-arrow': 0,
				'@neon/eslint-stylistic/no-extra-parens': 2,
				'@neon/eslint-stylistic/no-extra-semi': 2,
				'@neon/eslint-stylistic/no-floating-decimal': 2,
				'@neon/eslint-stylistic/no-mixed-operators': 0,
				'@neon/eslint-stylistic/no-mixed-spaces-and-tabs': 2,
				'@neon/eslint-stylistic/no-multi-spaces': 2,
				'@neon/eslint-stylistic/no-multiple-empty-lines': [
					2,
					{
						max: 1,
						maxBOF: 0,
						maxEOF: 1,
					},
				],
				'@neon/eslint-stylistic/no-tabs': [
					2,
					{
						allowIndentationTabs: true,
					},
				],
				'@neon/eslint-stylistic/no-trailing-spaces': 2,
				'@neon/eslint-stylistic/no-whitespace-before-property': 2,
				'@neon/eslint-stylistic/nonblock-statement-body-position': [2, 'below'],
				'@neon/eslint-stylistic/object-curly-newline': [
					2,
					{
						multiline: true,
					},
				],
				'@neon/eslint-stylistic/object-curly-spacing': [2, 'always'],
				'@neon/eslint-stylistic/object-property-newline': [
					2,
					{
						allowAllPropertiesOnSameLine: false,
					},
				],
				'@neon/eslint-stylistic/one-var-declaration-per-line': 2,
				'@neon/eslint-stylistic/operator-linebreak': [2, 'after'],
				'@neon/eslint-stylistic/padded-blocks': [2, 'never'],
				'@neon/eslint-stylistic/padding-line-between-statements': [
					2,
					{
						blankLine: 'always',
						next: '*',
						prev: 'multiline-block-like',
					},
				],
				'@neon/eslint-stylistic/quote-props': [
					2,
					'as-needed',
					{
						numbers: true,
					},
				],
				'@neon/eslint-stylistic/quotes': [2, 'double'],
				'@neon/eslint-stylistic/rest-spread-spacing': [2, 'never'],
				'@neon/eslint-stylistic/semi': [2, 'always'],
				'@neon/eslint-stylistic/semi-spacing': [
					2,
					{
						after: true,
						before: false,
					},
				],
				'@neon/eslint-stylistic/semi-style': [2, 'last'],
				'@neon/eslint-stylistic/space-before-blocks': [2, 'always'],
				'@neon/eslint-stylistic/space-before-function-paren': [
					2,
					{
						anonymous: 'always',
						asyncArrow: 'always',
						named: 'never',
					},
				],
				'@neon/eslint-stylistic/space-in-parens': [2, 'never'],
				'@neon/eslint-stylistic/space-infix-ops': [
					2,
					{
						int32Hint: true,
					},
				],
				'@neon/eslint-stylistic/space-unary-ops': [
					2,
					{
						nonwords: false,
						words: true,
					},
				],
				'@neon/eslint-stylistic/spaced-comment': [
					2,
					'always',
					{
						markers: ['/'],
					},
				],
				'@neon/eslint-stylistic/switch-colon-spacing': [
					2,
					{
						after: true,
						before: false,
					},
				],
				'@neon/eslint-stylistic/template-curly-spacing': [2, 'never'],
				'@neon/eslint-stylistic/template-tag-spacing': [2, 'never'],
				'@neon/eslint-stylistic/wrap-iife': [2, 'inside'],
				'@neon/eslint-stylistic/wrap-regex': 0,
				'@neon/eslint-stylistic/yield-star-spacing': [
					2,
					{
						after: true,
						before: false,
					},
				],
				'@neon/eslint-unicorn/better-regex': 2,
				'@neon/eslint-unicorn/consistent-destructuring': 0,
				'@neon/eslint-unicorn/expiring-todo-comments': [
					2,
					{
						allowWarningComments: true,
						ignoreDatesOnPullRequests: true,
						terms: ['TODO', 'todo'],
					},
				],
				'@neon/eslint-unicorn/no-array-push-push': 0,
				'@neon/eslint-unicorn/no-for-loop': 2,
				'@neon/eslint-unicorn/no-keyword-prefix': 0,
				'@neon/eslint-unicorn/no-named-default': 2,
				'@neon/eslint-unicorn/no-unused-properties': 2,
				'@neon/eslint-unicorn/prefer-export-from': 2,
				'@neon/eslint-unicorn/prefer-json-parse-buffer': 0,
				'@neon/eslint-unicorn/prefer-switch': 0,
				'@neon/eslint-unicorn/prevent-abbreviations': 0,
				'@neon/eslint-unicorn/string-content': 0,
				'@neon/eslint-unicorn/template-indent': 2,
			},
		},
		{
			files: ['**/*.oxlint-disabled'],
			rules: {
				'@neon/eslint-import-x/dynamic-import-chunkname': 0,
				'@neon/eslint-import-x/export': 0,
				'@neon/eslint-import-x/named': 0,
				'@neon/eslint-import-x/no-deprecated': 0,
				'@neon/eslint-import-x/no-extraneous-dependencies': [
					2,
					{
						devDependencies: true,
						optionalDependencies: true,
						peerDependencies: true,
					},
				],
				'@neon/eslint-import-x/no-import-module-exports': 0,
				'@neon/eslint-import-x/no-internal-modules': 0,
				'@neon/eslint-import-x/no-relative-packages': 0,
				'@neon/eslint-import-x/no-restricted-paths': 0,
				'@neon/eslint-import-x/no-unresolved': 0,
				'@neon/eslint-import-x/no-unused-modules': 0,
				'@neon/eslint-import-x/no-useless-path-segments': 2,
				'@neon/eslint-import-x/order': [
					2,
					{
						alphabetize: {
							caseInsensitive: false,
							order: 'asc',
						},
						groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
						'newlines-between': 'never',
					},
				],
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
