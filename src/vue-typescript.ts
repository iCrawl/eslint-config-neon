import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".vue"],
			},
		},
	},
];

export default config;
