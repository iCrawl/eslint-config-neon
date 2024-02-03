const plugins = (old = true) =>
	old
		? ["react"]
		: {
				react: require("eslint-plugin-react"),
			};

const rules = {
	"react/jsx-boolean-value": [2, "never"],
	"react/jsx-child-element-spacing": 0,
	"react/jsx-closing-bracket-location": [2, "line-aligned"],
	"react/jsx-closing-tag-location": 2,
	"react/jsx-curly-brace-presence": [
		2,
		{
			children: "never",
			props: "never",
		},
	],
	"react/jsx-curly-newline": 2,
	"react/jsx-curly-spacing": [
		2,
		"never",
		{
			allowMultiline: true,
		},
	],
	"react/jsx-equals-spacing": [2, "never"],
	"react/jsx-filename-extension": 0,
	"react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
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
	"react/jsx-indent": [2, "tab"],
	"react/jsx-indent-props": [2, "tab"],
	"react/jsx-key": [
		2,
		{
			checkFragmentShorthand: true,
			checkKeyMustBeforeSpread: true,
		},
	],
	"react/jsx-max-depth": 0,
	"react/jsx-max-props-per-line": [
		2,
		{
			maximum: 3,
			when: "multiline",
		},
	],
	"react/jsx-newline": [
		2,
		{
			prevent: true,
		},
	],
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
	"react/jsx-one-expression-per-line": 0,
	"react/jsx-pascal-case": [
		2,
		{
			ignore: ["h{}", "h2", "h3", "h4", "h5", "h6", "p", "a", "ul", "ol", "li", "img", "div", "span", "dl", "dt", "dd"],
		},
	],
	"react/jsx-props-no-multi-spaces": 2,
	"react/jsx-props-no-spreading": 0,
	"react/jsx-sort-props": 2,
	"react/jsx-tag-spacing": [
		2,
		{
			afterOpening: "never",
			beforeSelfClosing: "always",
			closingSlash: "never",
		},
	],
	"react/jsx-uses-react": 2,
	"react/jsx-uses-vars": 2,
	"react/jsx-wrap-multilines": 0,
};

const settings = {
	"import/extensions": [".js", ".jsx"],
	"import/resolver": {
		node: {
			extensions: [".js", ".jsx"],
		},
	},
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		plugins: plugins(),
		rules,
		settings,
	},
	/** @type {import('eslint').Linter.FlatConfig[]} */
	flat: [
		{
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
			plugins: plugins(false),
			rules,
			settings,
		},
	],
};
