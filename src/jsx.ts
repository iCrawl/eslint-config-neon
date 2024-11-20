import type { TSESLint } from "@typescript-eslint/utils";
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error eslint-plugin-react-refresh is not typed
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

const rules: TSESLint.FlatConfig.Rules = {
	// React
	"react/jsx-boolean-value": [2, "never"],
	"react/jsx-filename-extension": 0,
	"react/jsx-fragments": [2, "syntax"],
	"react/jsx-handler-names": [
		2,
		{
			checkInlineFunction: false,
			checkLocalVariables: false,
			eventHandlerPrefix: "handle",
			eventHandlerPropPrefix: "on",
		},
	],
	"react/jsx-indent-props": [2, "tab"],
	"react/jsx-key": [
		2,
		{
			checkFragmentShorthand: true,
			checkKeyMustBeforeSpread: true,
		},
	],
	"react/jsx-max-depth": 0,
	"react/jsx-no-bind": [
		2,
		{
			allowArrowFunctions: true,
			allowBind: false,
			ignoreRefs: true,
		},
	],
	"react/jsx-no-comment-textnodes": 2,
	"react/jsx-no-constructed-context-values": 2,
	"react/jsx-no-duplicate-props": 2,
	"react/jsx-no-literals": 0,
	"react/jsx-no-script-url": 2,
	"react/jsx-no-target-blank": 2,
	"react/jsx-no-undef": 2,
	"react/jsx-no-useless-fragment": [
		2,
		{
			allowExpressions: true,
		},
	],
	"react/jsx-props-no-spreading": 0,
	"react/jsx-uses-react": 2,
	"react/jsx-uses-vars": 2,

	// React Refresh
	"react-refresh/only-export-components": 1,

	// Unicorn
	"unicorn/consistent-function-scoping": 0, // We disable this because in React it's a common thing to have functions in functions

	// Stylistic
	"@stylistic/jsx/jsx-child-element-spacing": 0,
	"@stylistic/jsx/jsx-closing-bracket-location": [2, "line-aligned"],
	"@stylistic/jsx/jsx-closing-tag-location": 2,
	"@stylistic/jsx/jsx-curly-brace-presence": [
		2,
		{
			children: "never",
			props: "never",
		},
	],
	"@stylistic/jsx/jsx-curly-newline": 2,
	"@stylistic/jsx/jsx-curly-spacing": [
		2,
		"never",
		{
			allowMultiline: true,
		},
	],
	"@stylistic/jsx/jsx-equals-spacing": [2, "never"],
	"@stylistic/jsx/jsx-first-prop-new-line": [2, "multiline-multiprop"],
	"@stylistic/jsx/jsx-max-props-per-line": [
		2,
		{
			maximum: 3,
			when: "multiline",
		},
	],
	"@stylistic/jsx/jsx-newline": [
		2,
		{
			prevent: true,
		},
	],
	"@stylistic/jsx/jsx-one-expression-per-line": 0,
	"@stylistic/jsx/jsx-pascal-case": [
		2,
		{
			ignore: ["h{}", "h2", "h3", "h4", "h5", "h6", "p", "a", "ul", "ol", "li", "img", "div", "span", "dl", "dt", "dd"],
		},
	],
	"@stylistic/jsx/jsx-props-no-multi-spaces": 2,
	"@stylistic/jsx/jsx-sort-props": 2,
	"@stylistic/jsx/jsx-tag-spacing": [
		2,
		{
			afterOpening: "never",
			beforeSelfClosing: "always",
			closingSlash: "never",
		},
	],
	"@stylistic/jsx/jsx-wrap-multilines": 0,
	"@stylistic/jsx/jsx-indent": [2, "tab"],
};

const settings: TSESLint.FlatConfig.Settings = {
	"import-x/extensions": [".js", ".jsx"],
	"import-x/resolver": {
		node: {
			extensions: [".js", ".jsx"],
		},
	},
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"react-refresh": eslintPluginReactRefresh,
			// @ts-expect-error eslint-plugin-react is poorly typed
			react: eslintPluginReact,
		},
		rules,
		settings,
	},
];

export default config;
