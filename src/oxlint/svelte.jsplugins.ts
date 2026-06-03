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
				'@neon/eslint-import-x/no-unresolved': 0,
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
