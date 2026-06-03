import type { OxlintConfig } from 'oxlint';

const config = {
	jsPlugins: [
		{
			name: '@neon/eslint-import-x',
			specifier: 'eslint-plugin-import-x',
		},
	],
	overrides: [
		{
			files: ['**/*.oxlint-disabled'],
			rules: {
				'@neon/eslint-import-x/no-deprecated': 1,
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
