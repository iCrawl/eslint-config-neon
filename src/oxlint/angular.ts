import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['import'],
	rules: {
		'import/extensions': 0,
		'import-x/extensions': 0,
	},
} satisfies OxlintConfig;

export default config;
