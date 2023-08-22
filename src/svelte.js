const plugins = (old = true) =>
	old ? ["import", "svelte3"] : { import: require("eslint-plugin-import"), svelte3: require("eslint-plugin-svelte3") };

const svelteRules = {
	"import/first": 0,
	"import/no-duplicates": 0,
	"import/no-mutable-exports": 0,
	"import/no-unresolved": 0,
	"import/prefer-default-export": 0,
};

module.exports = {
	/** @type {import('eslint').Linter.Config} */
	default: {
		plugins: plugins(),
		overrides: [
			{
				files: ["*.svelte"],
				processor: "svelte3/svelte3",
				rules: svelteRules,
			},
		],
	},
	/** @type {import('eslint').Linter.FlatConfig} */
	flat: [
		{
			plugins: plugins(false),
		},
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			rules: svelteRules,
		},
	],
};
