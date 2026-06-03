import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['unicorn'],
	rules: {
		curly: 0,
		'no-inline-comments': 0,
		'no-unexpected-multiline': 0,
		'unicorn/empty-brace-spaces': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/number-literal-case': 'off',
	},
} satisfies OxlintConfig;

export default config;
