import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginVue from "eslint-plugin-vue";
import vueEslintParser from "vue-eslint-parser";

const rules: TSESLint.FlatConfig.Rules = {
	"vue/array-bracket-newline": [2, { multiline: true }],
	"vue/array-bracket-spacing": [2, "never"],
	"vue/arrow-spacing": [
		2,
		{
			after: true,
			before: true,
		},
	],
	"vue/attribute-hyphenation": [2, "always"],
	"vue/attributes-order": 2,
	"vue/block-lang": 0,
	"vue/block-spacing": [2, "always"],
	"vue/block-tag-newline": 2,
	"vue/brace-style": [
		2,
		"1tbs",
		{
			allowSingleLine: false,
		},
	],
	"vue/camelcase": 0,
	"vue/comma-dangle": [
		2,
		{
			arrays: "always-multiline",
			exports: "always-multiline",
			functions: "always-multiline",
			imports: "always-multiline",
			objects: "always-multiline",
		},
	],
	"vue/comma-spacing": [
		2,
		{
			after: true,
			before: false,
		},
	],
	"vue/comma-style": [2, "last"],
	"vue/comment-directive": 2,
	"vue/component-api-style": 2,
	"vue/component-definition-name-casing": 2,
	"vue/component-name-in-template-casing": 2,
	"vue/component-options-name-casing": 2,
	"vue/component-tags-order": 2,
	"vue/custom-event-name-casing": 2,
	"vue/define-macros-order": 2,
	"vue/dot-location": [2, "property"],
	"vue/dot-notation": 2,
	"vue/eqeqeq": 2,
	"vue/first-attribute-linebreak": [
		2,
		{
			singleline: "beside",
			multiline: "below",
		},
	],
	"vue/func-call-spacing": [2, "never"],
	"vue/html-button-has-type": 2,
	"vue/html-closing-bracket-newline": 2,
	"vue/html-closing-bracket-spacing": 2,
	"vue/html-comment-content-newline": 2,
	"vue/html-comment-content-spacing": 2,
	"vue/html-comment-indent": 2,
	"vue/html-end-tags": 2,
	"vue/html-indent": [2, "tab"],
	"vue/html-quotes": 2,
	"vue/html-self-closing": [
		"error",
		{
			html: {
				void: "never",
				normal: "never",
				component: "always",
			},
			svg: "never",
			math: "never",
		},
	],
	"vue/jsx-uses-vars": 2,
	"vue/key-spacing": [
		2,
		{
			afterColon: true,
			beforeColon: false,
		},
	],
	"vue/keyword-spacing": [
		2,
		{
			after: true,
			before: true,
		},
	],
	"vue/match-component-file-name": [
		2,
		{
			extensions: [".js", "jsx", ".ts", ".tsx", ".vue"],
			shouldMatchCase: false,
		},
	],
	"vue/match-component-import-name": 0,
	"vue/max-attributes-per-line": [
		2,
		{
			singleline: {
				max: 3,
			},
			multiline: {
				max: 1,
			},
		},
	],
	"vue/max-len": 0,
	"vue/multi-word-component-names": 2,
	"vue/multiline-html-element-content-newline": 2,
	"vue/mustache-interpolation-spacing": 2,
	"vue/new-line-between-multi-line-property": 2,
	"vue/next-tick-style": 2,
	"vue/no-arrow-functions-in-watch": 2,
	"vue/no-async-in-computed-properties": 2,
	"vue/no-bare-strings-in-template": 0,
	"vue/no-boolean-default": 2,
	"vue/no-child-content": 2,
	"vue/no-computed-properties-in-data": 2,
	"vue/no-constant-condition": 0,
	"vue/no-custom-modifiers-on-v-model": 2,
	"vue/no-deprecated-data-object-declaration": 2,
	"vue/no-deprecated-destroyed-lifecycle": 2,
	"vue/no-deprecated-dollar-listeners-api": 2,
	"vue/no-deprecated-dollar-scopedslots-api": 2,
	"vue/no-deprecated-events-api": 2,
	"vue/no-deprecated-filter": 2,
	"vue/no-deprecated-functional-template": 2,
	"vue/no-deprecated-html-element-is": 2,
	"vue/no-deprecated-inline-template": 2,
	"vue/no-deprecated-props-default-this": 2,
	"vue/no-deprecated-router-link-tag-prop": 2,
	"vue/no-deprecated-scope-attribute": 2,
	"vue/no-deprecated-slot-attribute": 2,
	"vue/no-deprecated-slot-scope-attribute": 2,
	"vue/no-deprecated-v-bind-sync": 2,
	"vue/no-deprecated-v-is": 2,
	"vue/no-deprecated-v-on-native-modifier": 2,
	"vue/no-deprecated-v-on-number-modifiers": 2,
	"vue/no-deprecated-vue-config-keycodes": 2,
	"vue/no-dupe-keys": 2,
	"vue/no-dupe-v-else-if": 2,
	"vue/no-duplicate-attr-inheritance": 2,
	"vue/no-duplicate-attributes": 2,
	"vue/no-empty-component-block": 2,
	"vue/no-empty-pattern": 2,
	"vue/no-export-in-script-setup": 2,
	"vue/no-expose-after-await": 2,
	"vue/no-extra-parens": 2,
	"vue/no-irregular-whitespace": 2,
	"vue/no-lifecycle-after-await": 2,
	"vue/no-lone-template": 2,
	"vue/no-loss-of-precision": 2,
	"vue/no-multi-spaces": 2,
	"vue/no-multiple-objects-in-class": 2,
	"vue/no-multiple-slot-args": 2,
	"vue/no-multiple-template-root": 2,
	"vue/no-mutating-props": 2,
	"vue/no-parsing-error": 2,
	"vue/no-potential-component-option-typo": 2,
	"vue/no-ref-as-operand": 2,
	"vue/no-reserved-component-names": [
		2,
		{
			disallowVueBuiltInComponents: true,
			disallowVue3BuiltInComponents: true,
		},
	],
	"vue/no-reserved-keys": 2,
	"vue/no-reserved-props": 2,
	"vue/no-setup-props-destructure": 2,
	"vue/no-shared-component-data": 2,
	"vue/no-side-effects-in-computed-properties": 2,
	"vue/no-spaces-around-equal-signs-in-attribute": 2,
	"vue/no-sparse-arrays": 0,
	"vue/no-static-inline-styles": [2, { allowBinding: false }],
	"vue/no-template-key": 2,
	"vue/no-template-shadow": 2,
	"vue/no-template-target-blank": 2,
	"vue/no-textarea-mustache": 2,
	"vue/no-this-in-before-route-enter": 2,
	"vue/no-undef-components": 0,
	"vue/no-undef-properties": 0,
	"vue/no-unsupported-features": 0,
	"vue/no-unused-components": 2,
	"vue/no-unused-properties": 2,
	"vue/no-unused-refs": 2,
	"vue/no-unused-vars": 2,
	"vue/no-use-computed-property-like-method": 2,
	"vue/no-use-v-if-with-v-for": 2,
	"vue/no-useless-concat": 2,
	"vue/no-useless-mustaches": 2,
	"vue/no-useless-template-attributes": 2,
	"vue/no-useless-v-bind": 2,
	"vue/no-v-for-template-key-on-child": 2,
	"vue/no-v-for-template-key": 0,
	"vue/no-v-html": 1,
	"vue/no-v-model-argument": 2,
	"vue/no-v-text-v-html-on-component": 2,
	"vue/no-v-text": 2,
	"vue/no-watch-after-await": 2,
	"vue/object-curly-newline": [2, { multiline: true }],
	"vue/object-curly-spacing": [2, "always"],
	"vue/object-property-newline": [
		2,
		{
			allowAllPropertiesOnSameLine: false,
		},
	],
	"vue/object-shorthand": [2, "always"],
	"vue/one-component-per-file": 2,
	"vue/operator-linebreak": [2, "after"],
	"vue/order-in-components": 2,
	"vue/padding-line-between-blocks": 2,
	"vue/prefer-import-from-vue": 2,
	"vue/prefer-prop-type-boolean-first": 2,
	"vue/prefer-separate-static-class": 2,
	"vue/prefer-template": 0,
	"vue/prefer-true-attribute-shorthand": 2,
	"vue/prop-name-casing": 0,
	"vue/quote-props": [
		2,
		"as-needed",
		{
			numbers: true,
		},
	],
	"vue/require-component-is": 2,
	"vue/require-default-prop": 2,
	"vue/require-direct-export": 2,
	"vue/require-emit-validator": 2,
	"vue/require-explicit-emits": 2,
	"vue/require-expose": 2,
	"vue/require-name-property": 0,
	"vue/require-prop-type-constructor": 2,
	"vue/require-prop-types": 2,
	"vue/require-render-return": 2,
	"vue/require-slots-as-functions": 2,
	"vue/require-toggle-inside-transition": 2,
	"vue/require-v-for-key": 2,
	"vue/require-valid-default-prop": 2,
	"vue/return-in-computed-property": 2,
	"vue/return-in-emits-validator": 2,
	"vue/script-indent": [2, "tab"],
	"vue/singleline-html-element-content-newline": 0,
	"vue/sort-keys": 2,
	"vue/space-in-parens": [2, "never"],
	"vue/space-infix-ops": [2, { int32Hint: true }],
	"vue/space-unary-ops": [
		2,
		{
			nonwords: false,
			words: true,
		},
	],
	"vue/static-class-names-order": 0,
	"vue/template-curly-spacing": [2, "never"],
	"vue/this-in-template": 2,
	"vue/use-v-on-exact": 2,
	"vue/v-bind-style": 2,
	"vue/v-for-delimiter-style": 2,
	"vue/v-on-event-hyphenation": [2, "always", { autofix: true }],
	"vue/v-on-function-call": 2,
	"vue/v-on-style": 2,
	"vue/v-slot-style": 2,
	"vue/valid-attribute-name": 2,
	"vue/valid-define-emits": 2,
	"vue/valid-define-props": 2,
	"vue/valid-model-definition": 2,
	"vue/valid-next-tick": 2,
	"vue/valid-template-root": 2,
	"vue/valid-v-bind-sync": 2,
	"vue/valid-v-bind": 2,
	"vue/valid-v-cloak": 2,
	"vue/valid-v-else-if": 2,
	"vue/valid-v-else": 2,
	"vue/valid-v-for": 2,
	"vue/valid-v-html": 2,
	"vue/valid-v-if": 2,
	"vue/valid-v-is": 2,
	"vue/valid-v-memo": 2,
	"vue/valid-v-model": 2,
	"vue/valid-v-on": 2,
	"vue/valid-v-once": 2,
	"vue/valid-v-pre": 2,
	"vue/valid-v-show": 2,
	"vue/valid-v-slot": 2,
	"vue/valid-v-text": 2,
};

const vueRules: TSESLint.FlatConfig.Rules = {
	indent: 0,
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parser: vueEslintParser,
		},
		plugins: {
			vue: eslintPluginVue,
		},
		rules,
	},
	{
		rules: vueRules,
	},
];

export default config;
