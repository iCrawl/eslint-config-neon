import type { TSESLint } from "@typescript-eslint/utils";
import eslintConfigPrettier from "eslint-config-prettier";

const rules: TSESLint.FlatConfig.Rules = {
	...eslintConfigPrettier.rules,

	"no-inline-comments": 0,

	// Stylistic rules enabled other configs that should be disabled when using Prettier
	"@stylistic/js/line-comment-position": 0,
	"@stylistic/js/lines-around-comment": 0,
	"@stylistic/js/max-len": 0,
	"@stylistic/js/no-confusing-arrow": 0,
	"@stylistic/js/no-mixed-operators": 0,
	"@stylistic/js/no-tabs": 0,
	"@stylistic/js/quotes": 0,
	"@stylistic/jsx/jsx-newline": 0,
	"@stylistic/jsx/jsx-one-expression-per-line": 0,
	"@stylistic/jsx/jsx-props-no-multi-spaces": 0,
	"@stylistic/jsx/jsx-tag-spacing": 0,
	"@stylistic/jsx/jsx-wrap-multilines": 0,
	"@stylistic/lines-around-comment": 0,
	"@stylistic/max-len": 0,
	"@stylistic/no-confusing-arrow": 0,
	"@stylistic/no-mixed-operators": 0,
	"@stylistic/no-tabs": 0,
	"@stylistic/quotes": 0,
	"@stylistic/ts/lines-around-comment": 0,
	"@stylistic/ts/quotes": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
