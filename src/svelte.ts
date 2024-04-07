import type { TSESLint } from "@typescript-eslint/utils";
// @ts-expect-error eslint-plugin-svelte3 is not typed
import eslintPluginSvelte3 from "eslint-plugin-svelte3";

const plugins: TSESLint.FlatConfig.Plugins = {
	svelte3: eslintPluginSvelte3,
};

const svelteRules: TSESLint.FlatConfig.Rules = {
	"import/first": 0,
	"import/no-duplicates": 0,
	"import/no-mutable-exports": 0,
	"import/no-unresolved": 0,
	"import/prefer-default-export": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins,
	},
	{
		plugins,
		processor: "svelte3/svelte3",
		rules: svelteRules,
	},
];

export default config;
