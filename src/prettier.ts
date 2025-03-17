import type { TSESLint } from "@typescript-eslint/utils";
import eslintConfigPrettier from "eslint-config-prettier";

const rules: TSESLint.FlatConfig.Rules = {
	...eslintConfigPrettier.rules,

	"no-inline-comments": 0,

	// Stylistic rules enabled by /jsx or /react that should be disabled when using Prettier
	"@stylistic/jsx/jsx-one-expression-per-line": 0,
	"@stylistic/jsx/jsx-newline": 0,
	"@stylistic/jsx/jsx-props-no-multi-spaces": 0,
	"@stylistic/jsx/jsx-tag-spacing": 0,
	"@stylistic/jsx/jsx-wrap-multilines": 0,
	
	"@stylistic/js/line-comment-position": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
