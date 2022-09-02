module.exports = {
	plugins: ["import", "svelte3"],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			rules: {
				"import/first": 0,
				"import/no-duplicates": 0,
				"import/no-mutable-exports": 0,
				"import/no-unresolved": 0,
				"import/prefer-default-export": 0,
			},
		},
	],
};
