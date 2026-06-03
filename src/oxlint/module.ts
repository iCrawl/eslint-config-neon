import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['unicorn'],
	rules: {
		'unicorn/prefer-module': 2,
	},
} satisfies OxlintConfig;

export default config;
