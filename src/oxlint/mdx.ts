import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['typescript'],
	rules: {
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'unicode-bom': 'off',
		'typescript/no-unused-vars': 'off',
	},
} satisfies OxlintConfig;

export default config;
