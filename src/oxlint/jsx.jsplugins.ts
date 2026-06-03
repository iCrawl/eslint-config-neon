import type { OxlintConfig } from 'oxlint';

const config = {
	jsPlugins: [
		{
			name: '@neon/eslint-react',
			specifier: 'eslint-plugin-react',
		},
		{
			name: '@neon/eslint-stylistic',
			specifier: '@stylistic/eslint-plugin',
		},
	],
	overrides: [
		{
			files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
			rules: {
				'@neon/eslint-react/jsx-indent-props': [2, 'tab'],
				'@neon/eslint-react/jsx-no-bind': [
					2,
					{
						allowArrowFunctions: true,
						allowBind: false,
						ignoreRefs: true,
					},
				],
				'@neon/eslint-react/jsx-no-literals': 0,
				'@neon/eslint-react/jsx-uses-react': 2,
				'@neon/eslint-react/jsx-uses-vars': 2,
				'@neon/eslint-stylistic/jsx-child-element-spacing': 0,
				'@neon/eslint-stylistic/jsx-closing-bracket-location': [2, 'line-aligned'],
				'@neon/eslint-stylistic/jsx-closing-tag-location': 2,
				'@neon/eslint-stylistic/jsx-curly-brace-presence': [
					2,
					{
						children: 'never',
						props: 'never',
					},
				],
				'@neon/eslint-stylistic/jsx-curly-newline': 2,
				'@neon/eslint-stylistic/jsx-curly-spacing': [
					2,
					'never',
					{
						allowMultiline: true,
					},
				],
				'@neon/eslint-stylistic/jsx-equals-spacing': [2, 'never'],
				'@neon/eslint-stylistic/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
				'@neon/eslint-stylistic/jsx-indent': [2, 'tab'],
				'@neon/eslint-stylistic/jsx-max-props-per-line': [
					2,
					{
						maximum: 3,
						when: 'multiline',
					},
				],
				'@neon/eslint-stylistic/jsx-newline': [
					2,
					{
						prevent: true,
					},
				],
				'@neon/eslint-stylistic/jsx-one-expression-per-line': 0,
				'@neon/eslint-stylistic/jsx-pascal-case': [
					2,
					{
						ignore: [
							'h{}',
							'h2',
							'h3',
							'h4',
							'h5',
							'h6',
							'p',
							'a',
							'ul',
							'ol',
							'li',
							'img',
							'div',
							'span',
							'dl',
							'dt',
							'dd',
						],
					},
				],
				'@neon/eslint-stylistic/jsx-props-no-multi-spaces': 2,
				'@neon/eslint-stylistic/jsx-sort-props': 2,
				'@neon/eslint-stylistic/jsx-tag-spacing': [
					2,
					{
						afterOpening: 'never',
						beforeSelfClosing: 'always',
						closingSlash: 'never',
					},
				],
				'@neon/eslint-stylistic/jsx-wrap-multilines': 0,
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
