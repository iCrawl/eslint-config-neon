import { fixupPluginRules } from "@eslint/compat";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginStylisticTs from "@stylistic/eslint-plugin-ts";
import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginSonarjs from "eslint-plugin-sonarjs";
import eslintPluginTsdoc from "eslint-plugin-tsdoc";
// @ts-expect-error eslint-plugin-typescript-sort-keys is not typed
import eslintPluginTypescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import tseslint from "typescript-eslint";

const rules: TSESLint.FlatConfig.Rules = {
	"@typescript-eslint/adjacent-overload-signatures": 2,
	"@typescript-eslint/array-type": [
		2,
		{
			default: "array",
		},
	],
	"@typescript-eslint/await-thenable": 2,
	"@typescript-eslint/ban-ts-comment": [
		2,
		{
			"ts-check": true,
			"ts-expect-error": "allow-with-description",
			"ts-ignore": false,
			"ts-nocheck": false,
		},
	],
	"@typescript-eslint/ban-tslint-comment": 2,
	"@typescript-eslint/class-literal-property-style": [2, "fields"],
	"@typescript-eslint/consistent-indexed-object-style": 0,
	"@typescript-eslint/consistent-type-assertions": [
		2,
		{
			assertionStyle: "as",
			objectLiteralTypeAssertions: "allow",
		},
	],
	"@typescript-eslint/consistent-type-definitions": [2, "type"],
	"@typescript-eslint/consistent-type-exports": [
		2,
		{
			fixMixedExportsWithInlineTypeSpecifier: true,
		},
	],
	"@typescript-eslint/consistent-type-imports": [
		2,
		{
			prefer: "type-imports",
		},
	],
	"@typescript-eslint/explicit-function-return-type": 0,
	"@typescript-eslint/explicit-member-accessibility": 2,
	"@typescript-eslint/explicit-module-boundary-types": 0,
	"@typescript-eslint/member-ordering": 0,
	"@typescript-eslint/method-signature-style": [2, "method"],
	"@typescript-eslint/naming-convention": 0,
	"@typescript-eslint/no-base-to-string": [
		2,
		{
			ignoredTypeNames: ["RegExp"],
		},
	],
	"@typescript-eslint/no-confusing-non-null-assertion": 2,
	"@typescript-eslint/no-confusing-void-expression": [
		2,
		{
			ignoreArrowShorthand: true,
			ignoreVoidOperator: false,
		},
	],
	"@typescript-eslint/no-duplicate-enum-values": 2,
	"@typescript-eslint/no-dynamic-delete": 2,
	"@typescript-eslint/no-empty-function": 0,
	"@typescript-eslint/no-empty-interface": [
		"error",
		{
			allowSingleExtends: true,
		},
	],
	"@typescript-eslint/no-explicit-any": 0,
	"@typescript-eslint/no-extra-non-null-assertion": 2,
	"@typescript-eslint/no-extraneous-class": 0,
	"@typescript-eslint/no-floating-promises": [
		2,
		{
			ignoreVoid: true,
			ignoreIIFE: true,
		},
	],
	"@typescript-eslint/no-for-in-array": 2,
	"@typescript-eslint/no-inferrable-types": [
		2,
		{
			ignoreParameters: true,
			ignoreProperties: true,
		},
	],
	"@typescript-eslint/no-invalid-void-type": [
		2,
		{
			allowAsThisParameter: true,
			allowInGenericTypeArguments: true,
		},
	],
	"@typescript-eslint/no-meaningless-void-operator": [
		2,
		{
			checkNever: true,
		},
	],
	"@typescript-eslint/no-misused-new": 2,
	"@typescript-eslint/no-misused-promises": [
		2,
		{
			checksConditionals: true,
			checksVoidReturn: false,
		},
	],
	"@typescript-eslint/no-namespace": [
		2,
		{
			allowDeclarations: true,
		},
	],
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": 2,
	"@typescript-eslint/no-non-null-asserted-optional-chain": 2,
	"@typescript-eslint/no-non-null-assertion": 0,
	"@typescript-eslint/no-require-imports": 2,
	"@typescript-eslint/no-this-alias": [
		2,
		{
			allowDestructuring: true,
			allowedNames: ["self"],
		},
	],
	"@typescript-eslint/no-type-alias": 0,
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": 0,
	"@typescript-eslint/no-unnecessary-condition": 0,
	"@typescript-eslint/no-unnecessary-qualifier": 2,
	"@typescript-eslint/no-unnecessary-type-arguments": 0,
	"@typescript-eslint/no-unnecessary-type-assertion": 0,
	"@typescript-eslint/no-unnecessary-type-constraint": 2,
	"@typescript-eslint/no-unsafe-argument": 0,
	"@typescript-eslint/no-unsafe-assignment": 0,
	"@typescript-eslint/no-unsafe-call": 0,
	"@typescript-eslint/no-unsafe-member-access": 0,
	"@typescript-eslint/no-unsafe-return": 0,
	"@typescript-eslint/no-var-requires": 2,
	"@typescript-eslint/non-nullable-type-assertion-style": 0,
	"@typescript-eslint/prefer-as-const": 2,
	"@typescript-eslint/prefer-enum-initializers": 0,
	"@typescript-eslint/prefer-for-of": 2,
	"@typescript-eslint/prefer-function-type": 2,
	"@typescript-eslint/prefer-includes": 2,
	"@typescript-eslint/prefer-literal-enum-member": 2,
	"@typescript-eslint/prefer-namespace-keyword": 2,
	"@typescript-eslint/prefer-nullish-coalescing": [
		2,
		{
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		},
	],
	"@typescript-eslint/prefer-optional-chain": 2,
	"@typescript-eslint/prefer-readonly": [
		2,
		{
			onlyInlineLambdas: true,
		},
	],
	"@typescript-eslint/prefer-readonly-parameter-types": 0,
	"@typescript-eslint/prefer-reduce-type-parameter": 2,
	"@typescript-eslint/prefer-regexp-exec": 2,
	"@typescript-eslint/prefer-return-this-type": 2,
	"@typescript-eslint/prefer-string-starts-ends-with": 2,
	"@typescript-eslint/prefer-ts-expect-error": 2,
	"@typescript-eslint/promise-function-async": 2,
	"@typescript-eslint/require-array-sort-compare": [
		2,
		{
			ignoreStringArrays: false,
		},
	],
	"@typescript-eslint/restrict-plus-operands": 2,
	"@typescript-eslint/restrict-template-expressions": 0,
	"@typescript-eslint/return-await": [2, "in-try-catch"],
	"@typescript-eslint/sort-type-constituents": 2,
	"@typescript-eslint/strict-boolean-expressions": 0,
	"@typescript-eslint/switch-exhaustiveness-check": 2,
	"@typescript-eslint/triple-slash-reference": [
		2,
		{
			lib: "never",
			path: "never",
			types: "never",
		},
	],
	"@typescript-eslint/typedef": 0,
	"@typescript-eslint/unbound-method": [
		2,
		{
			ignoreStatic: true,
		},
	],
	"@typescript-eslint/unified-signatures": 2,

	// Eslint compatibility
	"@typescript-eslint/default-param-last": 2,
	"@typescript-eslint/dot-notation": 2,
	"@typescript-eslint/init-declarations": 0,
	"@typescript-eslint/no-array-constructor": 2,
	"@typescript-eslint/no-dupe-class-members": 2,
	"@typescript-eslint/no-implied-eval": 2,
	"@typescript-eslint/no-invalid-this": 0,
	"@typescript-eslint/no-loop-func": 2,
	"@typescript-eslint/no-magic-numbers": 0,
	"@typescript-eslint/no-redeclare": [
		2,
		{
			builtinGlobals: true,
		},
	],
	"@typescript-eslint/no-restricted-imports": 0,
	"@typescript-eslint/no-shadow": 0,
	"@typescript-eslint/only-throw-error": 2,
	"@typescript-eslint/no-unused-expressions": 2,
	"@typescript-eslint/no-unused-vars": 0,
	"@typescript-eslint/no-use-before-define": [
		2,
		{
			classes: true,
			functions: false,
			variables: true,
		},
	],
	"@typescript-eslint/no-useless-constructor": 2,
	"@typescript-eslint/require-await": 0,

	// Disable eslint rules implemented in @typescript-eslint
	"default-param-last": 0,
	"dot-notation": 0,
	"init-declarations": 0,
	"no-array-constructor": 0,
	"no-dupe-class-members": 0,
	"no-empty-function": 0,
	"no-implied-eval": 0,
	"no-invalid-this": 0,
	"no-loop-func": 0,
	"no-magic-numbers": 0,
	"no-redeclare": 0,
	"no-restricted-imports": 0,
	"no-return-await": 0,
	"no-shadow": 0,
	"no-throw-literal": 0,
	"no-unused-expressions": 0,
	"no-unused-vars": 0,
	"no-use-before-define": 0,
	"no-useless-constructor": 0,

	"require-await": 0,

	// Disable Stylistic JS rules implemented in Stylistic TS
	"@stylistic/ts/type-annotation-spacing": 2,
	"@stylistic/ts/keyword-spacing": [
		2,
		{
			after: true,
			before: true,
		},
	],
	"@stylistic/ts/no-extra-parens": 2,
	"@stylistic/ts/no-extra-semi": 2,
	"@stylistic/js/brace-style": 0,
	"@stylistic/js/comma-dangle": 0,
	"@stylistic/js/comma-spacing": 0,
	"@stylistic/js/func-call-spacing": 0,
	"@stylistic/js/indent": 0,
	"@stylistic/js/keyword-spacing": 0,
	"@stylistic/js/lines-between-class-members": 0,
	"@stylistic/js/no-extra-parens": 0,
	"@stylistic/js/no-extra-semi": 0,
	"@stylistic/js/object-curly-spacing": 0,
	"@stylistic/js/padding-line-between-statements": 0,
	"@stylistic/js/quotes": 0,
	"@stylistic/js/semi": 0,
	"@stylistic/js/space-before-blocks": 0,
	"@stylistic/js/space-before-function-paren": 0,
	"@stylistic/js/space-infix-ops": 0,

	// Stylistic
	"@stylistic/ts/brace-style": [2, "1tbs", { allowSingleLine: false }],
	"@stylistic/ts/comma-dangle": [
		2,
		{
			arrays: "always-multiline",
			exports: "always-multiline",
			functions: "always-multiline",
			imports: "always-multiline",
			objects: "always-multiline",
			enums: "always-multiline",
			generics: "never",
			tuples: "never",
		},
	],
	"@stylistic/ts/comma-spacing": [2, { after: true, before: false }],
	"@stylistic/ts/func-call-spacing": [2, "never"],
	"@stylistic/ts/indent": [2, "tab"],
	"@stylistic/ts/lines-between-class-members": [2, "always"],
	"@stylistic/ts/member-delimiter-style": [
		2,
		{
			multiline: { delimiter: "semi", requireLast: true },
			overrides: { interface: { multiline: { delimiter: "semi", requireLast: true } } },
			singleline: { delimiter: "semi", requireLast: true },
		},
	],
	"@stylistic/ts/object-curly-spacing": [2, "always"],
	"@stylistic/ts/padding-line-between-statements": [
		2,
		{ blankLine: "always", next: "*", prev: "multiline-block-like" },
	],
	"@stylistic/ts/quotes": [2, "double"],
	"@stylistic/ts/semi": [2, "always"],
	"@stylistic/ts/space-before-blocks": [2, "always"],
	"@stylistic/ts/space-before-function-paren": [2, { anonymous: "always", named: "never", asyncArrow: "always" }],
	"@stylistic/ts/space-infix-ops": [2, { int32Hint: true }],

	// Additional rules
	"consistent-return": 0,
	"default-case": 0,
	"default-case-last": 0,
	"import-x/no-dynamic-require": 0,
	"import-x/no-unresolved": 0,
	"jsdoc/check-tag-names": 0,
	"jsdoc/require-property-type": 0,
	"no-undef": 0,
	"n/global-require": 0,
	"sonarjs/no-all-duplicated-branches": 2,
	"sonarjs/no-element-overwrite": 2,
	"sonarjs/no-empty-collection": 2,
	"sonarjs/no-extra-arguments": 2,
	"sonarjs/no-identical-conditions": 2,
	"sonarjs/no-identical-expressions": 2,
	"sonarjs/no-ignored-return": 2,
	"sonarjs/no-one-iteration-loop": 2,
	"sonarjs/no-use-of-empty-return-value": 2,
	"sonarjs/non-existent-operator": 2,
	"sonarjs/elseif-without-else": 0,
	"sonarjs/max-switch-cases": 0,
	"sonarjs/no-collapsible-if": 2,
	"sonarjs/no-collection-size-mischeck": 2,
	"sonarjs/no-duplicate-string": 0,
	"sonarjs/no-duplicated-branches": 2,
	"sonarjs/no-gratuitous-expressions": 2,
	"sonarjs/no-identical-functions": 2,
	"sonarjs/no-inverted-boolean-check": 2,
	"sonarjs/no-nested-switch": 2,
	"sonarjs/no-nested-template-literals": 0,
	"sonarjs/no-redundant-boolean": 2,
	"sonarjs/no-redundant-jump": 2,
	"sonarjs/no-same-line-conditional": 2,
	"sonarjs/no-small-switch": 0,
	"sonarjs/no-unused-collection": 2,
	"sonarjs/no-useless-catch": 0,
	"sonarjs/prefer-immediate-return": 2,
	"sonarjs/prefer-object-literal": 2,
	"sonarjs/prefer-single-boolean-return": 2,
	"sonarjs/prefer-while": 2,
	"tsdoc/syntax": 1,
	"typescript-sort-keys/interface": 2,
	"typescript-sort-keys/string-enum": 2,
};

const settings: TSESLint.FlatConfig.Settings = {
	jsdoc: {
		mode: "typescript",
	},
	"import-x/parsers": {
		"@typescript-eslint/parser": [".ts", ".tsx", ".cts", ".mts"],
	},
	"import-x/external-module-folders": ["node_modules", "node_modules/@types"],
	"import-x/extensions": [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx"],
	"import-x/resolver": {
		typescript: {
			alwaysTryTypes: true,
			project: ["./tsconfig.json", "./tsconfig.eslint.json"],
		},
		node: {
			extensions: [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx"],
		},
	},
};

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(...tseslint.configs.recommended, {
	plugins: {
		sonarjs: eslintPluginSonarjs,
		tsdoc: eslintPluginTsdoc,
		"typescript-sort-keys": fixupPluginRules(eslintPluginTypescriptSortKeys),
		"@stylistic/ts": eslintPluginStylisticTs,
		"@stylistic/js": eslintPluginStylistic,
	},
	rules,
	settings,
});

export default config;
