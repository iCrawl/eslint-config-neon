import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
	"unicorn/prefer-module": 2,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
