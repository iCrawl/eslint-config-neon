import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['import'],
	rules: {
		'no-restricted-globals': 0,
		'import/extensions': 0,
		'import-x/extensions': 0,
	},
} satisfies OxlintConfig;

export default config;
