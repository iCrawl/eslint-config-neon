import { defineConfig } from 'oxfmt';

export default defineConfig({
	printWidth: 120,
	useTabs: true,
	singleQuote: true,
	ignorePatterns: ['.yarn', 'oxlint-configs'],
	sortImports: true,
});
