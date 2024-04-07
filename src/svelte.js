const plugins = { svelte3: require("eslint-plugin-svelte3") };

const svelteRules = {
	"import/first": 0,
	"import/no-duplicates": 0,
	"import/no-mutable-exports": 0,
	"import/no-unresolved": 0,
	"import/prefer-default-export": 0,
};

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		plugins,
	},
	{
		plugins,
		processor: "svelte3/svelte3",
		rules: svelteRules,
	},
];
