import type { TSESLint } from "@typescript-eslint/utils";

const settings: TSESLint.FlatConfig.Settings = {
	"svelte3/typescript": true,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".svelte"],
			},
		},
		settings,
	},
];

export default config;
