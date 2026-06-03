import type { OxlintConfig } from 'oxlint';

const config = {
	plugins: ['react'],
	rules: {
		'react/jsx-key': 0,
		'react/no-unknown-property': 0,
		'react/self-closing-comp': 0,
	},
} satisfies OxlintConfig;

export default config;
