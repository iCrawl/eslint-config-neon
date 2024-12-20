import type { TSESLint } from "@typescript-eslint/utils";
// @ts-expect-error eslint-config-prettier is not typed
import eslintConfigPrettier from "eslint-config-prettier";

const rules: TSESLint.FlatConfig.Rules = {
	...eslintConfigPrettier.rules,

	"line-comment-position": 0,
	"no-inline-comments": 0,

	// Stylistic rules enabled by either /react that should be disabled when using Prettier
	"@stylistic/jsx/jsx-one-expression-per-line": 0,
	"@stylistic/jsx/jsx-newline": 0,
	"@stylistic/jsx/jsx-props-no-multi-spaces": 0,
	"@stylistic/jsx/jsx-tag-spacing": 0,
	"@stylistic/jsx/jsx-wrap-multilines": 0,

	// TODO: This should be removed when https://github.com/prettier/eslint-config-prettier/pull/272 is merged and released to eslint-config-prettier
	"@stylistic/array-bracket-newline": 0,
	"@stylistic/array-bracket-spacing": 0,
	"@stylistic/array-element-newline": 0,
	"@stylistic/arrow-parens": 0,
	"@stylistic/arrow-spacing": 0,
	"@stylistic/block-spacing": 0,
	"@stylistic/brace-style": 0,
	"@stylistic/comma-dangle": 0,
	"@stylistic/comma-spacing": 0,
	"@stylistic/comma-style": 0,
	"@stylistic/computed-property-spacing": 0,
	"@stylistic/dot-location": 0,
	"@stylistic/eol-last": 0,
	"@stylistic/func-call-spacing": 0,
	"@stylistic/function-call-argument-newline": 0,
	"@stylistic/function-call-spacing": 0,
	"@stylistic/function-paren-newline": 0,
	"@stylistic/generator-star-spacing": 0,
	"@stylistic/implicit-arrow-linebreak": 0,
	"@stylistic/indent-binary-ops": 0,
	"@stylistic/indent": 0,
	"@stylistic/js/array-bracket-newline": 0,
	"@stylistic/js/array-bracket-spacing": 0,
	"@stylistic/js/array-element-newline": 0,
	"@stylistic/js/arrow-parens": 0,
	"@stylistic/js/arrow-spacing": 0,
	"@stylistic/js/block-spacing": 0,
	"@stylistic/js/brace-style": 0,
	"@stylistic/js/comma-dangle": 0,
	"@stylistic/js/comma-spacing": 0,
	"@stylistic/js/comma-style": 0,
	"@stylistic/js/computed-property-spacing": 0,
	"@stylistic/js/dot-location": 0,
	"@stylistic/js/eol-last": 0,
	"@stylistic/js/func-call-spacing": 0,
	"@stylistic/js/function-call-argument-newline": 0,
	"@stylistic/js/function-call-spacing": 0,
	"@stylistic/js/function-paren-newline": 0,
	"@stylistic/js/generator-star-spacing": 0,
	"@stylistic/js/implicit-arrow-linebreak": 0,
	"@stylistic/js/indent": 0,
	"@stylistic/js/jsx-quotes": 0,
	"@stylistic/js/key-spacing": 0,
	"@stylistic/js/keyword-spacing": 0,
	"@stylistic/js/line-comment-position": 0,
	"@stylistic/js/linebreak-style": 0,
	"@stylistic/js/lines-around-comment": 0,
	"@stylistic/js/max-len": 0,
	"@stylistic/js/max-statements-per-line": 0,
	"@stylistic/js/multiline-ternary": 0,
	"@stylistic/js/new-parens": 0,
	"@stylistic/js/newline-per-chained-call": 0,
	"@stylistic/js/no-confusing-arrow": 0,
	"@stylistic/js/no-extra-parens": 0,
	"@stylistic/js/no-extra-semi": 0,
	"@stylistic/js/no-floating-decimal": 0,
	"@stylistic/js/no-mixed-operators": 0,
	"@stylistic/js/no-mixed-spaces-and-tabs": 0,
	"@stylistic/js/no-multi-spaces": 0,
	"@stylistic/js/no-multiple-empty-lines": 0,
	"@stylistic/js/no-tabs": 0,
	"@stylistic/js/no-trailing-spaces": 0,
	"@stylistic/js/no-whitespace-before-property": 0,
	"@stylistic/js/nonblock-statement-body-position": 0,
	"@stylistic/js/object-curly-newline": 0,
	"@stylistic/js/object-curly-spacing": 0,
	"@stylistic/js/object-property-newline": 0,
	"@stylistic/js/one-var-declaration-per-line": 0,
	"@stylistic/js/operator-linebreak": 0,
	"@stylistic/js/padded-blocks": 0,
	"@stylistic/js/quote-props": 0,
	"@stylistic/js/quotes": 0,
	"@stylistic/js/rest-spread-spacing": 0,
	"@stylistic/js/semi-spacing": 0,
	"@stylistic/js/semi-style": 0,
	"@stylistic/js/semi": 0,
	"@stylistic/js/space-before-blocks": 0,
	"@stylistic/js/space-before-function-paren": 0,
	"@stylistic/js/space-in-parens": 0,
	"@stylistic/js/space-infix-ops": 0,
	"@stylistic/js/space-unary-ops": 0,
	"@stylistic/js/switch-colon-spacing": 0,
	"@stylistic/js/template-curly-spacing": 0,
	"@stylistic/js/template-tag-spacing": 0,
	"@stylistic/js/wrap-iife": 0,
	"@stylistic/js/wrap-regex": 0,
	"@stylistic/js/yield-star-spacing": 0,
	"@stylistic/jsx-child-element-spacing": 0,
	"@stylistic/jsx-closing-bracket-location": 0,
	"@stylistic/jsx-closing-tag-location": 0,
	"@stylistic/jsx-curly-newline": 0,
	"@stylistic/jsx-curly-spacing": 0,
	"@stylistic/jsx-equals-spacing": 0,
	"@stylistic/jsx-first-prop-new-line": 0,
	"@stylistic/jsx-indent-props": 0,
	"@stylistic/jsx-indent": 0,
	"@stylistic/jsx-max-props-per-line": 0,
	"@stylistic/jsx-newline": 0,
	"@stylistic/jsx-one-expression-per-line": 0,
	"@stylistic/jsx-props-no-multi-spaces": 0,
	"@stylistic/jsx-quotes": 0,
	"@stylistic/jsx-tag-spacing": 0,
	"@stylistic/jsx-wrap-multilines": 0,
	"@stylistic/jsx/jsx-child-element-spacing": 0,
	"@stylistic/jsx/jsx-closing-bracket-location": 0,
	"@stylistic/jsx/jsx-closing-tag-location": 0,
	"@stylistic/jsx/jsx-curly-newline": 0,
	"@stylistic/jsx/jsx-curly-spacing": 0,
	"@stylistic/jsx/jsx-equals-spacing": 0,
	"@stylistic/jsx/jsx-first-prop-new-line": 0,
	"@stylistic/jsx/jsx-indent-props": 0,
	"@stylistic/jsx/jsx-indent": 0,
	"@stylistic/jsx/jsx-max-props-per-line": 0,
	"@stylistic/key-spacing": 0,
	"@stylistic/keyword-spacing": 0,
	"@stylistic/linebreak-style": 0,
	"@stylistic/lines-around-comment": 0,
	"@stylistic/max-len": 0,
	"@stylistic/max-statements-per-line": 0,
	"@stylistic/member-delimiter-style": 0,
	"@stylistic/multiline-ternary": 0,
	"@stylistic/new-parens": 0,
	"@stylistic/newline-per-chained-call": 0,
	"@stylistic/no-confusing-arrow": 0,
	"@stylistic/no-extra-parens": 0,
	"@stylistic/no-extra-semi": 0,
	"@stylistic/no-floating-decimal": 0,
	"@stylistic/no-mixed-operators": 0,
	"@stylistic/no-mixed-spaces-and-tabs": 0,
	"@stylistic/no-multi-spaces": 0,
	"@stylistic/no-multiple-empty-lines": 0,
	"@stylistic/no-tabs": 0,
	"@stylistic/no-trailing-spaces": 0,
	"@stylistic/no-whitespace-before-property": 0,
	"@stylistic/nonblock-statement-body-position": 0,
	"@stylistic/object-curly-newline": 0,
	"@stylistic/object-curly-spacing": 0,
	"@stylistic/object-property-newline": 0,
	"@stylistic/one-var-declaration-per-line": 0,
	"@stylistic/operator-linebreak": 0,
	"@stylistic/padded-blocks": 0,
	"@stylistic/quote-props": 0,
	"@stylistic/quotes": 0,
	"@stylistic/rest-spread-spacing": 0,
	"@stylistic/semi-spacing": 0,
	"@stylistic/semi-style": 0,
	"@stylistic/semi": 0,
	"@stylistic/space-before-blocks": 0,
	"@stylistic/space-before-function-paren": 0,
	"@stylistic/space-in-parens": 0,
	"@stylistic/space-infix-ops": 0,
	"@stylistic/space-unary-ops": 0,
	"@stylistic/switch-colon-spacing": 0,
	"@stylistic/template-curly-spacing": 0,
	"@stylistic/template-tag-spacing": 0,
	"@stylistic/ts/block-spacing": 0,
	"@stylistic/ts/brace-style": 0,
	"@stylistic/ts/comma-dangle": 0,
	"@stylistic/ts/comma-spacing": 0,
	"@stylistic/ts/func-call-spacing": 0,
	"@stylistic/ts/function-call-spacing": 0,
	"@stylistic/ts/indent": 0,
	"@stylistic/ts/key-spacing": 0,
	"@stylistic/ts/keyword-spacing": 0,
	"@stylistic/ts/lines-around-comment": 0,
	"@stylistic/ts/member-delimiter-style": 0,
	"@stylistic/ts/no-extra-parens": 0,
	"@stylistic/ts/no-extra-semi": 0,
	"@stylistic/ts/object-curly-spacing": 0,
	"@stylistic/ts/quotes": 0,
	"@stylistic/ts/semi": 0,
	"@stylistic/ts/space-before-blocks": 0,
	"@stylistic/ts/space-before-function-paren": 0,
	"@stylistic/ts/space-infix-ops": 0,
	"@stylistic/ts/type-annotation-spacing": 0,
	"@stylistic/type-annotation-spacing": 0,
	"@stylistic/type-generic-spacing": 0,
	"@stylistic/type-named-tuple-spacing": 0,
	"@stylistic/wrap-iife": 0,
	"@stylistic/wrap-regex": 0,
	"@stylistic/yield-star-spacing": 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules,
	},
];

export default config;
