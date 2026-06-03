import { defineConfig } from 'oxlint';

import common from './src/oxlint/common.ts';
import node from './src/oxlint/node.ts';
import prettier from './src/oxlint/prettier.ts';
import typescript from './src/oxlint/typescript.ts';

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
