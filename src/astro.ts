import type { TSESLint } from "@typescript-eslint/utils";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";

const astroRules: TSESLint.FlatConfig.Rules = {
	"react/jsx-key": 0,
	"react/no-unknown-property": 0,
	"react/self-closing-comp": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: astroPlugin.environments.astro.globals,
			parserOptions: {
				extraFileExtensions: [".astro"],
			},
		},
	},
	{
		languageOptions: {
			parser: astroParser,
		},
		plugins: {
			// @ts-expect-error eslint-plugin-astro needs to be updated to v9
			// TODO [V9 UPDATE]
			astro: astroPlugin,
		},
		rules: astroRules,
	},
	{
		files: ["**/*.astro/*.js", "*.astro/*.js"],
	},
];

export default config;
