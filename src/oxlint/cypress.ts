import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['import'],
	rules: {
		'import/unambiguous': 0,
		'import-x/unambiguous': 0,
	},
} satisfies OxlintConfig;

export default config;
