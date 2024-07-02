import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const rules: TSESLint.FlatConfig.Rules = {
	"line-comment-position": 0,
	"no-inline-comments": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
	eslintPluginPrettierRecommended,
];

export default config;
