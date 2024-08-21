import type { TSESLint } from "@typescript-eslint/utils";
// @ts-expect-error eslint-config-prettier is not typed
import eslintConfigPrettier from "eslint-config-prettier";

const rules: TSESLint.FlatConfig.Rules = {
	...eslintConfigPrettier.rules,

	"line-comment-position": 0,
	"no-inline-comments": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
