import type { OxlintConfig } from 'oxlint';

const config = {
	jsPlugins: [
		{
			name: '@neon/eslint-rxjs-angular',
			specifier: 'eslint-plugin-rxjs-angular-x',
		},
	],
	overrides: [
		{
			files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
			rules: {
				'@neon/eslint-rxjs-angular/prefer-async-pipe': 0,
				'@neon/eslint-rxjs-angular/prefer-composition': 0,
				'@neon/eslint-rxjs-angular/prefer-takeuntil': 0,
			},
		},
	],
	rules: {},
	plugins: [],
} satisfies OxlintConfig;

export default config;
