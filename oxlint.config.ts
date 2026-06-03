import { defineConfig } from 'oxlint';

import common from './src/oxlint/common';
import node from './src/oxlint/node';
import prettier from './src/oxlint/prettier';
import typescript from './src/oxlint/typescript';

export default defineConfig({
	extends: [common, node, typescript, prettier],
	ignorePatterns: ['dist/**', 'coverage/**', 'node_modules/**'],
	rules: {
		'no-restricted-globals': 0,
	},
	options: {
		typeAware: true,
		typeCheck: true,
		reportUnusedDisableDirectives: 'warn',
	},
});
