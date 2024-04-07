import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
	"import/no-deprecated": 1,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
